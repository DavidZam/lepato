import { HttpClient, HttpHandler } from '@angular/common/http';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PictureComponent } from './picture.component';

describe('Picture', () => {
  it('should render the component', async () => {
    await render(PictureComponent, {
      providers: [HttpClient, HttpHandler],
    });
  });
});
