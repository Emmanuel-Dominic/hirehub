import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../components/Home';
import { homeMessage } from '../services/index';

jest.mock('../services/index', () => ({
  homeMessage: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders message from API correctly when fetched successfully', async () => {
    const mockMessage = "The application for adding or updating candidate’s information";
    homeMessage.mockResolvedValue({ message: mockMessage });
    await act(async () => {
        render(<Home />);
    });
    await waitFor(() => {
      expect(screen.getByText(mockMessage)).toBeInTheDocument();
    });
  });
});
