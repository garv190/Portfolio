import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'First Runners Up',
      company: 'Stylumia NXT National Hackathon',
      location: 'Online, HackerEarth',
      period: 'Dec 2024 - Jan 2025',
      description: 'Built an AI-powered platform redefining trend discovery with sustainability at its core',
      achievements: [
        'Selected among 1857+ prototype submissions, showcasing innovation and market relevance',
        'Focused on effortless, insightful, and actionable trend analysis with a seamless UI/UX design',
        'Collaborated with a diverse, creative team to deliver a polished and scalable solution'
      ]
    },
    {
      title: 'Fouth in Brain-it-On 2.0 Hacktivists National Level Hackathon ',
      company: 'Padmabhushan Vasantdada Patil Institute of Technology',
      location: 'Sangli,Maharashtra',
      period: '15 Feb-16 Feb, 2024',
      description: 'Developed and maintained multiple client-facing applications.',
      achievements: [
        'Demonstrated strong problem-solving, innovation, and teamwork under high-pressure conditions',
        'Embraced continuous learning and growth throughout the hackathon journey',
        'A milestone that fuels our drive to tackle bigger challenges and sharpen new skills'
      ]
    },
    {
      title: 'Finalist in Trinit Hackathon',
      company: 'NIT Warangal, NIT Trichy,NIT Surathkal',
      location: 'Online, Unstop',
      period: 'April 2024',
      description: 'Creating a platform that converts handwritten question paper to time bound mock tests.',
      achievements: [
        ' Recognized for innovation and technical excellence among top-tier participants',
        'Grateful for the opportunity to compete and collaborate with brilliant minds from across the country',
        
      ]
    },
     {
      title: 'Fifth in Intra-IIIT Hackathon',
      company: 'IIIT Pune',
      location: 'Pune, Maharashtra',
      // location: 'Online, Unstop',
      period: 'Feb 2024',
      description: 'Developed a platform to enhance blood donation drive efficiency by enabling real-time connection between donors and recipients',
      achievements: [
        'Bridged the gap between availability and need using smart matching and instant notifications',
        'Aimed at supporting life-saving efforts through tech-enabled community engagement',
        
      ]
    },


        {
      title: `Semi-Finalist in KakushIn Hackathon`,
      company: 'Nomura',
      location: 'Mumbai, Maharashtra',
      period: 'Jun 2025',
      description: 'Presented a solution for improving the beach cleanup efforts.',
      achievements: [
        ' monitoring the quantity and kinds of waste gathered, regional participation rates, volunteerism, and advancements made towards sustainability objectives.',
        
      ]
    },







         {
      title: 'Participated in Ada Lovlace Hackathon',
      company: 'Citi Bank',
      location: 'Pune, Maharashtra',
      period: 'Sep 2024',
      description: 'Presented a solution for better financial literacy and accessibility',
      achievements: [
        'Focused on simplifying complex financial concepts through intuitive design and digital tools',
        'Aimed to empower individuals with better decision-making and access to essential financial services',
        
      ]
    },

       {
      title: `Participated in Google's GDG`,
      company: 'Google Developer Group',
      location: 'Online, GDG platform',
      period: 'April 2025',
      description: `Presented an innovative navigation solution having a strong emphasis on women's safety`,
      achievements: [
        'Planned real-time safety insights, verified routes, and community-based alerts',
        'Designed for user-friendliness and trust, enhancing urban mobility and confidence for women and first-time city visitors',
        
      ]
    },
    {
      title: `Participated in BuildWithIndia National Hackathon`,
      company: 'BuildWithIndia',
      location: 'Online,Unstop',
      period: 'March 2025',
      description: `Presented an innovative navigation solution tailored for newcomers in unfamiliar cities`,
      achievements: [
        'Focused on helping users locate small local shops and access public transport systems for daily survival',
        'Designed with accessibility and practicality in mind, easing adaptation in new environments',
        'Aimed at empowering urban newcomers through smart, community-driven navigation tools',
        
      ]
    },
    

    {
      title: `Ninth in Final Round of Odyssey Case Challenge`,
      company: 'IIM Calcutta',
      location: 'Online,Unstop',
      period: 'Dec 2023',
      description: `Presented an innovative medical insurance solution specifically designed for gig economy workers`,
      achievements: [
        'Focused on providing affordable, flexible, and accessible coverage to a traditionally underserved workforce',
        'Aimed to bridge the gap between informal employment and essential healthcare protection',
        'Addressed a real-world issue with tech-driven, socially impactful insurance models',
        
      ]
    },
     {
      title: `Best Diplomat in Model United Nations`,
      company: 'IIIT Pune',
      location: 'IIIT Pune',
      period: 'April 2024',
      description: `Participated in a formal debate on the Russia-Ukraine war and its impact on the global economy`,
      achievements: [
        ' Represented a Chinese Diplomat, articulating geopolitical perspectives with strategic reasoning',
        ' Showcased skills in public speaking, global policy analysis, and international relations',
        'Contributed to a nuanced understanding of economic diplomacy and global conflict resolution',
        
      ]
    },

       {
      title: `Participated in EntreMun`,
      company: 'E-Cell, IIT Bombay',
      location: 'IIT Bombay',
      period: 'Feb 2025',
      description: `Participated in a formal debate on the misuse of AI and advanced technologies in the modern world`,
      achievements: [
        'Explored ethical dilemmas, regulatory challenges, and societal impacts of emerging tech',
        ' Demonstrated strong skills in critical thinking, public speaking, and tech policy discourse',
        
        
      ]
    },

     {
      title: `Web Development and Event Management Head, E-Cell IIIT Pune`,
      company: 'E-Cell, IIIT Pune',
      location: 'IIIT Pune',
      period: 'June 2024- Nov 2024',
      description: `Led the web development team and managed events to enhance the entrepreneurial ecosystem at IIIT Pune`,
      achievements: [
        'Developed an Online Treasure Hunt Website – a quiz-based treasure hunt platform that attracted 300+ registrations and enhanced user engagement through gamified learning',
        'Built the official E-Summit’25 Website – integrated event listings, leaderboards, and registration management to streamline summit operations',
        'Organized and executed E-Summit’24 – successfully hosted 6 startup founders, conducted a fest with entertainment elements, and facilitated guest appearances by popular YouTubers, ensuring high attendee engagement and smooth coordination'
        
        
      ]
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;
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
    .fromTo(timelineRef.current?.children,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Achievements & Experience

        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 bg-cyan-400 rounded-full left-2 md:left-1/2 transform md:-translate-x-1/2 ${index % 2 === 0 ? 'md:translate-x-2' : 'md:-translate-x-2'}`}></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-cyan-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center text-cyan-400 mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;