import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Call } from '@angular/compiler';
import { ApiCallsService } from '../../shared/api-calls.service';
import { ActivatedRoute } from '@angular/router';
import { AudioService } from 'src/app/shared/audio.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css'],
  providers: [ApiCallsService]
})
export class HomeTabComponent implements OnInit {

  public songs: any[] = [];
  @Output() onSongSelect: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(public sharedService: SharedService, public apicallService: ApiCallsService, private route: ActivatedRoute,public audioService: AudioService ) {

  }
  ngOnInit(): void {
    this.apicallService.getAllSongs().subscribe(response => {
      this.songs = response;
      this.songs.forEach(song => {
        song['link'] = song.address;
      })
      this.audioService.playlist = this.songs;
    })


    const currentUrlSegments = this.route.snapshot.url;
    const currentUrl = currentUrlSegments.map(segment => segment.path).join('/');
    console.log('Current URL:', currentUrl);
    this.sharedService.selectPage(currentUrl);

  }

  selectSong(event) {
    this.sharedService.selectSong(event);

  }


}
