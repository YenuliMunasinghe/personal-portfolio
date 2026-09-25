import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import React from 'react';

describe('App Component', () => {
  it('renders portfolio header and author name correctly', () => {
    render(<App />);
    const headingElements = screen.getAllByText(/Yenuli/i);
    expect(headingElements.length).toBeGreaterThan(0);
  });

  it('renders key section headings and project details', () => {
    render(<App />);
    expect(screen.getByText(/A detailed look at my systems projects and contributions/i)).toBeInTheDocument();
    expect(screen.getByText(/StrayCare — Stray Animal Reporting & Live Tracking Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Writing & Thoughts/i)).toBeInTheDocument();
    expect(screen.getByText(/Competitions & Volunteering/i)).toBeInTheDocument();
  });

  it('renders project cards with view more buttons and opens detailed modal on click', () => {
    render(<App />);

    const viewMoreButtons = screen.getAllByRole('button', { name: /view more/i });
    expect(viewMoreButtons.length).toBeGreaterThan(0);

    // Click the first project card's "View more" button
    fireEvent.click(viewMoreButtons[0]);

    // Modal should appear with detailed section
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Key Architectural Contributions/i)).toBeInTheDocument();

    // Close button should close the modal
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
