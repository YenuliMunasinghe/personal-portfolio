import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
  });
});
