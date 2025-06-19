import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'GSAP', level: 70 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Langchain', level: 50 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'Postman', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'Microservices', level: 60 },
      ]
    }
  ];

  useEffect(() => {
     if (!sectionRef.current || !skillsRef.current) return;
    const skillBars = skillsRef.current?.querySelectorAll('.skill-bar');
    const skillPercentages = skillsRef.current?.querySelectorAll('.skill-percentage');

    gsap.set(skillBars, { scaleX: 0 });
    gsap.set(skillPercentages, { opacity: 0 });

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
    .fromTo(skillsRef.current?.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )
    .to(skillBars, {
      scaleX: 1,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power2.out',
      transformOrigin: 'left center'
    })
    .to(skillPercentages, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    }, '-=1');
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="skill-percentage text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;