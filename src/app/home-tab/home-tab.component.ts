import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent {

  public songs: any[] = [
    {   
      name: 'Guli Mata',
      img : "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
      link: 'https://songaws.s3.amazonaws.com/1705593794357_Guli+Mata_320(PagalWorld.com.pe).mp3',
      artists: ['Saad LamJarred', 'Shreya Ghoshal','Rajat Nagpal'],
      duration: 10  
    },

    {
      name: 'heeriye',
      img : 'https://songimages.s3.amazonaws.com/heeriye.jpg',
      link: 'https://songaws.s3.amazonaws.com/1705593855624__Heeriye_320(PagalWorld.com.pe).mp3',
      artists: ['Jasleen Royal', 'Arijit Singh, HarrayKhahanhai'],
      duration: 240
    },

    {
      name: 'kesariya',
      img : 'https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62',
      link: 'https://songaws.s3.amazonaws.com/1705593940370_Kesariya_320(PagalWorld.com.pe).mp3',
      artists: ['Pritam','Arijit Singh','Amitabh Bhattacharya'],
      duration: 240
    },
    {
      name: 'tu hai to Mujhe phir kya chahiye',
      img: 'https://i.scdn.co/image/ab67616d00001e02bf8097b2589277bd3d8f7a2d',  
      link: 'https://songaws.s3.amazonaws.com/1705593989717_Tu+Hai+To+Mujhe+Phir+Aur+Kya+Chahiye_320(PagalWorld.com.pe).mp3',
      artists: ['Sachin-Jigar',"Arijit Singh, Amitabh Bhattacharya"],
      duration: 240
    },

  ];
  @Output() onSongSelect: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(public sharedService: SharedService){

  }

  selectSong(event){
   this.sharedService.selectSong(event);

  }


}
