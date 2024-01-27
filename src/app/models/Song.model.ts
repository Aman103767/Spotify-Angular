export class Song {
    id: number;
    name: string;
    address: string;
    artistName: string;
    image: string;
    jenre: string;
  
    artists: { id: number | null, name: string, image: string }[];
    
    album: { id: number | null, name: string, categoryName: string, image: string };
  
    playlists: { id: number | null, name: string }[];
  
    likes: number;
  }
  