import { Component } from '@angular/core';
import { PictureComponent } from '@components/picture/picture.component';
import type { Picture } from '@models/picture.interface';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [PictureComponent],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css',
})
export class ViajesComponent {
  pictureContent: Picture[] = [
    {
      id: 1,
      url: 'https://drive.google.com/u/0/drive-viewer/AKGpihYhbh0dLoO36M1nAVtksV6fJIQURRNy_TzRJ_Ys-plo6tEPYTLt13SCrCsAmqgvBpD9cJkG6NdvrPgjYijZJjzc1kI1Xh_sZIY=s1600-rw-v1',
    },
    {
      id: 2,
      url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    },
    {
      id: 3,
      url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    },
    {
      id: 4,
      url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    },
    {
      id: 5,
      url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    },
    {
      id: 6,
      url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
    },
  ];
}
