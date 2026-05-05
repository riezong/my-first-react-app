import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// 1. Import from vitest
import { describe, test, expect } from 'vitest';
import App from '../src/Example-SimulatingUserInteractions';

describe('Testing App Component', () => {
  // 2. Make the test function 'async'
  test('counter is incremented on increment button click', async () => {
    // 3. Initialize userEvent
    const user = userEvent.setup();
    render(<App />);

    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByText('Increment');

    // 4. Await the clicks
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    expect(counter.textContent).toEqual('2');
  });

  test('counter is decremented on decrement button click', async () => {
    const user = userEvent.setup();
    render(<App />);

    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByText('Decrement');

    await user.click(decrementBtn);
    await user.click(decrementBtn);

    expect(counter.textContent).toEqual('-2');
  });
});