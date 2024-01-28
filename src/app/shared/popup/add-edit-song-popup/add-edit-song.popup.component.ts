import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-song-popup',
  templateUrl: './add-edit-song.popup.component.html',
  styleUrls: ['./add-edit-song.popup.component.css']
})
export class AddEditSongPopupComponent {

  @Input() visible: boolean = true;
}
