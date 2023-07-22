import SearchBar from '@/components/SearchBar';
import { render } from '@testing-library/react';

describe('SearchBar unit tests', () => {
  test('SearchBar renders on the page', () => {
    render(<SearchBar />);
  });
});
