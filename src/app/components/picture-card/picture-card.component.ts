import { Component, Input } from '@angular/core';
import type { Photo } from '@models/photo.interface';

@Component({
  selector: 'app-picture-card',
  standalone: true,
  templateUrl: './picture-card.component.html',
  styleUrl: './picture-card.component.css',
})
export class PictureCardComponent {
  @Input({ required: true }) photo: Photo | undefined;

  getPhotoUrl(photo: Photo | undefined): string {
    if (!photo) {
      throw new Error('There is no photo to get the url from');
    }

    const sizeSuffix = 'b'; // Puedes cambiar el sufijo según el tamaño que desees

    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`;
  }
}
