import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number) {
    for(let album of ALBUMS) {
      if (album.id === albumId) {
        console.log(album);
        return album;
      }
    }
  }
}
