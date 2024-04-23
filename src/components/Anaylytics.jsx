import React from 'react';
import analysis from '../assets/analysis.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row'>
        {/* Image Section */}
        <div className='md:w-[500px] mx-auto md:mx-0 md:my-4'>
          <img className='w-full' src={analysis} alt="" />
        </div>
        
        {/* Content Section */}
        <div className='flex flex-col justify-center md:pl-8'>
          <p className='text-[#0097df] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptates eveniet quo. Perspiciatis labore mollitia necessitatibus obcaecati sed ipsa adipisci nihil debitis nisi incidunt, dignissimos rerum error, molestias blanditiis quod.
          </p>
          <button className='bg-black w-[200px] text-[#0097df] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
