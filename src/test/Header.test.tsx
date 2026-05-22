import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from '../../components/Header';

const mockOnOpenWaitlist = vi.fn();

beforeEach(() => {
  mockOnOpenWaitlist.mockClear();
});

describe('Header', () => {
  it('renders logo and brand name', () => {
    render(<Header onOpenWaitlist={mockOnOpenWaitlist} />);
    expect(screen.getByAltText('TeamRally Logo')).toBeInTheDocument();
    expect(screen.getByText('TeamRally')).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Header onOpenWaitlist={mockOnOpenWaitlist} />);
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Features' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
  });

  it('calls onOpenWaitlist when Join the Waitlist is clicked', () => {
    render(<Header onOpenWaitlist={mockOnOpenWaitlist} />);
    const buttons = screen.getAllByText('Join the Waitlist');
    fireEvent.click(buttons[0]);
    expect(mockOnOpenWaitlist).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header onOpenWaitlist={mockOnOpenWaitlist} />);
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes mobile menu when Escape is pressed', () => {
    render(<Header onOpenWaitlist={mockOnOpenWaitlist} />);
    const hamburger = screen.getByRole('button', { name: 'Toggle navigation menu' });
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });
});
