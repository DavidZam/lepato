import { Component, Input } from '@angular/core';
import type { Picture } from '@models/picture.interface';
import { PictureCardComponent } from '../picture-card/picture-card.component';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [PictureCardComponent],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent {
  @Input() pictureContent: Picture[] = [];
}
