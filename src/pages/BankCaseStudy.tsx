import { motion } from 'framer-motion';

interface BankCaseStudyProps {
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
  { id: 'kcedc', title: 'KCEDC', category: 'Web Design/Illustration', image: '/3rd.jpg', page: 'kcedc' },
  { id: 'dcc', title: 'IMA', category: 'Web Design & Development', image: '/Simple Website Mockup.png', page: 'dcc' },
];

export default function BankCaseStudy({ onNavigate }: BankCaseStudyProps) {
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
              Bank Champaign
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 text-sm font-poppins font-light text-secondary/70">
              <span>Brand Collaterals</span>
              <span className="text-secondary/40">·</span>
              <span>Marketing Communications</span>
              <span className="ml-auto text-secondary/70">Banking Industry</span>
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
                To refresh Bank Champaign's brand identity and digital presence to be clean,
                approachable, modern yet sophisticated — ensuring clarity in communications
                across digital, print and social media while reflecting its deep community roots
                and forward-thinking financial services.
              </p>
            </div>

            {/* Design Decisions */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
              <h3 className="text-accent font-awaken text-2xl md:text-3xl">
                Design Desicions
              </h3>
              <ul className="text-sm font-poppins font-light text-secondary/80 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  <span className="font-semibold text-secondary">Brand methodology approach:</span> Tightly integrating Bank Champaign's
                  identity, typography, and visual language across all assets to create a cohesive
                  presence across digital, print, social media, web, and signage.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Structured visual hierarchy:</span> Designed layouts that balance financial
                  professionalism with approachability, ensuring complex banking information is
                  easily digestible for both retail and business customers.
                </li>
                <li>
                  <span className="font-semibold text-secondary">Professional, community-forward aesthetics:</span> Balanced clean layouts with
                  visual accents to reflect trust, reliability, and innovation — key attributes of a
                  community-driven banking institution.
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

      {/* Image Gallery – bank1 to bank5 */}
      <section className="pb-4 px-6">
        <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          {/* Row 1: bank1 – full width */}
          <div className="overflow-hidden bg-[#1a1c22]">
            <img src="/bank1.png" alt="Bank Champaign social media" className="w-full h-full object-cover" />
          </div>

          {/* Row 3: bank3 – full width */}
          <div className="aspect-[16/9] overflow-hidden bg-[#1a1c22]">
            <img src="/bank3.png" alt="Bank Champaign billboard" className="w-full h-full object-cover" />
          </div>
           <div className=" overflow-hidden bg-[#1a1c22]">
              <img src="/Ads.png" alt="Bank Champaign flyers" className="w-full h-full object-cover" />
            </div>

           {/* Row 2: bank2 – full width */}
          <div className="overflow-hidden bg-[#1a1c22]">
            <img src="/Web BC.png" alt="Bank Champaign website mockups" className="w-full h-full object-cover" />
          </div>

          {/* Row 4: bank4 + bank5 – equal half */}
          <div className="grid grid-cols-2 gap-1">
            <div className=" overflow-hidden bg-[#1a1c22]">
              <img src="/bank4.png" alt="Bank Champaign print materials" className="w-full h-full object-cover" />
            </div>
            <div className=" overflow-hidden bg-[#1a1c22]">
              <img src="/bank5.png" alt="Bank Champaign flyers" className="w-full h-full object-cover" />
            </div>
          </div>

          
        </motion.div>
        </div>
      </section>

      {/* Bottom title */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-awaken font-normal text-secondary mb-2">
            Bank Champaign
          </h2>
          <p className="text-sm font-poppins font-light text-secondary/60">
            Brand Collaterals · Marketing Communications
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
