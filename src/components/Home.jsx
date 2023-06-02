import React from 'react';
import ProFile from '../assets/profile.png';
import { TiArrowRightOutline } from 'react-icons/ti';
import {Link} from 'react-scroll';

const Home = () => {
  return (
  <div name="home"
   className='m-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-48'>

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Aspiring Web Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            I am a technical support professional. 
            I've always been interested in technology and computers, which led me to pursue a degree in BSIT. 
            During my free time, I discovered a passion for coding and software development. 
            When not working, I enjoy playing mobile games and exploring in programming. 
            I hope to continue to grow and develop my skills as a software engineer and eventually become a successful programmer.
            </p>

            <div>
                <Link className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <TiArrowRightOutline size={25} className='ml-1'/> 
                    </span>
                </Link>
            </div>
        </div>

        <div>
            <img src={ProFile} alt='my profile' className=' rounded-2xl mx-auto  w-2/3 md:w-full px-16 mt-20'/>
        </div>
    </div>
  </div>
  );
};

export default Home;