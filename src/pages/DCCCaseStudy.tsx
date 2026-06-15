import { motion } from 'framer-motion';

interface DCCCaseStudyProps {
  onNavigate: (page: string) => void;
}


const exploreOthers = [
  { id: 'tcci', title: 'TCCI', category: 'Web Design/Brand Collaterals', image: '/main Image TCCI.jpg', page: 'tcci' },
  { id: 'bank', title: 'Bank Champaign', category: 'Brand Collaterals', image: '/2nd.png', page: 'bank' },
  { id: 'kcedc', title: 'KCEDC', category: 'Web Design/Illustration', image: '/3rd.jpg', page: 'kcedc' },

];

export default function DCCCaseStudy({ onNavigate }: DCCCaseStudyProps) {
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
              IMA Foundation
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 text-sm font-poppins font-light text-secondary/70">
              <span>Web Design & Development</span>
               <span className="ml-auto text-secondary/70">Economic Development</span>
             
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
                To establish the IMA Foundation as Illinois’ trusted source of independent economic intelligence, translating institutional credibility into stronger engagement, research visibility, and long-term investment support. The website was designed to communicate the Foundation’s mission, authority, and impact clearly within the first 60 seconds of a user visit.
              </p>
            </div>

            {/* Design Decisions */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Design Desicions
              </h3>
              <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  <span className="font-semibold text-secondary">Clear visual hierarchy:</span> Structured layouts to guide users through key information quickly, ensuring important content and calls-to-action are immediately visible.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Streamlined navigation system:</span> Simplified navigation to help diverse stakeholder groups easily explore research, engagement opportunities, and organizational information.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Responsive and accessible experience:</span> Optimized layouts for clarity and usability across devices while maintaining a seamless browsing experience.
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Impact
              </h3>
              <div>
                <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  Website currently in pre-launch phase

                </li>
                <li>
                  Expected to strengthen the Foundation’s digital credibility and institutional presence
                </li> 
              </ul>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery – dcc1 & dcc2 */}
      <section className="pb-4 px-6">
        <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          {/* Row 1: dcc1 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/Web Screen PSD Mockup.jpg" alt="DCC Marketing website design" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: dcc2 – full width */}
          <div className=" overflow-hidden bg-[#1a1c22]">
            <img src="/About.png" alt="DCC Marketing social media" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: dcc2 – full width */}
          <div className=" overflow-hidden bg-[#1a1c22]">
            <img src="/Shot-2.png" alt="DCC Marketing social media" className="w-full h-full object-cover" />
          </div>

        
        </motion.div>
        </div>
      </section>

      {/* Bottom title */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-awaken font-normal text-secondary mb-2">
            Illinois Manufacturing Association Foundation
          </h2>
          <p className="text-sm font-poppins font-light text-secondary/60">
            Website Design and Development
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
