import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import qdqpp from '../public/assets/projects/qdqpp.jpeg';
import wca from '../public/assets/projects/wca.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import lpp from '../public/assets/projects/lpp.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Laptop Price Predictor'
            backgroundImg={lpp}
            projectUrl='/laptop-price-predictor'
            tech='Linear Regression'
          />
          <ProjectItem
            title='Quora Duplicate Question Predictor'
            backgroundImg={qdqpp}
            projectUrl='/quora-duplicate-question-predictor'
            tech='Natural Language Processsing'

          />
          <ProjectItem
            title='Movie Recommendation System'
            backgroundImg={netflixImg}
            projectUrl='/movie-recommendation-system'
            tech='Cosine Similarity'

          />
          <ProjectItem
            title='Whatsup Chat Analyser'
            backgroundImg={wca}
            projectUrl='/whatsapp-chat-analyzer'
            tech='Python Libraries'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
