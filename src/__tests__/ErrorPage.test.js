import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

describe('ErrorPage Component', () => {
  it('renders page not found message', async() => {
    await act(async () => {
        render(
            <MemoryRouter>
              <ErrorPage />
            </MemoryRouter>
          );
    });
    const pageTitle = screen.getByText('PAGE NOT FOUND');
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders navigate back message', async() => {
    await act(async () => {
        render(
            <MemoryRouter>
              <ErrorPage />
            </MemoryRouter>
          );
    });
    const navigateMessage = screen.getByText('Please, navigate back to the home page:');
    expect(navigateMessage).toBeInTheDocument();
  });

  it('renders Go to Home link correctly', async() => {
    await act(async () => {
        render(
            <MemoryRouter>
              <ErrorPage />
            </MemoryRouter>
          );
    });
    const homeLink = screen.getByText('Go to Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
