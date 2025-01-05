import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleRules } from '../store/rulesSlice';
import rule from '../assets/images/image-rules.svg'
import close from '../assets/images/icon-close.svg'

const Rules = () => {
  const rules = useSelector((state) => state.rules.isVisible);
  const dispatch = useDispatch();

  const handleToggleRules = () => {
    dispatch(toggleRules());
  };

  return (
    <>
      <div className='w-full h-screen fixed top-0 left-0 bg-[black] opacity-50 z-10'></div>
    
      <div className='w-full h-screen fixed top-0 flex justify-center items-center z-40'>
        <div className='w-full laptop:w-[400px] h-screen laptop:h-[425px] top-0 laptop:top-auto flex flex-col justify-around items-center bg-white barlow-medium laptop:rounded-xl'>
          <div className='laptop:w-[80%] flex justify-between items-center'>
            <h1 className='text-[35px] text-DarkText barlow-bold'>RULES</h1>
            <img className='hidden laptop:block cursor-pointer' src={close} alt="Close" onClick={handleToggleRules} />
          </div>
          <img src={rule} alt="Rules" />
          <div className='laptop:hidden'>
            <img className='cursor-pointer' src={close} alt="Close" onClick={handleToggleRules} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules