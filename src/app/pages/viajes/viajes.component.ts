import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PictureComponent } from '@components/picture/picture.component';
import type { ApiResponse } from '@models/api-response';
import type { Photo } from '@models/photo.interface';
import { FlickrService } from '@services/flickr.service';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [PictureComponent],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css',
})
export class ViajesComponent implements OnInit {
  photoContent: Photo[] = [];

  flickrService = inject(FlickrService);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.flickrService
      .getImages()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ApiResponse) => {
        this.photoContent = response.photos.photo;
      });
  }
}
