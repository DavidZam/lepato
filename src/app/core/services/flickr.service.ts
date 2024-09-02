import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { ApiResponse } from '@models/api-response';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlickrService {
  private flickrBaseUrl: string = 'https://www.flickr.com/services/rest/';
  private extraParameters: string = '?method=flickr.people.getPhotos';
  private userId: string = '201410515@N08';

  constructor(private httpClient: HttpClient) {}

  getImages(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.flickrBaseUrl}${this.extraParameters}&user_id=${this.userId}&format=json&nojsoncallback=1`).pipe(tap((data) => console.log(data)));
  }
}
