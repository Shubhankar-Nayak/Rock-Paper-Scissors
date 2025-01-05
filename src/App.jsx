import React, { useState } from 'react'
import { motion } from "motion/react"
import { useSelector, useDispatch } from 'react-redux';
import { toggleRules } from './store/rulesSlice';
import './App.css'
import triangle from './assets/images/bg-triangle.svg'
import paper from './assets/images/icon-paper.svg'
import rock from './assets/images/icon-rock.svg'
import scissors from './assets/images/icon-scissors.svg'
import Rules from './components/Rules';

function App() {
  const rules = useSelector((state) => state.rules.isVisible);
  const dispatch = useDispatch();

  const handleToggleRules = () => {
    dispatch(toggleRules());
  };

  return (
    <div className='w-full h-screen relative flex flex-col justify-between items-center py-10'>
      <div className='w-[85%] max-w-[700px] ps-5 pe-3 py-3 flex justify-between items-center border-4 border-HeaderOutline rounded-xl'>
        <div className='text-[22px] text-white leading-[1.1rem] barlow-semibold'>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className='px-6 py-3 flex flex-col justify-center items-center bg-white rounded-md'>
          <p className='text-[12px] leading-[1rem] text-ScoreText barlow-semibold'>SCORE</p>
          <p className='text-[40px] leading-[2.5rem] text-DarkText barlow-bold'>0</p>
        </div>
      </div>

      <div className='w-[80%] max-w-[320px] h-fit px-4 py-10 relative'>
        <img className='w-[220px] h-[190px] mx-auto flex justify-center items-center' src={triangle} alt="Triangle" />
        <div className='absolute paper-grad top-0 left-0 px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer'>
          <img className='w-[45px] h-fit' src={paper} alt="Paper" />
        </div>

        <div className='absolute scissors-grad top-0 right-0 px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer'>
          <img className='w-[45px] h-fit' src={scissors} alt="Scissors" />
        </div>

        <div className='absolute rock-grad bottom-0 right-[90px] tablet:right-[100px] p-6 border-[15px] border-transparent rounded-full cursor-pointer'>
          <img className='w-[45px] h-fit' src={rock} alt="Rock" />
        </div>
      </div>     
      
      <div className='w-[80%] flex justify-between'>
        <div className='px-10 py-2 text-white hover:text-DarkText hover:bg-white border-white border-2 rounded-lg cursor-pointer duration-300'>
          <p className='barlow-medium tracking-[0.2em]'>MODE</p>
        </div>
        <div className='px-10 py-2 text-white hover:text-DarkText hover:bg-white border-white border-2 rounded-lg cursor-pointer duration-300' onClick={handleToggleRules}>
          <p className='barlow-medium tracking-[0.2em]'>RULES</p>
        </div>
      </div>

      {rules && <Rules />}
    </div>
  )
}

export default App
