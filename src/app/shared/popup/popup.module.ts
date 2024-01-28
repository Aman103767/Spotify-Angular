import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditSongPopupComponent } from './add-edit-song-popup/add-edit-song.popup.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AddEditSongPopupComponent
  ],
  imports: [
    CommonModule, DialogModule, BrowserAnimationsModule
  ],
  exports: [
    AddEditSongPopupComponent
  ]
})
export class PopupModule { }
