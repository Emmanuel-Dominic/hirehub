import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar Component', () => {
  it('renders home link correctly', async() => {
    await act(async () => {
        render(
            <MemoryRouter>
              <NavBar />
            </MemoryRouter>
          );
    });
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders candidates link correctly', async() => {
    await act(async () => {
        render(
            <MemoryRouter>
              <NavBar />
            </MemoryRouter>
          );
    });
    const candidatesLink = screen.getByText('Candidates');
    expect(candidatesLink).toBeInTheDocument();
    expect(candidatesLink.closest('a')).toHaveAttribute('href', '/candidates');
  });
});
