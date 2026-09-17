import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, MapPin, Phone, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormState {
  name: string;
  email: string;
  phone: string;
  move_in_date: string;
  duration: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    move_in_date: '',
    duration: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('rental_inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        move_in_date: form.move_in_date || null,
        duration: form.duration || null,
        message: form.message || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        move_in_date: '',
        duration: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm';

  return (
    <section id="contact" className="py-24 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
              Get in Touch
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Schedule a Viewing
            </h2>
            <p className="mt-5 text-stone-400 leading-relaxed text-lg">
              Interested in this apartment? Send us your details and we'll get back to you
              within 24 hours to arrange a tour.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">Address</p>
                  <p className="text-white text-sm font-medium">123 Urban Avenue, Downtown District</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-white text-sm font-medium">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-white text-sm font-medium">rent@maison.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Inquiry Sent!</h3>
                <p className="mt-2 text-stone-600 text-sm max-w-sm">
                  Thank you for your interest. We'll contact you within 24 hours to arrange a viewing.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Move-in Date
                    </label>
                    <input
                      type="date"
                      value={form.move_in_date}
                      onChange={(e) => setForm({ ...form, move_in_date: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                      Duration
                    </label>
                    <select
                      value={form.duration}
                      onChange={(e) => setForm({ ...form, duration: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select...</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1+ year">1+ year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about yourself and any questions you have..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-stone-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-stone-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
