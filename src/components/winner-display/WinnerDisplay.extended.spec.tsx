import '@testing-library/jest-dom';
import { WinnerDisplay } from './WinnerDisplay.extended';
import { render, act, screen } from '@testing-library/react';

// TODO complete tests
describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    // TODO - complete the test
    render(
      <WinnerDisplay text={'Red Dragon'} />
    )

    expect(screen.getByText('Red Dragon wins!')).toBeInTheDocument();
  });
});
