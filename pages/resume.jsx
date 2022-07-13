// https://drive.google.com/file/d/1oyCTlR_9FxbfcgPZbafmZZSTEzTxO0Aa/view?usp=sharing
import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const resume = () => {
  return (
    <>
      <Head>
        <title>IAmKish@n | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='align-items-center'>
        <div className=' shadow-lg bg-[#d0d4d6] p-20 pt-[140px] max-w-[940px] mx-auto my-auto'>
          <h2 className='text-center'>Resume</h2>
          <div className='bg-[#b5c6cf] rounded-md my-4 p-4 w-full flex justify-between items-center'>
            <h2 className='text-center'>Kishan Pahadiya</h2>
            <div className='flex'>
              <a
                href='https://www.linkedin.com/in/kishan-pahadiya-b25a47219/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
              </a>
              <a
                href='https://github.com/websitecreatr99'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size={20} style={{ marginRight: '1rem' }} />
              </a>
            </div>
          </div>
          <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
            <div className='hidden sm:block'>
              <p>
                Proven Leadership <span className='px-1'>|</span> Data Scientist{' '}
                <span className='px-1'>|</span> Complex Problem Solving
              </p>
            </div>
            <div className='block sm:hidden'>
              <p>Proven Leadership</p>
              <p className='py-2'>Data Scientist</p>
              <p>Complex Problem Solving</p>
            </div>
          </div>
          <p>
            Analytical, innovative, and motivated Data Scientist professional
            with experience in customer service, team leadership, and
            organizational effectiveness in fast-paced and challenging
            environments. Adept at developing strategies and driving streamlined
            operations. Diverse analytical skills, team collaboration, and
            relationship building. Consummate professional, and motivated leader,
            with solid interpersonal abilities and complex problem-solving skills.
            Effective and proven track record of critical thinking, idea
            generation, and optimizing efficiencies.
          </p>

          {/* Skills */}
          <div className='text-center py-4'>
            <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
            <p className='py-2'>
              <span className='font-bold'>Technical Skills</span>
              <span className='px-2'>|</span>Data Scientist
              <span className='px-2'>|</span> Machine Learning <span className='px-2'>|</span>
              Deep Learning <span className='px-2'>|</span>React
              <span className='px-2'>|</span>Natural Language Processing
              <span className='px-2'>|</span> Data Analytics
            </p>
            <p className='py-2'>
              <span className='font-bold'>Amazon Web Services</span>
              <span className='px-2'>|</span>Amazon Web Services Cloud
              Practitioner
            </p>
          </div>

          <h5 className='text-center underline text-[18px] py-4'>
            Professional Experience
          </h5>
          {/* Experience */}
          <div className='py-6'>
            <p className='italic'>
              <span className='font-bold italic'>
                MOVIE RECOMMENDATION SYSTEM
              </span>
              <span className='px-2'>|</span>Streamlit
            </p>
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              <li>
                I have created an app using streamlit through which it can
                detect the spam massage by putting text on it
                I have created an app using streamlit which will
                recommend movie (with their posters) based on user input.
              </li>
              <li>
                Troubleshoot issues and concerns, configure operation and analytic
                plugins, and design changes as needed.
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className='py-6'>
            <p className='italic'>
              <span className='font-bold'>WHATSAPP CHAT ANALYZER</span>
              <span className='px-2'>|</span>Python Libraries
            </p>
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              <li>
                I have built WhatsApp chat Analyzer in which you can analyse your 
                group as well as your single one-to-one chat.
              </li>
              <li>
                Here I have used different kind of python libraries like numpy, pandas
                and for visualization I have used matplotlib, seaborn and many different libraries.
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className='py-6'>
            <p className='italic'>
              <span className='font-bold'>SKILLS</span></p>
            <div className='flex'>
              <ul className='list-disc list-outside px-7 py-2 leading-relaxed'>
                <li>
                  Data Analyst </li>
                <li> Data Scientist </li>
                <li> Machine Learning </li>
                <li> Deep Learning </li>
              </ul>
              <ul className='list-disc list-outside mx-20 px-10 py-2 leading-relaxed'>
                <li> Python </li>
                <li> Natural Language <br /> Processing </li>
                <li> Data Cleaning </li>
              </ul>
              <ul className='list-disc list-outside px-10 py-2 leading-relaxed'>
                <li>
                  Exploratory Data <br /> Analysis </li>
                <li> MERN developer</li>
                <li> Javascript </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='place-items-center'>
        <button>
          <a
            href='https://drive.google.com/file/d/1oyCTlR_9FxbfcgPZbafmZZSTEzTxO0Aa/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              Download
            </div>
          </a>
        </button>
      </div> */}
      <div class="flex justify-center my-5">
        <button><a
          href='https://drive.google.com/file/d/1vZNfzNqz7fr1zFEHJMEo0Src984a1h8U/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          <div className='rounded-md shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
            Download My Resume
          </div>
        </a>
        </button>
      </div>

    </>
  );
};

export default resume;
