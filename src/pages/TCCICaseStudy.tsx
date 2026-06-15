import { motion } from 'framer-motion';

interface TCCICaseStudyProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '35.4%', label: 'Increase in Impressions' },
  { value: '29%', label: 'Growth in Reach and Engagement' },
  { value: '43.6%', label: 'Rise in clicks' },
  { value: '20K+', label: 'Website visitors in 2025' },
];


const exploreOthers = [
  { id: 'bank-champaign', title: 'Bank Champaign', category: 'Brand Collaterals', image: '/2nd.png', page: 'bank' },
  { id: 'dcc', title: 'IMA', category: 'Web Design & Development', image: '/Simple Website Mockup.png', page: 'dcc' },
  { id: 'bank', title: 'Bank Champaign', category: 'Brand Collaterals', image: '/2nd.png', page: 'bank' },

];

export default function TCCICaseStudy({ onNavigate }: TCCICaseStudyProps) {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero / Header */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h1 className="text-3xl md:text-5xl font-awaken font-normal text-secondary mb-4">
              TCCI Manufacturing
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 text-sm font-poppins font-light text-secondary/70">
              <span>Brand Collaterals</span>
              <span className="text-secondary/40">·</span>
              <span>Web Design</span>
              <span className="text-secondary/40">·</span>
              <span>Marketing & Event Communications</span>
              <span className="ml-auto text-secondary/70">Manufacturing Industry</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Project Goal */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Project Goal
              </h3>
              <p className="text-sm font-poppins font-light text-secondary/80 leading-relaxed">
                To elevate TCCI Manufacturing's brand communication across digital and print
                touchpoints, ensuring clarity, consistency, and technical credibility for a global audience,
                while reinforcing its leadership in electric compressor technology and commitment to a
                sustainable future.
              </p>
            </div>

            {/* Design Decisions */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Design Decisions
              </h3>
              <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  <span className="font-semibold text-secondary">Brand consistency:</span> Applied TCCI's color palette, typography, and visual language
                  across all assets to create a unified brand experience across events, web, digital
                  marketing, and print.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Structured visual hierarchy:</span> Designed layouts that prioritize technical clarity, ensuring
                  complex information is easily scannable for engineering, executive, and industry
                  audiences.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Professional, engineering-forward aesthetics:</span> Balanced clean layouts with restrained
                  visual accents to reflect precision, reliability, and innovation—key attributes of an
                  advanced manufacturing brand.
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Impact
              </h3>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-[#141820] border border-accent/30 rounded-lg px-4 py-5 text-center">
                      <p className="text-2xl md:text-3xl font-poppins font-bold text-secondary">{stat.value}</p>
                      <p className="text-[11px] font-poppins font-light text-secondary/60 mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-accent rounded-lg py-2.5 text-center">
                  <span className="text-sm font-poppins font-semibold text-primary">Within one quarter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery – exact layout from reference */}
      <section className="pb-4 px-6">
        <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          {/* Row 1: tcci1 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/tcci1.jpg" alt="TCCI website design" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: tcci2 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/TCCI Social.svg" alt="TCCI social" className="w-full h-full object-cover" />
          </div>
          
          <div className=" overflow-hidden">
            <img src="/Carousel.png" alt="TCCI social" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: tcci2 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/flyers.jpg" alt="TCCI social" className="w-full h-full object-cover" />
          </div>

          {/* Row 3: tcci3 + tcci4 – equal half */}
          <div className="grid grid-cols-2 gap-1">
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1c22]">
              <img src="/tcci3.jpg" alt="TCCI social media" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1c22]">
              <img src="/tcci4.jpg" alt="TCCI brochures" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 2: tcci2 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/presentation.jpg" alt="TCCI social" className="w-full h-full object-cover" />
          </div>

          {/* Row 4: tcci5 + tcci6 – equal half */}
          <div className="grid grid-cols-2 gap-1">
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1c22]">
              <img src="/tcci5.jpg" alt="TCCI print materials" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-[#1a1c22]">
              <img src="/tcci6.jpg" alt="TCCI stationery design" className="w-full h-full object-cover" />
            </div>
          </div>

         
        </motion.div>
        </div>
      </section>

      {/* Bottom title repeat */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-awaken font-normal text-secondary mb-2">
            TCCI Manufacturing
          </h2>
          <p className="text-sm font-poppins font-light text-secondary/60">
            Brand Collaterals · Web Design · Marketing & Event Communications
          </p>
        </div>
      </section>

      {/* Explore Others */}
      <section className="py-12 px-6 border-t border-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-lg font-poppins font-semibold text-secondary mb-8">
            Explore Others
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exploreOthers.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 0.98 }}
                className="group cursor-pointer"
                onClick={() => onNavigate(item.page)}
              >
                <div className="work-card rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-baseline mt-3 px-1">
                  <span className="text-sm font-poppins font-semibold text-secondary">{item.title}</span>
                  <span className="text-xs font-poppins font-light text-secondary/60">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
