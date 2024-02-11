import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditSongPopupComponent } from './add-edit-song-popup/add-edit-song.popup.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from "primeng/button"; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { SpeedDialModule } from 'primeng/speeddial';





@NgModule({
  declarations: [
    AddEditSongPopupComponent
  ],
  imports: [
    CommonModule, DialogModule, ButtonModule, BrowserAnimationsModule,FormsModule,InputTextModule,FileUploadModule,ReactiveFormsModule, SpeedDialModule
  ],
  exports: [
    AddEditSongPopupComponent
  ]
})
export class PopupModule { }
