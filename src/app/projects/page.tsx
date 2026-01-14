'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'Food Ordering App',
    src: 'project-placeholder.svg', // Placeholder
    description:
      'A React Native mobile app for food ordering with cart management, order history, and coupon system.',
    href: '/projects/food-ordering',
    tag: 'Mobile App',
    color: '#ff9800'
  },
  {
    title: 'Travel Itinerary',
    src: 'project-placeholder.svg', // Placeholder
    href: '/projects/travel-itinerary',
    tag: 'Mobile App',
    color: '#2196f3'
  },
  {
    title: 'Web Dev Projects',
    src: 'project-placeholder.svg', // Placeholder
    href: '/projects/web-dev',
    tag: 'Full Stack',
    color: '#4caf50'
  }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout
        title={'My Work'}

        subtitle={'(I am still working on adding projects)'}
      >
        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              );
            })}
          </div>
          <Modal projects={projects} />
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
