import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private songSelectedSubject = new Subject<any>();
  songSelected$ = this.songSelectedSubject.asObservable();

  selectSong(song: any) {
    this.songSelectedSubject.next(song);
  }

}
