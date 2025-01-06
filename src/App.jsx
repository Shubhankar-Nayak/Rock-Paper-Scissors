import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { useSelector, useDispatch } from 'react-redux';
import { toggleRules } from './store/rulesSlice';
import './App.css'
import triangle from './assets/images/bg-triangle.svg'
import paper from './assets/images/icon-paper.svg'
import rock from './assets/images/icon-rock.svg'
import scissors from './assets/images/icon-scissors.svg'
import Rules from './components/Rules';
import Result from './components/Result';

function App() {
  const rules = useSelector((state) => state.rules.isVisible);
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
          <p className='text-[40px] leading-[2.5rem] text-DarkText barlow-bold'>{score}</p>
        </div>
      </div>

      <AnimatePresence>
        {!selectedOption && (
          <motion.div
            className="w-[80%] max-w-[320px] h-fit px-4 py-10 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              className="w-[220px] h-[190px] mx-auto flex justify-center items-center"
              src={triangle}
              alt="Triangle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute paper-grad top-0 left-0 px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("paper")}
            >
              <img className="w-[45px] h-fit" src={paper} alt="Paper" />
            </motion.div>

            <motion.div
              className="absolute scissors-grad top-0 right-0 px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("scissors")}
            >
              <img className="w-[45px] h-fit" src={scissors} alt="Scissors" />
            </motion.div>

            <motion.div
              className="absolute rock-grad bottom-0 right-[90px] tablet:right-[100px] p-6 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("rock")}
            >
              <img className="w-[45px] h-fit" src={rock} alt="Rock" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Result selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        
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
