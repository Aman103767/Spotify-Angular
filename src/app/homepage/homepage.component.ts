import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentPage: string;
  currentTrack: any;
  private subscription: Subscription; 
  visible: boolean = false;
  items:  any [] = [];
  popupTitle : string;
  @ViewChild('menu') menu!: TieredMenu; 



  ngOnInit() {

    this.items = [
      {
          label: 'Artist',
          icon: 'pi pi-plus',
          command: () => this.openModel('Artist')
      },
      {
          label: 'Song',
          icon: 'pi pi-plus',
          command: () => this.openModel('Song')


      },
      {
          label: 'Album',
          icon: 'pi pi-plus',
          command: () => this.openModel('Album')


      }
  ]
  }
  constructor(private route: ActivatedRoute,private sharedService : SharedService) { 

    this.subscription = this.sharedService.currentPage$.subscribe((selectedPage) => {
        this.currentPage = selectedPage;
        console.log(this.currentPage,">>>>>>>>>>.");
    });
  }

  selectPage(event){
    this.sharedService.selectPage(event);
    this.currentPage = event;
  }

  openModel(title){
    this.visible = true;
    this.popupTitle = title;
  }

  closeModel(){
    this.visible = false;
  }
  


}
