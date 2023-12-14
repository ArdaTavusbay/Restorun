import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function goToLink(link){
  window.open(link, '_blank').focus();
}

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Eylül Badem</h2>
              <button onClick={() => goToLink('https://www.linkedin.com/in/eyl%C3%BCl-badem-a079151b8/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>LinkedIn</button>
              <button onClick={() => goToLink('https://github.com/eylulbadem')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>GitHub</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Efe Can Tepe</h2>
              <button onClick={() => goToLink('https://www.linkedin.com/in/efecantepe/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>LinkedIn</button>
              <button onClick={() => goToLink('https://github.com/efecantepe')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>GitHub</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Onur Ertunç</h2>
              <button onClick={() => goToLink('https://www.linkedin.com/in/onurertunc/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>LinkedIn</button>
              <button onClick={() => goToLink('https://github.com/OnurErtunc')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>GitHub</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Arda Tavusbay</h2>
              <button onClick={() => goToLink('https://www.linkedin.com/in/ardatavusbay/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>LinkedIn</button>
              <button onClick={() => goToLink('https://github.com/ArdaTavusbay')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>GitHub</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Semih Kaan Çakır</h2>
              <button onClick={() => goToLink('https://www.linkedin.com/in/semih-kaan-%C3%A7akir-97b565208/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>LinkedIn</button>
              <button onClick={() => goToLink('https://github.com/Ashellas')} type='button' className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>GitHub</button>
          </div>
      </div>
    </div>
  );
};



export default Cards;
