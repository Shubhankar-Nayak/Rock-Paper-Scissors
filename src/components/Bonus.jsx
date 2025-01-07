import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import pentagon from '../assets/images/bg-pentagon.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import lizard from '../assets/images/icon-lizard.svg'
import spock from '../assets/images/icon-spock.svg'

const Bonus = ({ selectedOption, setSelectedOption }) => {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
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
              className="w-[220px] h-fit mx-auto"
              src={pentagon}
              alt="Pentagon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute paper-grad top-12 right-[-20px] px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("paper")}
            >
              <img className="w-[35px] h-fit" src={paper} alt="Paper" />
            </motion.div>

            <motion.div
              className="absolute scissors-grad top-[-20px] left-24 px-6 py-5 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("scissors")}
            >
              <img className="w-[35px] h-fit" src={scissors} alt="Scissors" />
            </motion.div>

            <motion.div
              className="absolute rock-grad bottom-0 right-5 p-6 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("rock")}
            >
              <img className="w-[35px] h-fit" src={rock} alt="Rock" />
            </motion.div>

            <motion.div
              className="absolute lizard-grad bottom-0 left-5 p-6 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("lizard")}
            >
              <img className="w-[35px] h-fit" src={lizard} alt="Lizard" />
            </motion.div>

            <motion.div
              className="absolute spock-grad top-12 left-[-20px] px-5 py-4 border-[15px] border-transparent rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleOptionClick("spock")}
            >
              <img className="w-[35px] h-fit" src={spock} alt="Spock" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default Bonus