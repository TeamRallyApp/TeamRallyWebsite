import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Hero from '../../components/Hero';

const mockOnOpenWaitlist = vi.fn();

beforeEach(() => {
  mockOnOpenWaitlist.mockClear();
});

describe('Hero', () => {
  it('renders headline text', () => {
    render(<Hero onOpenWaitlist={mockOnOpenWaitlist} />);
    expect(screen.getByText('Play More. Meet People.')).toBeInTheDocument();
    expect(screen.getByText('Build Community.')).toBeInTheDocument();
  });

  it('renders hero image with correct alt text', () => {
    render(<Hero onOpenWaitlist={mockOnOpenWaitlist} />);
    expect(screen.getByAltText('TeamRally App Preview')).toBeInTheDocument();
  });

  it('calls onOpenWaitlist when Join the Waitlist button is clicked', () => {
    render(<Hero onOpenWaitlist={mockOnOpenWaitlist} />);
    fireEvent.click(screen.getByRole('button', { name: /join the waitlist/i }));
    expect(mockOnOpenWaitlist).toHaveBeenCalledTimes(1);
  });

  it('hero image uses local path, not external CDN', () => {
    render(<Hero onOpenWaitlist={mockOnOpenWaitlist} />);
    const img = screen.getByAltText('TeamRally App Preview') as HTMLImageElement;
    expect(img.src).not.toContain('postimg.cc');
    expect(img.src).toContain('/images/hero');
  });
});
