'use client';

import React from 'react';
import Layout from '@/components/layout';
import AnimatedSection from '@/components/about/AnimatedSection';
import TextReveal from '@/components/about/TextReveal';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import SkillsCloud from '@/components/about/SkillsCloud';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

export default function About() {

  return (
    <div className="relative overflow-hidden">
      <Layout title="About Me" center>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="grid gap-8 py-12 md:gap-12 lg:grid-cols-5 lg:gap-16">
            <AnimatedSection
              animation="fade-right"
              className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-neutral-200 flex items-center justify-center">
                {/* Placeholder for Profile Image */}
                <span className="text-muted-foreground">Profile Image</span>
              </div>
            </AnimatedSection>

            <div className="space-y-8 lg:col-span-3">
              <AnimatedSection animation="fade-up">
                <TextReveal
                  text="Full Stack Web Developer with a strong focus on frontend and motion design. I build modern, responsive, and animation-heavy web applications."
                  className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                  as="p"
                  highlightWords={['frontend', 'motion', 'modern']}
                  scrub={false}
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    My Focus
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Creating clean, Apple-style UI experiences with smooth scroll-based animations and letter-level text effects.
                    I aim to impress with strong first impressions and performance-first animations.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Interests
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Apart from Full-Stack Web Development, I am exploring Machine Learning, Ethical Hacking, and Trading.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                  Education
                </h2>
                <p className="mb-6 text-foreground/70">
                  <span className="font-semibold text-foreground">
                    MVSR Engineering College
                  </span>
                  <br />
                  Degree: Engineering (2024 – 2028)
                </p>
              </div>
            </AnimatedSection>
          </section>

          {/* Journey Section */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  My Journey
                </h2>
              </div>
            </AnimatedSection>
            <JourneyTimeline />
          </section>

          {/* Skills Section */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Tools & Technologies
                </h2>
              </div>
            </AnimatedSection>
            <SkillsCloud />
          </section>
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}
