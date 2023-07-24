import Carousel from 'components/Carousel';
import { render } from '@testing-library/react';

describe('Carousel unit tests', () => {
  test('Carousel renders on the page', () => {
    render(
      <Carousel
        images={['/images/interior-1.jpeg', '/images/interior-3.jpeg']}
      />,
    );
  });
});
