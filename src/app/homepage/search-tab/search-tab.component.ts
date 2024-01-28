import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css']
})
export class SearchTabComponent implements OnInit{

  constructor(public sharedService: SharedService ,private route : ActivatedRoute){

  }

  ngOnInit(): void {
    const currentUrlSegments = this.route.snapshot.url;
    const currentUrl = currentUrlSegments.map(segment => segment.path).join('/');
    console.log('Current URL:', currentUrl);
    this.sharedService.selectPage(currentUrl);
  }


}
