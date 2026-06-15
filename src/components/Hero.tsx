import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

/* Floating Tag Component */
const FloatingTag = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 5, 0],
        x: [0, 5, -5, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        x: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
      whileHover={{ scale: 1.1 }}
      className={`hidden md:block absolute px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default function Hero({ onNavigate }: HeroProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="hero-grid-bg" aria-hidden />

      {/* Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 120% 90% at 50% 55%,
              rgba(57,227,231,0.22) 0%,
              rgba(40,180,185,0.14) 35%,
              rgba(15,60,62,0.08) 60%,
              rgba(0,0,0,0) 85%
            )
          `,
        }}
      />

      {/* Floating Tags */}
      <FloatingTag
        text="Marketing & Advertising Design"
        delay={0.2}
        className="top-[22%] left-[12%] bg-red-400/20 text-red-300 border-red-400/30"
      />

      <FloatingTag
        text="Website Design/Development"
        delay={0.4}
        className="top-[57%] right-[6%] bg-purple-400/20 text-purple-300 border-purple-400/30"
      />

      <FloatingTag
        text="Brand Visuals Design "
        delay={0.6}
        className="bottom-[38%] left-[8%] bg-orange-400/20 text-orange-300 border-orange-400/30"
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center z-10 relative"
      >
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="text-xl font-poppins font-light">
            Hi, I'm Ayushi Upreti!
          </span>
          {/* <img
            src="https://res.cloudinary.com/drlmynr06/image/upload/v1769420602/waving-hand_1_e6zxbh.png"
            alt="Waving Hand"
            className="w-8 h-8 animate-wave"
          /> */}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-awaken font-normal mb-10 leading-[1.4] tracking-wide"
        >
          Designing Creatives
          <br />
          that Connect Brands
          <br />
          & Drive Results.
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          

          <button
            onClick={() => onNavigate('work')}
            className="btn-hero-primary px-8 py-3.5 bg-accent text-primary text-sm font-poppins font-medium rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_10px_rgba(57,227,231,0.2)]"
          >
            View Work
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#1B3236] border border-white/10 text-accent text-sm font-poppins font-medium rounded-lg transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-[0_0_10px_rgba(57,227,231,0.2)]"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-accent animate-bounce" />
      </motion.div>
    </section>
  );
}