import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../models/Song.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {

  // baseUrl: string = "http://localhost:8080";
  baseUrl: string = "http://ec2-34-227-46-223.compute-1.amazonaws.com:8080";

  constructor(private http: HttpClient) {

  }

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/music/getAllSong`);
  }

  addSong(data): Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/music/addSong`,data);
  }

  addArtist(data): Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/music/addArtist`,data);
  }


}
