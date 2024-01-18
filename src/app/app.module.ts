import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { SliderModule } from 'primeng/slider'; // Import the SliderModule


@NgModule({
  declarations: [AppComponent, PlayerComponent],
  imports: [BrowserModule, FormsModule, CommonModule, SliderModule],
  providers: [],
  bootstrap: [AppComponent] // Add the root component to be bootstrapped
})
export class AppModule { }
