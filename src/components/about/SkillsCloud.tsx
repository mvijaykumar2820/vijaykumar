'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '@/components/animations/magnetic';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'web3' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'GSAP', category: 'frontend' },
  { name: 'React Native', category: 'design' }, // Using 'design' color for Mobile/UI
  { name: 'Firebase', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST', category: 'backend' },
  { name: 'Python', category: 'other' },
  { name: 'Machine Learning', category: 'other' },
  { name: 'Ethical Hacking', category: 'other' },
  { name: 'Trading', category: 'other' }
];

const categoryColors: Record<string, string> = {
  frontend:
    'bg-blue-600/15 text-blue-800 border-blue-600/30 hover:bg-blue-600/25',
  backend:
    'bg-green-600/15 text-green-800 border-green-600/30 hover:bg-green-600/25',
  web3: 'bg-purple-600/15 text-purple-800 border-purple-600/30 hover:bg-purple-600/25',
  design:
    'bg-pink-600/15 text-pink-800 border-pink-600/30 hover:bg-pink-600/25',
  other:
    'bg-amber-600/15 text-amber-800 border-amber-600/30 hover:bg-amber-600/25'
};

export default function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const skillElements = skillsRef.current;

    if (!container || !skillElements.length) return;

    // Staggered reveal animation
    gsap.fromTo(
      skillElements,
      {
        opacity: 0,
        scale: 0.5,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
        stagger: {
          each: 0.05,
          from: 'random'
        },
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, i) => (
        <Magnetic key={skill.name}>
          <div
            ref={(el) => {
              if (el) skillsRef.current[i] = el;
            }}
            className={`cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 md:px-6 md:py-3 md:text-base ${categoryColors[skill.category]
              }`}
          >
            {skill.name}
          </div>
        </Magnetic>
      ))}
    </div>
  );
}
