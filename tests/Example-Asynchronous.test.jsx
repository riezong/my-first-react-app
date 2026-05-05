/** @env jsdom */
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { vi } from 'vitest';
import App from '../src/Example-Asynchronous';

window.fetch = vi.fn(() => {
  const user = { name: 'Jack', email: 'jack@email.com' };

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

describe('Testing App Component', () => {
  test('loading text is shown while API request is in progress', async () => {
    render(<App />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  test("user's name is rendered", async () => {
    render(<App />);
    const userName = await screen.findByText('Jack');
    expect(userName).toBeInTheDocument();
  });

  test('error message is shown', async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: 'API is down' });
    });

    render(<App />);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});