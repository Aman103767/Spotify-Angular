import { Album } from "./Album.model";
import { Artist } from "./Artist.model";
import { Base64 } from "./Base64";
import { Song } from "./Song.model";

export class UploadTO {
    public songMusic: Base64;
    public songImage: Base64;
    public artistImage: Base64;
    public albumImage: Base64;
    public song: Song;
    public artist: Artist;
    public album : Album;

}