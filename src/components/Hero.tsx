// import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center mx-4 sm:mx-20 md:mx-32 lg:mx-56 gap-4'
    >
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-center mt-16'
      >
        <span className='text-blue-500'>Discover Your Next Adventure with AI: </span>
        Personalized Itineraries at Your Fingertips
      </motion.h1>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='text-gray-500 text-base sm:text-lg md:text-xl text-center mt-6'
      >
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </motion.h2>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link to={"/create-trip"}>
          <Button className='m-4 py-3 cursor-pointer text-center'>
            Get Started, It's Free
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
