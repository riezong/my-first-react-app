import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { vi, test, expect } from 'vitest';
import { App, Input } from '../src/Example-Callback';
import UserEvent from '@testing-library/user-event';

// test('input value is updated correctly', async() => {
//   const user = UserEvent.setup();

//   render(<App />);

//   const input = screen.getByRole('textbox');
//   await user.type(input, 'React');

//   expect(input.value).toBe('React');
// });

test('call the callback every time input value is changed', async() => {
  const handleChange = vi.fn();

  const user = UserEvent.setup();

  render(<Input handleChange={handleChange} inputValue="" />);

  const input = screen.getByRole('textbox');
  await user.type(input, 'React');

  expect(handleChange).toHaveBeenCalledTimes(5);
});