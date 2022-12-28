import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test.each([['a'], ['text'], ['a bit longer text']])('Input "%p"', async (text) => {
  const user = userEvent.setup();
  render(<input data-testid="input" type="text" />);
  const input = screen.getByTestId('input');

  console.time(text);
  await user.type(input, text)
  console.timeEnd(text);
});
