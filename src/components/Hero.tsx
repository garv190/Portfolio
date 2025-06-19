import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !heroRef.current) return;
    const tl = gsap.timeline({ delay: 1 });

    // Animate title with typing effect
    tl.fromTo(titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .to(titleRef.current, {
      text: "Hi, I'm Garv Jauhari",
      duration: 2,
      ease: "none"
    })
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(ctaRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );

    // Floating animation for the entire hero section
    gsap.to(heroRef.current, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const socialLinks = [
    { href: 'https://github.com/garv190', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/garv-jauhari-6726162b4/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:www.garv.jauhari@gmail.com', icon: Mail, label: 'Email' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: aboutSection, offsetY: 80 },
        ease: 'power2.inOut'
      });
    }
  };

   const downloadResume = () => {
    // Create a link to the resume file
    const link = document.createElement('a');
    link.href = './assets/Garv_Jauhari_Resume.pdf'; // Make sure this matches your resume file name
    link.download = 'Garv_Jauhari_Resume.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: projectsSection, offsetY: 80 },
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={heroRef} className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          {/* Text will be animated by GSAP */}
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer & UI/UX Designer crafting digital experiences with passion and precision
        </p>

        <div ref={ctaRef} className="space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={scrollToProjects} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button onClick={downloadResume} className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Icon className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;