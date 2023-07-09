import { Component,OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css','../theme/normal-theme.css']
})
export class HomePageComponent implements OnInit{
  normalTheme = false;
  constructor(private themeService:ThemeService){}

  ngOnInit(): void {
    let theme = localStorage.getItem('Theme');
    if(theme=== 'true'){
      this.normalTheme = true;
    }else {
      this.normalTheme = false;
    }
  }

  getAndSetTheme(){
   let theme =  localStorage.getItem("Theme");
   if(theme=== 'true'){
    this.normalTheme = true;
  }else {
    this.normalTheme = false;
  }
    // this.themeService.setActiveTheme(this.normalTheme);
    return this.normalTheme;
  }
  setTheme(event){
    localStorage.setItem('Theme',event+"");
    this.normalTheme = event;
    this.themeService.setActiveTheme(this.normalTheme);
  }
}
