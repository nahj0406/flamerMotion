import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)

  //gesture props
  // whileHover, whileTap, whileInview(스크롤) 등 animate 대신 사용 가능

  return (
    <>
      <motion.div
        whileHover={{x: 50, rotate: 270,}}
        transition={{type: 'tween', duration: 0.7,}}
      >
        <img src={reactLogo} className="logo react" alt="React logo" />
      </motion.div>

      <motion.div 
        initial={{x: 0, rotate: 0,}} animate={{x: 50, rotate: 270,}} 
        transition={{type: 'tween', duration: 0.7,}}
      >
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </motion.div>
    </>
  )
}

export default App
