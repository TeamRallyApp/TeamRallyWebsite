import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Waitlist from '../../components/Waitlist';

const mockOnClose = vi.fn();

beforeEach(() => {
  mockOnClose.mockClear();
  vi.restoreAllMocks();
});

describe('Waitlist', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<Waitlist isOpen={false} onClose={mockOnClose} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the form when open', () => {
    render(<Waitlist isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByRole('heading', { name: 'Join the Waitlist' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  });

  it('calls onClose when the X button is clicked', () => {
    render(<Waitlist isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    render(<Waitlist isOpen={true} onClose={mockOnClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('shows error message on failed submission', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false } as Response);

    render(<Waitlist isOpen={true} onClose={mockOnClose} />);

    fireEvent.submit(screen.getByRole('button', { name: /join the waitlist/i }).closest('form')!);

    await waitFor(() => {
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });
  });

  it('shows success state on successful submission', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: true } as Response);

    render(<Waitlist isOpen={true} onClose={mockOnClose} />);

    fireEvent.submit(screen.getByRole('button', { name: /join the waitlist/i }).closest('form')!);

    await waitFor(() => {
      expect(screen.getByText("You're on the list!")).toBeInTheDocument();
    });
  });
});
