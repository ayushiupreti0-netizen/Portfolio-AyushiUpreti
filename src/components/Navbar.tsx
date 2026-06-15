import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return createPortal(
    <div className="fixed top-4 left-0 right-0 z-[9999] px-4 md:px-6">
      <nav className="mx-auto max-w-3xl nav-glass rounded-2xl shadow-lg">
        <div className="px-5 py-2.5 md:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-charm font-bold text-accent hover:glow-teal transition-all duration-300"
          >
            AU
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-poppins font-light tracking-wider transition-colors duration-300 ${
                  currentPage === link.id
                    ? 'text-accent'
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="/Ayushi_Upreti_RESUME.pdf"
              download="Ayushi_Upreti_RESUME.pdf"
              className="px-6 py-2  text-accent text-sm font-poppins font-medium rounded hover:bg-accent hover:text-primary transition-all duration-300 hover:glow-teal inline-block"
            >
              CV
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 text-sm font-poppins font-light tracking-wider transition-colors duration-300 ${
                  currentPage === link.id
                    ? 'text-accent'
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="/Ayushi_Upreti_RESUME.pdf"
              download="Ayushi_Upreti_RESUME.pdf"
              className="mt-2 block w-full text-center px-6 py-2 border-2 border-accent text-accent text-sm font-poppins font-medium rounded hover:bg-accent hover:text-primary transition-all duration-300"
            >
              CV
            </a>
          </motion.div>
        )}
        </div>
      </nav>
    </div>,
    document.body
  );
}
