import { TestBed, inject } from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('Album.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Album.ServiceService]
    });
  });

  it('should be created', inject([Album.ServiceService], (service: Album.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
