import { motion } from 'framer-motion';

const tools = [
  { name: 'Photoshop', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420183/blue-black-square-with-blue-white-p-it_qdj32h.png' },
  { name: 'Illustrator', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420185/islamabad-pakistan-oct-2023-adobe-applications-illustrator-vector-logos_subcsz.png' },
  { name: 'InDesign', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420183/adobe-indesign-software-icon_pvoffa.png' },
  { name: 'Figma', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420189/set-figma-logos-various-design-options-icon-set-white-background_nsxcfj.png' },
  { name: 'Canva', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420181/dfb96cc174513093cd6ed61489ccb750_amz4tg.svg' },
  { name: 'WordPress', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420190/w-logo-circle-logo-icon-sign-vector-design_1_qdojld.png' },
  { name: 'HTML', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420182/5968267_iqgp9q.png' },
  { name: 'CSS', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420180/5968242_qur27a.png' },
  { name: 'JavaScript', icon: 'https://res.cloudinary.com/drlmynr06/image/upload/v1769420186/javascript-logo-javascript-icon-transparent-free-png_insu6s.webp' },
];

const skills = [
  {
    title: 'Marketing & Advertising Design',
    items: [
      'Social media creatives & content creation',
      'Paid ad visuals (Meta, Google, LinkedIn)',
      'Campaign graphics',
      'Digital banners & promotions',
    ],
  },
  {
    title: 'Website Design & Development',
    items: [
      'Website design & development',
      'Landing pages',
      'UI design for web & apps',
    ],
  },
  {
    title: 'Brand Visual Design',
    items: [
      'Print brand collateral design',
      'Brand refresh & visual updates',
    ],
  },
];

export default function About() {
  return (
    <section className="pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Hero: Image left + Text right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-14 items-start mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://res.cloudinary.com/drlmynr06/image/upload/v1769420186/IMG_3655_vfqyb3.jpg"
              alt="Ayushi Upreti"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h2 className="text-2xl md:text-3xl font-awaken font-normal text-accent">
              Hi! I'm Ayushi Upreti, Digital Media Designer
            </h2>

            <p className="text-sm font-poppins font-light leading-relaxed text-secondary/85">
              A creatively driven designer with a background in computer science, I work across marketing and
              advertising design, brand visuals, and web design & development – blending creative ideas with strategic thinking to build
              digital experiences that genuinely work for people and brands.
            </p>
            <p className="text-sm font-poppins font-light leading-relaxed text-secondary/85">
              With 2.5 years of experience, I'm currently working as a Digital Media Designer at DCC Marketing. I've collaborated across
              industries including Manufacturing, Health & Wellness, Banking, Higher Education and Economic Development and Agriculture.
              <br/>
              I'm naturally curious, always
              asking myself, <em className="text-secondary">"How can I solve this better?"</em>
            </p>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.linkedin.com/in/ayushi-upreti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-accent transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.behance.net/ayushiupreti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-accent transition-colors duration-300 text-xl font-bold tracking-tight"
              >
                Bē
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Tool Strip – marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10" />
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1200] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 18,
                    ease: 'linear',
                  },
                }}
                className="flex gap-14 items-center"
              >
                {[...tools, ...tools, ...tools].map((tool, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* My Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-awaken font-normal text-accent text-center mb-10">
            My Expertise
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#141820] rounded-xl p-6 border border-secondary/10"
              >
                <h4 className="text-lg font-poppins font-semibold text-secondary mb-4">{skill.title}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-sm font-poppins font-light text-secondary/75 flex items-start">
                      <span className="text-secondary/50 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
