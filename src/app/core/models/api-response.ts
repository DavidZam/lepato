import type { Photo } from './photo.interface';

export type ApiResponse = {
  photos: {
    page: number;
    pages: number;
    prepage: number;
    photo: Photo[];
    total: number;
  };
  stat: string;
};
