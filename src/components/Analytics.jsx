import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Our Project Description</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Aim and Innovative Features of Restorun</h1>
          <p>
          Our project is dedicated to revolutionizing the restaurant industry with a cutting-edge platform. Our mission is to empower restaurants to attract more patrons, elevate their service standards, organize captivating events, and foster meaningful interactions with their customers. Through our platform, restaurants can engage with their clientele via posts, showcase menus, and optimize their occupancy ratios. This innovative solution promises to reshape the dining experience, delivering benefits for both restaurants and their valued customers.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
