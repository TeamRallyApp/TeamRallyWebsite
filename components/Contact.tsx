import { useState } from 'react';
import { Send, Mail, MessageSquare, User, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
          name: formData.name,
          email: formData.email,
          message: formData.message,
          formType: 'Contact'
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-3xl font-semibold text-gray-800 mb-6">
            Let's Connect.
          </p>
          <p className="text-lg text-gray-600">
            Have a question, feedback, or partnership idea? We're always happy to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="mb-6 relative group">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-500 group-focus-within:text-[#C2274B] transition-colors" />
                Name
              </div>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C2274B] focus:ring-2 focus:ring-pink-100 transition-all outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6 relative group">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gray-500 group-focus-within:text-[#C2274B] transition-colors" />
                Email
              </div>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C2274B] focus:ring-2 focus:ring-pink-100 transition-all outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6 relative group">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-gray-500 group-focus-within:text-[#C2274B] transition-colors" />
                Message
              </div>
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C2274B] focus:ring-2 focus:ring-pink-100 transition-all outline-none resize-none"
              placeholder="Your message..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-green-600">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 animate-in slide-in-from-top-2 duration-300">
              <p className="font-semibold">Something went wrong</p>
              <p className="text-sm text-red-600">Please check your information and try again.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-5 bg-gradient-to-r from-[#C2274B] to-[#DC2626] text-white rounded-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-bold text-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
