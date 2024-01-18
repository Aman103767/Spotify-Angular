// audio.service.ts
import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private sound: Howl;
  public loop:boolean = false;
  public playlist: any[] = [
    {   
      title: 'Guli Mata',
      img : "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
      link: 'https://songaws.s3.amazonaws.com/1705593794357_Guli+Mata_320(PagalWorld.com.pe).mp3',
      artists: ['Saad LamJarred', 'Shreya Ghoshal','Rajat Nagpal'],
      duration: 10  
    },

    {
      title: 'heeriye',
      img : 'https://songimages.s3.amazonaws.com/heeriye.jpg',
      link: 'https://songaws.s3.amazonaws.com/1705593855624__Heeriye_320(PagalWorld.com.pe).mp3',
      artists: ['Jasleen Royal', 'Arijit Singh, HarrayKhahanhai'],
      duration: 240
    },

    {
      title: 'kesariya',
      img : 'https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62',
      link: 'https://songaws.s3.amazonaws.com/1705593940370_Kesariya_320(PagalWorld.com.pe).mp3',
      artists: ['Pritam','Arijit Singh','Amitabh Bhattacharya'],
      duration: 240
    },
    {
      title: 'tu hai to Mujhe phir kya chahiye',
      img: 'https://i.scdn.co/image/ab67616d00001e02bf8097b2589277bd3d8f7a2d',  
      link: 'https://songaws.s3.amazonaws.com/1705593989717_Tu+Hai+To+Mujhe+Phir+Aur+Kya+Chahiye_320(PagalWorld.com.pe).mp3',
      artists: ['Sachin-Jigar',"Arijit Singh, Amitabh Bhattacharya"],
      duration: 240
    },

  ];
  public currentTrackIndex: number = 0;
  private pausedPosition: number = 0;
  volume : number = 1;
 
  setPlaylist(playlist: any[]): void {
    this.playlist = playlist;
  }
  
  getTrackDuration(): number {
    return this.sound ? this.sound.duration() : 0;
  }

  playAudio(): void {
    if (this.playlist.length === 0) {
      return;
    }

    const track = this.playlist[this.currentTrackIndex];
    this.sound = new Howl({
      src: [track.link],
      format: ['mp3'],
      volume:this.volume,onend: () => {
        if (this.loop) {
          this.playAudio(); // Play the same track again if looping is enabled
        } else {
          this.playNextTrack(true); // Play the next track if not looping
        }
      },
    });

    if (this.pausedPosition > 0) {
      this.sound.seek(this.pausedPosition);
    }

    this.sound.play();
  }

  pauseAudio(): void {
    if (this.sound && this.sound.playing()) {
      this.pausedPosition = this.sound.seek();
      this.sound.pause();
    }
  }

  stopAudio(): void {
    if (this.sound) {
      this.sound.stop();
      this.pausedPosition = 0;
    }
  }

  setVolume(volume: number): void {
    if (this.sound) {
      const isPlaying = this.sound.playing();
      this.volume = volume;

      if (isPlaying) {
        // Gradually change the volume over a short duration
        this.sound.fade(this.sound.volume(), volume, 300);
      } else {
        // If not playing, simply set the volume
        this.sound.volume(volume);
      }
    }
  }

  getDuration(): number {
    return this.sound ? this.sound.duration() : 0;
  }

  getCurrentTime(): number {
    return this.sound ? this.sound.seek() : 0;
  }

  playNextTrack(isPlaying): void {
    if (this.sound) {
      this.sound.stop(); // Stop the current track
    }
  
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    this.pausedPosition = 0; // Reset paused position
    if(isPlaying){
      this.playAudio();
    }  
  }

  playPreviousTrack(isPlaying): void {
    if (this.sound) {
      this.sound.stop(); // Stop the current track
    }
  
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.pausedPosition = 0; // Reset paused position
    if(isPlaying){
      this.playAudio();
    }
  }

  seekTo(seconds: number): void {
    if (this.sound) {
      this.sound.seek(seconds);
    }
  }
}
