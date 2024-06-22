import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Candidates from '../components/Candidates';
import * as candidateService from '../services';

jest.mock('../services', () => ({
    getCandidates: jest.fn(),
    deleteCandidate: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Candidates Component', () => {
  beforeEach(() => {
    candidateService.getCandidates.mockClear();
    candidateService.deleteCandidate.mockClear();
  });

  it('renders no candidates onload', async () => {
    candidateService.getCandidates.mockResolvedValueOnce({ candidates: [] });
    await act(async () => {
        render(<Candidates />);
    });
    const noCandidate = screen.getByText('No Candidates Found!');
    expect(noCandidate).toBeInTheDocument();

    await waitFor(() => {
      expect(candidateService.getCandidates).toHaveBeenCalledTimes(1);
    });
  });
});
