import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import '@testing-library/jest-dom';
import { of } from 'rxjs/internal/observable/of';
import { FlickrService } from './flickr.service';

const photos = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 100,
    total: 2,
    photo: [
      {
        id: '53958517686',
        owner: '201410515@N08',
        secret: '8f619be906',
        server: '65535',
        farm: 66,
        title: 'pato2',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '53958912935',
        owner: '201410515@N08',
        secret: 'f6abd09532',
        server: '65535',
        farm: 66,
        title: 'LvDy2iT',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
    ],
  },
};

describe('FlickrService', () => {
  it('should get a response from the fetch request', async () => {
    TestBed.configureTestingModule({
      providers: [FlickrService, { provide: HttpClient, useValue: { get: () => of(photos) } }],
    });

    const http: HttpClient = TestBed.inject(HttpClient);

    const flickrService = new FlickrService(http);

    flickrService.getImages().subscribe((response) => {
      expect(photos.photos.photo[0].id).toBe(response.photos.photo[0].id);
      expect(photos.photos.photo[0].title).toBe(response.photos.photo[0].title);
    });
  });
});
