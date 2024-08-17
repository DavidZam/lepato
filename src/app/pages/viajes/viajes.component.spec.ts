import { HttpClient, HttpHandler } from '@angular/common/http';
import { PictureComponent } from '@components/picture/picture.component';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ViajesComponent } from './viajes.component';

describe('ViajesComponent', () => {
  it('should render the component', async () => {
    await render(ViajesComponent, {
      imports: [PictureComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
