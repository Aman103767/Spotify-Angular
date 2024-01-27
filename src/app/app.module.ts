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
import { HomeTabComponent } from './home-tab/home-tab.component';
import { SongComponent } from './song/song.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchTabComponent } from './homepage/search-tab/search-tab.component';

const routes: Routes = [
  { path: 'home', component: HomeTabComponent },
  { path: 'search', component: SearchTabComponent}
  // Add other routes as needed
];

@NgModule({
  declarations: [AppComponent, PlayerComponent, SidebarComponent, HomepageComponent, HomeTabComponent, SongComponent, SearchTabComponent],
  imports: [BrowserModule, FormsModule, CommonModule, SliderModule, RouterModule,HttpClientModule,RouterModule.forRoot(routes)  ],
  providers: [HttpClient],
  bootstrap: [AppComponent] // Add the root component to be bootstrapped
})
export class AppModule { }
