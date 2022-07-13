import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import kishan from '../public/assets/kishan.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average Data Scientist
          </p>
          <p className='py-2 text-gray-600'>
            I have always had a knack for
            technology and working with computers. In 2019 I started working
            with Jupyter Notebook to make some minor edits on a small business
            data that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning Machine Learning and was even more
            enthused with visualize data and giving insights with it. I then started
            buiding different types of projects. I am
            now spending my time building more projects with Machine learning, Deep Learning,
             Artificial Inteligence
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={kishan} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
