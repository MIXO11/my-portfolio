import React from 'react';

export const About = () => {
  return (
    <div name='about'
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-40'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                As an aspiring programmer, my journey began in the realm of technical support. With a deep curiosity for how things work and a desire to solve complex problems, I quickly realized my passion for programming. From troubleshooting software issues to providing technical assistance, my experience in technical support has equipped me with strong analytical and communication skills.
            </p>

            <br />

            <p className='text-xl'>
                Driven by my fascination for coding, I embarked on a path to become a programmer. I immersed myself in learning various programming languages and frameworks, constantly challenging myself to tackle new coding challenges. The joy of transforming ideas into functional and elegant code has fueled my determination to excel in this field.
            </p>

            <br />

            <p className='text-xl'>
                I am dedicated to continuous learning and growth, eagerly embracing new technologies and industry best practices. Through my portfolio, I showcase my projects and demonstrate my ability to create intuitive and efficient software solutions. I am excited to contribute to the ever-evolving world of programming and collaborate with like-minded individuals to create innovative applications that make a positive impact.
            </p>
        </div>
    </div>
  );
};
