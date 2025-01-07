import React, { useState, useRef ,useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import lizard from '../assets/images/icon-lizard.svg'
import spock from '../assets/images/icon-spock.svg'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/scoreSlice';

const images = {"paper" : paper, "rock" : rock, "scissors" : scissors, "lizard" : lizard, "spock" : spock}

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5, delay: 0.5 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const Result = ({ selectedOption, setSelectedOption }) => {
  const score = useSelector((state) => state.score.value);
  const mode = useSelector((state) => state.mode.isVisible);
  const dispatch = useDispatch()
  const [houseOption, setHouseOption] = useState("");
  const [result, setResult] = useState("");
  const [isHousePicked, setIsHousePicked] = useState(false);

  const divRef = useRef(null);

  const determineWinner = (user, house) => {
    if (user === house) {
      return "tie";
    }
    if (
      (user === "rock" && house === "scissors") ||
      (user === "rock" && house === "lizard") ||
      (user === "paper" && house === "rock") ||
      (user === "paper" && house === "spock") ||
      (user === "scissors" && house === "paper") ||
      (user === "scissors" && house === "lizard") ||
      (user === "lizard" && house === "spock") ||
      (user === "lizard" && house === "paper") ||
      (user === "spock" && house === "scissors") ||
      (user === "spock" && house === "rock") 
    ) {
      return "win";
    }
    return "lose";
  };

  useEffect(() => {
    if (selectedOption) {
      const options = ["rock", "paper", "scissors"];
      const optionsBonus = ["rock", "paper", "scissors","lizard","spock"];
      setIsHousePicked(false);

      const timer = setTimeout(() => {
        const randomHouseOption = mode
          ? options[Math.floor(Math.random() * options.length)]
          : optionsBonus[Math.floor(Math.random() * optionsBonus.length)];
    
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

  useEffect(() => {
    if (result === "win") {
      divRef.current.classList.add("win-grad");
    } else {
      divRef.current.classList.remove("win-grad");
    }
  }, [result]);

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
            <div ref={divRef} className={`${selectedOption}-grad top-0 left-0 ${selectedOption === 'rock' ? 'p-6' : (selectedOption === 'spock'? 'px-6 py-4' : (selectedOption === 'lizard' ? 'p-6' : 'px-6 py-5'))} ${selectedOption === 'spock'? 'laptop:px-[4.25rem] laptop:py-[3.75rem]' : (selectedOption === 'lizard'? 'laptop:p-[4rem]' : 'laptop:px-[4rem] laptop:py-[3.75rem]')} 
                                          border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer`}>
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
              <button 
                className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg duration-300' 
                onClick={() => {
                  setSelectedOption("");
                  setResult("");
                }}
              >
                PLAY AGAIN
              </button>
            </motion.div>
          )}
      
          <div className='flex flex-col justify-center items-center gap-10'>
            <p className='hidden laptop:block text-[25px] text-white tracking-[0.2rem] barlow-semibold'>THE HOUSE PICKED</p>
            {isHousePicked ? (
              <div className={`${houseOption}-grad top-0 left-0 ${houseOption === 'rock' ? 'p-6' : (houseOption === 'spock'? 'px-6 py-4' : (houseOption === 'lizard' ? 'p-6' : 'px-6 py-5'))} ${houseOption === 'spock'? 'laptop:px-[4.25rem] laptop:py-[3.75rem]' : (houseOption === 'lizard'? 'laptop:p-[4rem]' : 'laptop:px-[4rem] laptop:py-[3.75rem]')}
                               ${result === "lose" ? "win-grad" : ""} border-[15px] laptop:border-[30px] border-transparent rounded-full cursor-pointer`}>
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
            <button 
              className='w-[220px] bg-white py-3 text-DarkText hover:text-red-500 barlow-semibold tracking-[0.20rem] rounded-lg duration-300' 
              onClick={() => {
                setSelectedOption("");
                setResult("");
              }}
            >
              PLAY AGAIN
            </button>
          </motion.div>
        )}
        
        </>
      )}
    </AnimatePresence>
  )
}

export default Result