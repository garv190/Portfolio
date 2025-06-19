import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Award,Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if (!contentRef.current || !statsRef.current || !sectionRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo([...contentRef.current.children],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
    )
    .fromTo([...statsRef.current.children],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=0.5'
    );
  }, []);

  const stats = [
    { icon: User, value: '3rd', label: 'Undergraduate Year' },
    { icon: Award, value: '5+', label: 'Projects Completed' },
    { icon: Award, value: '10+', label: 'Hackathons Participation' },
    { icon: Heart, value: '∞', label: 'Passion for Code' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
              I'm Garv Jauhari, an Electronics and Communication Engineering undergraduate at IIIT Pune with a strong inclination toward full-stack web development and scalable software systems.
              With hands-on experience in technologies like React, Node.js, Express, Docker, Flask, and Next.js.
              I have led and built high-performance applications that handle real-time data and high traffic with efficiency.
              </p>
              <p>
              From organizing major tech events as the Web Development and Event Management Head at E-Cell IIIT Pune to engineering AI-powered and performance-optimized projects,
              I blend technical acumen with leadership and collaboration. Notable achievements include placing 2nd in the Stylumia NXT National Hackathon (among 2000+ teams) and building platforms that sustain 350+ concurrent users and 500+ API calls/sec.
              </p>
              <p>
               With a foundation in Data Structures, Algorithms, and System Design, I have solved over 300+ DSA problems on platforms like LeetCode and GFG. I thrive in agile environments and am always eager to tackle real-world challenges with creative and scalable solutions. My passion lies at the intersection of technology, innovation, and impact—especially in the realms of AI integration, system optimization, and user-centric web applications.


              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl">
              <img
                src="./assets/profile.png"
                alt="Profile"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div ref={statsRef} className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;