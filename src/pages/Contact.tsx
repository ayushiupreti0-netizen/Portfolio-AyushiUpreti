import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <section className="py-24 mt-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 tracking-wide">
            Contact Me
          </h2>
          <p className="text-lg font-poppins font-light text-secondary/80">
            Let's get in touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-lg font-poppins font-light leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-morphism rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-poppins font-light text-secondary/80">Phone No.</p>
                  <a
                    href="tel:+919568923003"
                    className="text-lg font-poppins hover:text-accent transition-colors"
                  >
                    +91 9568923003
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 glass-morphism rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-poppins font-light text-secondary/80">Email ID</p>
                  <a
                    href="mailto:ayushiupreti0@gmail.com"
                    className="text-lg font-poppins hover:text-accent transition-colors"
                  >
                    ayushiupreti0@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-poppins font-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-secondary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-poppins font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-secondary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-poppins font-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-accent text-primary text-sm font-poppins font-medium rounded hover:glow-teal transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-center font-poppins"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
