import { Component, Input } from '@angular/core';
import type { Picture } from '@models/picture.interface';

@Component({
  selector: 'app-picture-card',
  standalone: true,
  templateUrl: './picture-card.component.html',
  styleUrl: './picture-card.component.css',
})
export class PictureCardComponent {
  @Input({ required: true }) picture: Picture | undefined;
}
