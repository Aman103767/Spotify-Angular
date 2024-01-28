import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private songSelectedSubject = new Subject<any>();
  private currentPage = new Subject<any>();
  songSelected$ = this.songSelectedSubject.asObservable();
  currentPage$ = this.currentPage.asObservable();

  selectSong(song: any) {
    this.songSelectedSubject.next(song);
  }
  selectPage(currentPage) {
    this.currentPage.next(currentPage);
  }

}
