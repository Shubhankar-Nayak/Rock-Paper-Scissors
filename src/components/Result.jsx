import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/scoreSlice';

const images = {"paper" : paper, "rock" : rock, "scissors" : scissors}

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5, delay: 0.5 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const Result = ({ selectedOption, setSelectedOption }) => {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch()
  const [houseOption, setHouseOption] = useState("");
  const [result, setResult] = useState("");
  const [isHousePicked, setIsHousePicked] = useState(false);

  const determineWinner = (user, house) => {
    if (user === house) {
      return "tie";
    }
    if (
      (user === "rock" && house === "scissors") ||
      (user === "paper" && house === "rock") ||
      (user === "scissors" && house === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  useEffect(() => {
    if (selectedOption) {
      const options = ["rock", "paper", "scissors"];
      setIsHousePicked(false);

      const timer = setTimeout(() => {
        const randomHouseOption = options[Math.floor(Math.random() * options.length)];
        setHouseOption(randomHouseOption);
        setIsHousePicked(true);

        const gameResult = determineWinner(selectedOption, randomHouseOption);
        setResult(gameResult);

        if (gameResult === "win") {
          dispatch(increment());
        } else if (gameResult === "lose") {
          dispatch(decrement());
        }
      }, 1500); 

      return () => clearTimeout(timer); 
    }
  }, [selectedOption, dispatch]);

  return (
    <AnimatePresence>
      {selectedOption && (
        <>
        <motion.div 
          className='flex gap-5 laptop:gap-[4rem]'
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={animationVariants}
        >
          <div className='flex flex-col justify-center items-center gap-10'>
            <p className='hidden laptop:block text-[25px] text-white tracking-[0.2rem] barlow-semibold'>YOU PICKED</p>
            <div className={`${selectedOption}-grad top-0 left-0 ${selectedOption === 'rock' ? 'p-6' : 'px-6 py-5'} laptop:px-[4rem] laptop:py-[3.75rem] border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer`}>
              <img className='w-[45px] laptop:w-[85px] h-fit' src={images[selectedOption]} alt={selectedOption} />
            </div>
            <p className='laptop:hidden text-[20px] text-white barlow-semibold'>YOU PICKED</p>
          </div>

          {isHousePicked && (
            <motion.div 
              className='hidden laptop:flex flex-col justify-center items-center'
              initial={{
                ...animationVariants.hidden,
                width: '0px'
              }}
              animate={{
                ...animationVariants.visible,
                width: 'fit-content'
              }}
              exit="exit"
              variants={animationVariants}
            >
              <motion.h1 
                className='text-[60px] text-white barlow-bold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: "1" }}
              >
                {result === "win" ? "YOU WIN" : result === "lose" ? "YOU LOSE" : "IT'S A DRAW"}
              </motion.h1>
              <button className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg duration-300' onClick={() => setSelectedOption("")}>PLAY AGAIN</button>
            </motion.div>
          )}
      
          <div className='flex flex-col justify-center items-center gap-10'>
            <p className='hidden laptop:block text-[25px] text-white tracking-[0.2rem] barlow-semibold'>THE HOUSE PICKED</p>
            {isHousePicked ? (
              <div className={`${houseOption}-grad top-0 left-0 ${houseOption === 'rock' ? 'p-6' : 'px-6 py-5'} laptop:px-[4rem] laptop:py-[3.75rem] border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer`}>
                <img className='w-[45px] laptop:w-[85px] h-fit' src={images[houseOption]} alt={houseOption} />
              </div>
            ) : (
              <div className="w-[45px] laptop:w-[85px] aspect-square bg-gray-300 rounded-full"></div>
            )}
            <p className='laptop:hidden text-[20px] text-white barlow-semibold'>THE HOUSE PICKED</p>
          </div>
        </motion.div>

        {isHousePicked && (
          <motion.div 
            className='laptop:hidden flex flex-col justify-center items-center'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationVariants}
          >
            <h1 className='text-[60px] text-white barlow-bold'>
              {result === "win" ? "YOU WIN" : result === "lose" ? "YOU LOSE" : "IT'S A DRAW"}
            </h1>
            <button className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg duration-300' onClick={() => setSelectedOption("")}>PLAY AGAIN</button>
          </motion.div>
        )}
        
        </>
      )}
    </AnimatePresence>
  )
}

export default Result