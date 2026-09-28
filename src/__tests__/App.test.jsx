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
    expect(screen.getByText(/FinFlow — Society Accounting & Financial Management System/i)).toBeInTheDocument();
    expect(screen.getByText(/StrayCare — Stray Animal Reporting & Live Tracking Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Writing & Thoughts/i)).toBeInTheDocument();
    expect(screen.getByText(/Competitions & Volunteering/i)).toBeInTheDocument();
  });

  it('renders project cards with view more buttons and opens detailed modal on click', () => {
    render(<App />);

    // Click the first project card's "View more" button (StrayCare - Team Project)
    const strayCareButton = screen.getByRole('button', { name: /View more details about StrayCare/i });
    fireEvent.click(strayCareButton);

    // Modal should appear with detailed section for Team Project (StrayCare)
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/My Core Contribution/i)).toBeInTheDocument();
    expect(screen.getByText(/Key Architectural Contributions/i)).toBeInTheDocument();

    // Close button should close the modal
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Click MyBlog "View more" button (Individual Project)
    const myBlogButton = screen.getByRole('button', { name: /View more details about MyBlog/i });
    fireEvent.click(myBlogButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Project Scope & Implementation/i)).toBeInTheDocument();
    expect(screen.getByText(/Key Architectural Features/i)).toBeInTheDocument();

    const closeButton2 = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton2);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders certificate cards with images and opens certificate viewer modal on click', () => {
    render(<App />);

    const certButtons = screen.getAllByRole('button', { name: /view certificate/i });
    expect(certButtons.length).toBeGreaterThan(0);

    // Open first certificate modal
    fireEvent.click(certButtons[0]);

    // Modal dialog should appear
    expect(screen.getByRole('dialog', { name: /AWS Cloud Practitioner Essentials/i })).toBeInTheDocument();
    expect(screen.getByAltText(/AWS Cloud Practitioner Essentials - AWS Training & Certification/i)).toBeInTheDocument();

    // Close button dismisses modal
    const closeCertButton = screen.getByRole('button', { name: /close certificate viewer/i });
    fireEvent.click(closeCertButton);

    expect(screen.queryByRole('dialog', { name: /AWS Cloud Practitioner Essentials/i })).not.toBeInTheDocument();
  });
});

