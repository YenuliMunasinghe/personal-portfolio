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
    expect(screen.getByText(/FinFlow — Society Financial Management Prototype/i)).toBeInTheDocument();
    expect(screen.getByText(/StrayCare — Stray Animal Reporting & Live Tracking Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Writing & Thoughts/i)).toBeInTheDocument();
    expect(screen.getByText(/Competitions & Volunteering/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Gallery/i })).toBeInTheDocument();
  });

  it('renders the rotating gallery widget and supports manual navigation', () => {
    render(<App />);

    expect(screen.getByText("FINC '25 Delegates Committee")).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Next gallery image/i }));
    expect(screen.getByText('Road to Legacy 2.0 Organizing Committee')).toBeInTheDocument();
  });

  it('shows FinFlow enhancement and AI implementation statuses', () => {
    render(<App />);

    expect(screen.getByText('Ongoing Enhancement')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /View more details about FinFlow/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText('Ongoing Enhancement').length).toBeGreaterThan(0);
    expect(screen.getByText('AI-Powered Financial Insight Generator')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('links the FinFlow and MyBlog project cards to their live demos', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /Live demo for FinFlow/i })).toHaveAttribute(
      'href',
      'https://fin-flow-coral-seven.vercel.app'
    );
    expect(screen.getByRole('link', { name: /Live demo for MyBlog/i })).toHaveAttribute(
      'href',
      'https://myblog-forwho.lovestoblog.com/'
    );
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

