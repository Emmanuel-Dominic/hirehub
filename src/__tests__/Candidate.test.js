import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Candidate from '../components/Candidate';
import { useParams } from 'react-router-dom';
import { getCandidate } from '../services';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../services', () => ({
  getCandidate: jest.fn(),
}));

describe('Candidate Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Candidate Not Found!" message when candidate is null', async () => {
    useParams.mockReturnValue({ candidateId: '456' });
    getCandidate.mockResolvedValue({ candidate: null });

    await act(async () => {
        render(<Candidate />);
    });

    await waitFor(() => {
      expect(screen.getByText('Candidate Not Found!')).toBeInTheDocument();
    });

    expect(screen.queryByText('Update Candidate')).not.toBeInTheDocument();
  });

});
