import React from 'react';
import paper from '../assets/paper.png'

function goToLink(link){
  window.open(link, '_blank');
}

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='w-full mx-auto grid content-center'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Current Reports
            <div className='mt-[3rem] max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
              <div onClick={() => goToLink('https://drive.google.com/file/d/1nCuT1Ce0utkEYDpf9i0EQDaWFcAgiEc7/view?usp=sharing')} className='cursor-pointer bg-[#FFFFFF] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-black text-2xl font-bold text-center py-8'>Project Specification Report</h2>
                <h2 className='text-black text-xl font-bold text-center'>08.11.2023</h2>
                <br/>
                <img className='w-20 mx-auto mt-[-1rem] bg-white' src={paper} alt="/"/>
              </div>
              <div onClick={() => goToLink('https://drive.google.com/file/d/1zVH-H5vTl99Ll6Ycjnoq-JBtQGOKBat3/view?usp=sharing')} className='cursor-pointer bg-[#FFFFFF] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-black text-2xl font-bold text-center py-8'>Analysis and Requirement Report</h2>
                <h2 className='text-black text-xl font-bold text-center'>08.12.2023</h2>
                <br/>
                <img className='w-20 mx-auto mt-[-1rem] bg-white' src={paper} alt="/"/>
              </div>
              <div className='cursor-pointer bg-[#FFFFFF] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-black text-2xl font-bold text-center py-8'>Detailed Design Report (Not done yet)</h2>
                <h2 className='text-black text-xl font-bold text-center'>TBA</h2>
                <br/>
                <img className='w-20 mx-auto mt-[-1rem] bg-white' src={paper} alt="/"/>
              </div>
              <div className='cursor-pointer bg-[#FFFFFF] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-black text-2xl font-bold text-center py-8'>Final Report (Not done yet)</h2>
                <h2 className='text-black text-xl font-bold text-center'>TBA</h2>
                <br/>
                <img className='w-20 mx-auto mt-[-1rem] bg-white' src={paper} alt="/"/>
              </div>
            </div>
            
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
