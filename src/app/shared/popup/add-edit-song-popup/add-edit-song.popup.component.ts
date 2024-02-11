import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';
import { Song } from 'src/app/models/Song.model';
import { ApiCallsService } from '../../api-calls.service';
import { UploadTO } from 'src/app/models/UploadTO.model';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Base64 } from 'src/app/models/Base64';
import { Album } from 'src/app/models/Album.model';


@Component({
  selector: 'app-add-edit-song-popup',
  templateUrl: './add-edit-song.popup.component.html',
  styleUrls: ['./add-edit-song.popup.component.css']
})
export class AddEditSongPopupComponent implements OnInit {

  @Input() visible = false;
  @Input() popupTitle = '';

  song: Song = new Song();

  uploadTO: UploadTO = new UploadTO();
  artist: Artist = new Artist();
  album: Album = new Album();

  @Output() modelEvent: EventEmitter<Object> = new EventEmitter<Object>();
  constructor(private apiService: ApiCallsService) {

  }
  imgUrl: any;

  ngOnInit(): void {
    this.song.artists.push(new Artist())
  }

  closeModel() {
    this.visible = false;
    this.modelEvent.emit(false);
  }

  //   onUploadSongImg(event){

  // console.log(event,">>>>>>>>>img>>>")
  // this.song.image = event.files[0];

  //   }

  uploadSong(event) {
    console.log(event, "uplod song")
    if (event.target.files[0]) {
      const file = event.target.files[0];
      this.getFileData(file, "SONG");
    } else {
      this.uploadTO.songMusic = null;
    }

  }
  uploadSongImg(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      this.getFileData(file, "SONG_IMG");
    } else {
      this.uploadTO.songImage = null;
    }
  }

  uploadArtistImg(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      this.getFileData(file, "ARTIST_IMG");
    } else {
      this.uploadTO.artistImage = null;
    }
  }

  uploadAlbumImg(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      this.getFileData(file, "ALBUM_IMG");
    } else {
      this.uploadTO.albumImage = null;
    }
  }


  getFileData(file, type) {
    const reader = new FileReader();
    const base = new Base64();
    base.mimeType = file.type;
    base.name = file.name;
    reader.readAsDataURL(file);
    reader.onloadend = e => {
      this.imgUrl = e.target.result;
      console.log(this.imgUrl, "img")
      base.encodedString = reader.result + '';
      type == 'SONG_IMG' ? this.uploadTO.songImage = base : (type == 'SONG' ? this.uploadTO.songMusic = base
        : (type == 'ARTIST_IMG' ? this.uploadTO.artistImage = base : (type == 'ALBUM_IMG' ? this.uploadTO.albumImage = base : null)));
    }
  }

  save() {
    console.log(this.uploadTO, "upload")
    if (this.popupTitle == 'Song') {
      this.uploadTO.song = this.song;
      this.apiService.addSong(this.uploadTO).subscribe((response) => {
        console.log(response, "response");
      })
    } else if (this.popupTitle == 'Artist') {
      this.uploadTO.artist = this.artist;
      this.apiService.addSong(this.uploadTO).subscribe((response) => {
        console.log(response, "response");
      })

    } else if(this.popupTitle == 'Album'){
      this.uploadTO.album = this.album; 
      this.apiService.addSong(this.uploadTO).subscribe((response) => {
        console.log(response, "response");
      })

    }

  }


}
