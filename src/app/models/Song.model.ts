import { Album } from "./Album.model";
import { Artist } from "./Artist.model";
import { Playlist } from "./Playlist.model";

export class Song {
    id: number;
    name: string;
    address: string;
    image: string;
    jenre: string;
  
    artists: Artist[] = []
    
    album: Album;
  
    playlists: Playlist[]=[]
  
    likes: number;
  }
  