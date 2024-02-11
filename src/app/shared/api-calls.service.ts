import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../models/Song.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {

  baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {

  }

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/music/getAllSong`);
  }

  addSong(data): Observable<Object>{
    console.log(data,"songdata")
    return this.http.post<Object>(`${this.baseUrl}/music/addSong`,data);
  }
}
