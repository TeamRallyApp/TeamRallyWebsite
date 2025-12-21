import { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight, User, X, CheckCircle2 } from 'lucide-react';

interface WaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Waitlist({ isOpen, onClose }: WaitlistProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    state: '',
    age: '',
    hobbiesSports: '',
    betaTester: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && submitStatus !== 'success') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdkqvwnd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          state: formData.state,
          age: formData.age,
          hobbiesSports: formData.hobbiesSports,
          betaTester: formData.betaTester ? 'Yes' : 'No',
          formType: 'Waitlist'
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setSubmitStatus('success');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        state: '',
        age: '',
        hobbiesSports: '',
        betaTester: false
      });

      setTimeout(() => {
        onClose();
        setTimeout(() => setSubmitStatus('idle'), 300);
      }, 2500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && submitStatus !== 'success') {
      onClose();
    }
  };

  if (!isOpen) return null;

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" />
        <div className="relative bg-white rounded-3xl p-12 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#C2274B] to-[#DC2626] rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">You're on the list!</h3>
            <p className="text-lg text-gray-600 mb-2">
              Thanks for joining the waitlist, {formData.firstName || 'friend'}!
            </p>
            <p className="text-gray-500">
              We'll notify you as soon as TeamRally launches in your area.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />

      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-[#C2274B] via-[#DC2626] to-red-600 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-white/90">
            Be the first to know when TeamRally launches in your area. Get early access and exclusive updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#C2274B]" size={20} />
              <input
                ref={firstInputRef}
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#C2274B]" size={20} />
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Last Name"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="mb-4 relative group">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#C2274B]" size={20} />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              placeholder="State of Residence"
              className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 placeholder:text-gray-400"
            />

            <input
              type="number"
              required
              min="1"
              max="120"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="Age"
              className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="mb-6">
            <textarea
              required
              value={formData.hobbiesSports}
              onChange={(e) => setFormData({ ...formData, hobbiesSports: e.target.value })}
              placeholder="What hobbies and sports are you most passionate about? No interest is too small—list them all so we can help you connect with the right players and games!"
              rows={4}
              className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white/50 transition-all outline-none text-gray-900 resize-none placeholder:text-gray-400"
            />
          </div>

          <div className="mb-8">
            <p className="text-white font-semibold mb-4 text-lg">Would you like to beta test TeamRally?</p>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="betaTester"
                  checked={formData.betaTester === true}
                  onChange={() => setFormData({ ...formData, betaTester: true })}
                  className="peer sr-only"
                />
                <div className="px-6 py-3 bg-white/10 border-2 border-white/30 rounded-xl text-center text-white font-medium transition-all peer-checked:bg-white peer-checked:text-[#C2274B] peer-checked:border-white hover:bg-white/20">
                  Yes, I'm interested!
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="betaTester"
                  checked={formData.betaTester === false}
                  onChange={() => setFormData({ ...formData, betaTester: false })}
                  className="peer sr-only"
                />
                <div className="px-6 py-3 bg-white/10 border-2 border-white/30 rounded-xl text-center text-white font-medium transition-all peer-checked:bg-white peer-checked:text-[#C2274B] peer-checked:border-white hover:bg-white/20">
                  No, thanks
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-5 bg-white text-[#C2274B] rounded-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-bold text-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#C2274B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </>
            ) : (
              <>
                Join the Waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </>
            )}
          </button>

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-500/30 backdrop-blur-sm border-2 border-red-200/50 rounded-xl text-white animate-in slide-in-from-top-2 duration-300">
              <p className="font-semibold">Something went wrong</p>
              <p className="text-sm text-white/90 mt-1">Please check your information and try again.</p>
            </div>
          )}
        </form>

        <p className="text-sm text-white/80 mt-6 text-center">
          No spam, ever. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
