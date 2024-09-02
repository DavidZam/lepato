import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { Photo } from '@models/photo.interface';
import { PictureCardComponent } from '../picture-card/picture-card.component';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [PictureCardComponent, CommonModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent {
  @Input() photoContent: Photo[] = [];
}
