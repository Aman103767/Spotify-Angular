import { Component, Input, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AudioService } from '../audio.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  play: boolean = false;
  @Input() currentTrack: any;

  songDurationInSeconds: number = this.audioService.getTrackDuration(); // Replace with the actual duration of the song in seconds
  timerInterval: any;


  get playableSong() {
    return this.audioService.playlist[this.audioService.currentTrackIndex]
  }

  getLoopSong(isloop: boolean) {
    return this.audioService.loop = isloop;
  }

  // {
  //   title: 'heeriye',
  //   link: 'https://songaws.s3.amazonaws.com/_Heeriye_320(PagalWorld.com.pe).mp3',
  //   artists: ["Aman Sharma", "Sachin Sanghvi", "jigar Sarayiya"],
  //   duration: 240
  // }



  private audioSubscription: Subscription;

  isPlaying: boolean = false;
  volume: number = 100;
  prevVol: number;
  progress: number = 0;
  private subscription: Subscription;


  constructor(public audioService: AudioService, public sharedService: SharedService) {
    this.audioSubscription = timer(0, 1000).subscribe(() => {
      if (this.isPlaying) {
        this.progress = (this.audioService.getCurrentTime() / this.audioService.getDuration()) * 100;
      }
    });
    this.subscription = this.sharedService.songSelected$.subscribe((selectedSong) => {
      if (selectedSong) {
        this.currentTrack = selectedSong;
        this.audioService.playlist.forEach((song, i) => {
          if (song.name == selectedSong.name) {
            this.audioService.currentTrackIndex = i;
            this.stopAudio();
            this.playAudio();
          }
        })

      }
      // this.playAudio()
    });
  }
  ngOnInit(): void {
    this.currentTrack = this.playableSong;
    this.changeVolume();
  }


  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
    this.audioSubscription.unsubscribe();
    this.subscription.unsubscribe();

  }

  playAudio(): void {
    this.audioService.playAudio();
    this.isPlaying = true;
  }

  pauseAudio(): void {
    this.audioService.pauseAudio();
    this.isPlaying = false;
  }

  stopAudio(): void {
    this.audioService.stopAudio();
    this.isPlaying = false;
  }
  prevV: number;
  changeVolume(mute = false, userInput = false): void {
    if (this.volume) {
      this.prevV = this.volume;
    }
    if (mute) {
      this.volume = 0;
    }
    if (userInput) {
      this.volume = 70;
      if (this.prevV) {
        this.volume = this.prevV;
      }
    }
    this.audioService.setVolume(this.volume ? this.volume / 100 : this.volume);
    this.prevVol = this.volume;
  }

  seekTo(percent: number): void {
    const duration = this.audioService.getDuration();
    const seekTime = (percent / 100) * duration;
    this.audioService.seekTo(seekTime);
  }

  playNextTrack(): void {
    this.progress = 0;
    // this.currentTrack =  this.playableSong;
    this.currentTrack = this.audioService.playlist[(this.audioService.currentTrackIndex + 1) % this.audioService.playlist.length];
    this.audioService.playNextTrack(this.isPlaying);
  }

  playPreviousTrack(): void {
    this.progress = 0;
    // this.currentTrack =  this.playableSong;
    this.currentTrack = this.audioService.playlist[(this.audioService.currentTrackIndex - 1 + this.audioService.playlist.length) % this.audioService.playlist.length];
    this.audioService.playPreviousTrack(this.isPlaying);
  }

  getPlaylist(): any[] {
    return this.audioService.playlist;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

}
