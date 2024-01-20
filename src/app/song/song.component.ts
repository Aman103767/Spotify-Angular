import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
 @Input() song : any;
 @Output() onSongSelect: EventEmitter<Object> = new EventEmitter<Object>();

 selectSong(){
  this.onSongSelect.emit(this.song)
 }

}
