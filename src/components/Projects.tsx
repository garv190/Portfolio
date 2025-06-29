import  { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: `E-Summit'24`,
      description: 'A full-stack website designed for Entrepreneurship event with modern design and seamless user experience.',
      fullDescription: `Engineered a high-performance event platform managing 1,000+ user registrations. Designed an efficient data model handling 1000+ data entries reducing query execution time by 40%.
      Implemented lazy loading and server-side rendering (SSR) reducing initial page load time from 2.5s to
 1.5s.`,
      image: 'esummit.png',
      technologies: ['NextJs', 'MongoDB', 'Google Authentication', 'Aceternity UI'],
      github: 'https://github.com/garv190/IIIT-s-E-Summit-24',
      live: 'https://esummit24.iiitp.ac.in/'
    },
    {
      title: 'TravFin',
      description: `A complete MERN Stack travel app that addresses all issues related to travel and travel-related finances.`
      ,
      fullDescription: ` Engineered an expense management system for travel groups, enabling users to track over 100+ shared
 transactions.
 Integrated an AI-powered chatbot providing travel suggestions and cost estimates for 50+ destinations.
 Designed scalable group chat and trip coordination features, with future plans for Payment Gateway integra
tion.`,
      image: 'travfin.png',
      technologies: [' Docker', 'ExpressJs', ' MongoDb', 'Langchain', 'Material-UI'],
      github: 'https://github.com/garv190/Travfin',
      live: 'https://travfin-carefree-travel.netlify.app/'
    },
    {
      title: 'Online Treasure Hunt',
      description: 'A realtime treasure hunt game type quiz application with a real time leaderboard.',
      fullDescription: `Redesigned PostgreSQL queries, improving query efficiency by 30% and handling 500+ API calls/sec,
 ensuring 99.9% uptime during the event.
 Constructed a scalable backend, optimizing server performance to support 350+ concurrent users, ensuring
 seamless real-time event tracking.
 Engineered API rate-limiting mechanisms, preventing DDoS vulnerabilities and enhancing system security.`,
      image: 'oth.png',
      technologies: ['React', ' PostgreSQL', ' Express.js', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/garv190/oth_final',
      live: 'https://github.com/garv190/oth_final'
      
    },
    {
      title: 'Revolutionizing Trend Discovery ',
      description: 'This was the project designed for Hackathon conducted by fashion brand Stylumia.',
      fullDescription: `Engineered a data-driven dashboard leveraging AI models to predict future sales trends with 85% enabling
 brands to optimize marketing strategies.
 Designed a user-friendly interface with 100+ real-time filters, improving data accessibility and trend visualiza
tion by 40% efficiency.`,
      image: 'trends.png',
      technologies: [' Figma', 'TailwindCss', 'React'],
      github: 'https://www.figma.com/design/7rOQGDJPdGLE9WE5bDAnp6/Untitled?node-id=0-1&p=f',
      live: 'https://www.figma.com/proto/7rOQGDJPdGLE9WE5bDAnp6/Untitled?page-id=0%3A1&node-id=24-859&viewport=-2900%2C-504%2C0.27&t=5qSX1XDFii6eCmzl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A859&show-proto-sidebar=1'
     
    },

    
     {
      title: 'Cryptocurrency Trading Simulator',
      description: 'Analytics dashboard for real time cryptocurrency trading simulation with live data updates.',
      fullDescription: `Designed and deployed a real-time system to compute transaction costs across 5,000+ daily market events
 with 97% precision.
 Analyzed market impact trends to support strategic trading decisions, reducing slippage by 22%.`,
      image: 'tradesimulator.png',
      technologies: ['GSAP', 'TailwindCss', 'Flask', 'WebSockets', 'Chart.js'],
      github: 'https://github.com/garv190/GoQuant',
      live: 'https://github.com/garv190/GoQuant'
     
    },

    {
      title: 'Bhav Tol',
      description: 'A modern marketplace application designed specifically for hostel communities.',
      fullDescription: `students can buy and sell everyday essentials like Maggi noodles, chips, toothpaste, and other small items. Built with React frontend and Java Spring Boot backend with real-time chat functionality.`,
      image: 'naptol.png',
      technologies: ['React', 'TailwindCss', 'Springboot', 'WebSockets', 'Supabase'],
      github: 'https://github.com/garv190/Hostel-Bazzar',
      live: 'https://github.com/garv190/Hostel-Bazzar'
     
    }


  ];

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(sectionRef.current?.querySelector('h2'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(projectsRef.current?.children,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 rounded-full text-white hover:text-cyan-400 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {projects[selectedProject].fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={projects[selectedProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;