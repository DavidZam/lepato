import type { Picture } from '@models/picture.interface';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PictureCardComponent } from './picture-card.component';

const picture: Picture = {
  id: 1,
  url: 'https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
};

describe('Picture Card', () => {
  it('should render the component', async () => {
    await render(PictureCardComponent);
  });

  it('should display media poster path on render', async () => {
    await render(PictureCardComponent, {
      componentProperties: {
        picture,
      },
    });

    expect(screen.getByAltText(/Picture Card Image/)).toBeInTheDocument();

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(`${picture.url}`);
  });
});
