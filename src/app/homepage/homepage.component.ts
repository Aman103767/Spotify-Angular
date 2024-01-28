import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentPage: string;
  currentTrack: any;
  private subscription: Subscription;


  ngOnInit() {
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

  


}
