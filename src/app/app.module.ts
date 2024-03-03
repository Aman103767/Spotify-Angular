import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { SliderModule } from 'primeng/slider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component'; // Import the SliderModule
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './homepage/home-tab/home-tab.component';
import { SongComponent } from './song/song.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchTabComponent } from './homepage/search-tab/search-tab.component';
import { AddEditSongComponent } from './add-edit-all-forms/add-edit-song/add-edit-song.component';
import { SongFormsModule } from './add-edit-all-forms/add-edit-song/add-form.module';
import { PopupModule } from './shared/popup/popup.module';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';



const routes: Routes = [
  { path: 'home', component: HomeTabComponent },
  { path: 'search', component: SearchTabComponent},
  { 
    path: 'form', 
    loadChildren: () => import('./add-edit-all-forms/add-edit-song/add-form.module').then(m => m.SongFormsModule) 
}
];

@NgModule({
  declarations: [AppComponent, PlayerComponent, SidebarComponent, HomepageComponent, SongComponent, SearchTabComponent, HomeTabComponent],
  imports: [BrowserModule, FormsModule, CommonModule,DialogModule, SliderModule, RouterModule,HttpClientModule,RouterModule.forRoot(routes),SongFormsModule,PopupModule, SpeedDialModule, TieredMenuModule, MenuModule],
  providers: [HttpClient],
  bootstrap: [AppComponent] // Add the root component to be bootstrapped
})
export class AppModule { }
