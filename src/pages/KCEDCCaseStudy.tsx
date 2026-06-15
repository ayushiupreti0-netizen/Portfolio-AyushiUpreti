import { motion } from 'framer-motion';

interface KCEDCCaseStudyProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '35.4%', label: 'Increase in Impressions' },
  { value: '29%', label: 'Growth in Reach and Engagement' },
  { value: '43.6%', label: 'Rise in clicks' },
  { value: '20K+', label: 'Website visitors in 2025' },
];

const exploreOthers = [
  { id: 'tcci', title: 'TCCI', category: 'Web Design/Brand Collaterals', image: '/main Image TCCI.jpg', page: 'tcci' },
  { id: 'dcc', title: 'IMA', category: 'Web Design & Development', image: '/Simple Website Mockup.png', page: 'dcc' },
  { id: 'bank', title: 'Bank Champaign', category: 'Brand Collaterals', image: '/2nd.png', page: 'bank' },

];

export default function KCEDCCaseStudy({ onNavigate }: KCEDCCaseStudyProps) {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h1 className="text-3xl md:text-5xl font-awaken font-normal text-secondary mb-4">
              Kane County Economic Development Corporation
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 text-sm font-poppins font-light text-secondary/70">
              <span>Landing Page Design</span>
              <span className="text-secondary/40">·</span>
              <span>Social Media Design</span>
              <span className="text-secondary/40">·</span>
              <span>Map Illustration</span>
              <span className="ml-auto text-secondary/70">Economic Development Corporation</span>
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
                Design a cohesive digital experience for Kane County Economic Development Corporation that attracts investors, businesses, and site selectors. The project aimed to showcase the county's economic strengths through a modern website, engaging social media content, and custom map illustrations that highlight key transportation networks, infrastructure, and regional connectivity.
              </p>
            </div>

            {/* Design Decisions */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Design Decisions
              </h3>
              <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  Designed and developed a user-focused website with clear information architecture, intuitive navigation, and strong visual hierarchy to improve content accessibility.
                </li>
                <li>
                  Designed custom map illustrations to visually communicate Kane County's strategic location, transportation access, airports, rail connections, and proximity to Chicago.
                </li>
                <li>
                  Developed social media creatives that balanced informative content with engaging visuals, helping communicate economic insights, local highlights, and business opportunities in a digestible format.
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Impact
              </h3>
              <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  Delivered a unified digital ecosystem spanning web, social media, and visual storytelling assets.
                </li>
                <li>
                  Improved the communication of complex economic and geographic information through easy-to-understand custom illustrations.
                </li>
                <li>
                  Enhanced Kane County EDC's ability to promote investment opportunities and regional advantages across multiple digital touchpoints.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery – kane1 & kane2 */}
      <section className="pb-4 px-6">
        <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          {/* Row 1: kane1 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/kane1.jpg" alt="KCEDC website design" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: kane2 – full width */}
          <div className="overflow-hidden ">
            <img src="/KCEDC.png" alt="Kane County map illustration" className="w-full h-full object-cover" />
          </div>

          <div className="overflow-hidden ">
            <img src="/Maps.png" alt="Kane County map illustration" className="w-full h-full object-cover" />
          </div>

          <div className=" aspect-[16/9] overflow-hidden ">
            <img src="/Socials.png" alt="Kane County map illustration" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        </div>
      </section>

      {/* Bottom title */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-awaken font-normal text-secondary mb-2">
            KCEDC
          </h2>
          <p className="text-sm font-poppins font-light text-secondary/60">
            Web Design · Illustration
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
