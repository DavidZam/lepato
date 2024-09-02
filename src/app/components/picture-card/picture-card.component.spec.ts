import type { Photo } from '@models/photo.interface';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PictureCardComponent } from './picture-card.component';

const photo: Photo = {
  id: '53958517686',
  owner: '201410515@N08',
  secret: '8f619be906',
  server: '65535',
  title: 'pato2',
};

describe('Picture Card', () => {
  it('should get the photo url from a photo', async () => {
    const { fixture } = await render(PictureCardComponent, {
      componentProperties: {
        photo,
      },
    });

    const component = fixture.componentInstance;

    const url = component.getPhotoUrl(photo);

    const sizeSuffix = 'b';

    expect(url).toBe(`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`);
  });

  it('should display picture url on render', async () => {
    await render(PictureCardComponent, {
      componentProperties: {
        photo,
      },
    });

    const mockGetPhotoUrl = jest.spyOn(PictureCardComponent.prototype, 'getPhotoUrl').mockReturnValue('https://live.staticflickr.com/65535/53958517686_8f619be906_b.jpg');

    const imgElement = screen.getByAltText(photo.title);
    expect(imgElement).toHaveAttribute('src', 'https://live.staticflickr.com/65535/53958517686_8f619be906_b.jpg');

    // Restore the original implementation after the test
    mockGetPhotoUrl.mockRestore();
  });
});
