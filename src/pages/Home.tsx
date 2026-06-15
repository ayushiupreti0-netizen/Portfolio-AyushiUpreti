import { useState } from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const featuredWork = [
  {
    id: 1,
    title: 'TCCI',
    category: 'Web Design/Brand Collaterals',
    image: '/main Image TCCI.jpg',
    tab: 'work',
    page: 'tcci',
  },
 
   {
    id: 2,
    title: 'Illinois Manufacturing Association',
    category: 'Web Design & Development',
    image: '/Simple Website Mockup.png',
    tab: 'work',
    page: 'dcc',
  },


   {
    id: 3,
    title: 'Bank Champaign',
    category: 'Brand Collaterals',
    image: '/2nd.png',
    tab: 'work',
    page: 'bank',
  },

 {
    id: 4,
    title: 'Kane County EDC',
    category: 'Landing Page Design/Illustration',
    image: '/3rd.jpg',
    tab: 'work',
    page: 'kcedc',
  },

  {
    id: 5,
    title: 'Brew & Chew',
    category: 'Brand Identity Design',
    image: 'Brew&Chew.jpg',
    tab: 'projects',
    link: 'https://www.behance.net/gallery/228508019/Brew-Chew-Coffee-Cookie-Branding',
  },
  {
    id: 6,
    title: 'Savvy - Finance App',
    category: 'UI/UX Case Study',
    image: 'Savvy.png',
    tab: 'projects',
    link: 'https://www.behance.net/gallery/221704367/SAVVY-UIUX-Case-Study',
  },
  {
    id: 7,
    title: 'Savvy Brand Guide',
    category: 'Brand Guidelines',
    image: 'Savvy Guide.png',
    tab: 'projects',
    link: 'https://behance.net',
  },
  

];

export default function Home({ onNavigate }: HomeProps) {
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work');

   const filteredItems = featuredWork.filter((item) => item.tab === activeTab);

  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm font-poppins font-light text-secondary/80 uppercase tracking-widest mb-4">
              Work
            </p>
            <h2 className="text-4xl md:text-5xl font-awaken font-normal tracking-wide text-secondary mb-10">
              Design Across Disciplines
            </h2>
            <div className="flex justify-center gap-1">
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-2 text-sm font-poppins font-medium tracking-widest transition-all duration-300 ${
                  activeTab === 'work'
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-secondary/80 hover:text-accent'
                }`}
              >
                WORK
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 text-sm font-poppins font-medium tracking-widest transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-secondary/80 hover:text-accent'
                }`}
              >
                Projects
              </button>
            </div>
          </motion.div>
          
           <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                if (item.page && onNavigate) onNavigate(item.page);
                else if (item.link) window.open(item.link, '_blank');
              }}
            >
              <div className="work-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-[#F5F4F0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      item.title === 'TCCI' ? 'object-contain scale-110' : 'object-cover'
                    }`}
                  />
                </div>
              </div>
              <div className="flex justify-between items-baseline mt-4 px-1">
                <span className="text-lg font-poppins font-semibold text-secondary">
                  {item.title}
                </span>
                <span className="text-sm font-poppins font-light text-secondary/80 text-right max-w-[55%]">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center" 
          >
            <button
              onClick={() => onNavigate('work')}
              className="mt-12 px-8 py-3 border-2 border-accent text-accent text-sm font-poppins font-medium rounded hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              View All Work
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
