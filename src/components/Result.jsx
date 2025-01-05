import React from 'react'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import { useSelector, useDispatch } from 'react-redux';
import { toggleRules } from '../store/rulesSlice';
import Rules from './Rules';

const Result = () => {
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

      <div className='flex gap-5 laptop:gap-[4rem]'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <p className='hidden laptop:block text-[25px] text-white tracking-[0.2rem] barlow-semibold'>YOU PICKED</p>
          <div className='paper-grad top-0 left-0 px-6 py-5 laptop:px-[4rem] laptop:py-[3.75rem] border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer'>
            <img className='w-[45px] laptop:w-[85px] h-fit' src={paper} alt="Paper" />
          </div>
          <p className='laptop:hidden text-[20px] text-white barlow-semibold'>YOU PICKED</p>
        </div>

        <div className='hidden laptop:flex flex-col justify-center items-center'>
          <h1 className='text-[60px] text-white barlow-bold'>YOU LOSE</h1>
          <button className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg duration-300'>PLAY AGAIN</button>
        </div>

        <div className='flex flex-col justify-center items-center gap-10'>
          <p className='hidden laptop:block text-[25px] text-white tracking-[0.2rem] barlow-semibold'>THE HOUSE PICKED</p>
          <div className='paper-grad top-0 left-0 px-6 py-5 laptop:px-[4rem] laptop:py-[3.75rem] border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer'>
            <img className='w-[45px] laptop:w-[85px] h-fit' src={paper} alt="Paper" />
          </div>
          <p className='laptop:hidden text-[20px] text-white barlow-semibold'>THE HOUSE PICKED</p>
        </div>
      </div>

      <div className='laptop:hidden flex flex-col justify-center items-center'>
        <h1 className='text-[60px] text-white barlow-bold'>YOU LOSE</h1>
        <button className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg'>PLAY AGAIN</button>
      </div>

      <div className='w-[80%] flex justify-between'>
        <div className='px-10 py-2 text-white hover:text-DarkText hover:bg-white border-white border-2 rounded-lg cursor-pointer duration-300'>
          <p className='barlow-medium tracking-[0.2em]'>MODE</p>
        </div>
        <div className='px-10 py-2 text-white hover:text-DarkText hover:bg-white border-white border-2 rounded-lg cursor-pointer duration-300' onClick={handleToggleRules}>
          <p className='barlow-medium tracking-[0.2em]'>RULES</p>
        </div>
      </div>

      {rules && ( <Rules /> )}
    </div>
  )
}

export default Result