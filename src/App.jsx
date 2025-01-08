import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleRules } from './store/rulesSlice';
import { toggleMode } from './store/modeSlice';
import './App.css'
import Rules from './components/Rules';
import Result from './components/Result';
import Original from './components/Original';
import Bonus from './components/Bonus';

function App() {
  const rules = useSelector((state) => state.rules.isVisible);
  const mode = useSelector((state) => state.mode.isVisible);
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleRules = () => {
    dispatch(toggleRules());
  };

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className='w-full h-screen relative flex flex-col justify-around laptop:justify-between items-center py-10'>
      <div className='w-[85%] max-w-[700px] ps-5 pe-3 py-3 flex justify-between items-center border-4 border-HeaderOutline rounded-xl'>
        <div className='text-[22px] text-white leading-[1.1rem] barlow-semibold'>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
          { !mode && <p>LIZARD</p> }
          { !mode && <p>SPOCK</p> }
        </div>
        <div className='px-6 py-3 flex flex-col justify-center items-center bg-white rounded-md'>
          <p className='text-[12px] leading-[1rem] text-ScoreText barlow-semibold'>SCORE</p>
          <p className='text-[40px] leading-[2.5rem] text-DarkText barlow-bold'>{score}</p>
        </div>
      </div>

      { mode && <Original selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}
      { !mode && <Bonus selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}

      <Result selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        
      <div className='w-[80%] flex justify-between'>
        <div className='px-10 py-2 text-white hover:text-DarkText hover:bg-white border-white border-2 rounded-lg cursor-pointer duration-300' onClick={handleToggleMode}>
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
