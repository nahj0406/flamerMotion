import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, useMotionValue, useTransform } from "framer-motion";

function App() {

  // useMotionValue, useTransform 등은 라이브러리 안에 내장된 훅.
  // useMotionValue를 상태에 저장하고 css에 값으로 사용 가능.
  // useTransform은 변수에 저장된 값이 [0,270] : 0에서 270이 될때
  // [0, 1]: 0에서 1로 변환 한다는 뜻.
  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);

  //gesture props 
  // initial : 초기상태. 애니메이션 실행되기 전 상태
  // animate: 실행상태, 이 대신 아래 제스처 사용 가능 (그냥 animate는 바로 실행됨.)
  // whileHover(hover), whileTap(클릭 시), whileInview(스크롤), Drag(드래그시)
  // whileDrag(드래그 중 상태 스타일), exit(컴포넌트가 사라질 때)
  // transition : 애니메이션 실행 속도, ease 같은 스타일도 지정 가능

  const [clicked, setClicked] = useState(false);
  const buttonVariants = {
    // function으로 정의하는 모습
    hover: (clicked) => ({
      // hover는 key값
      // 클릭된 버튼은 scale이 커지지 않는다.
      scale: clicked ? 1 : 1.5,
    }),
    pressed: {
      scale: 0.5,
    },
    rest: {
      scale: 1,
    },
  };
 
  return (
    <section className='container'>
      <article className='sec1'>
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
  
        <motion.div
          initial="rest"
          whileHover='hover' // buttonVariants 함수 내부에서 정의한 key값
          whileTap='pressed' // buttonVariants 함수 내부에서 정의한 key값
          variants={buttonVariants}
          custom={clicked}
          onClick={()=> setClicked(treu)}
        >
          Click me!
        </motion.div>
      </article>

      <article className="sec2">
        
      </article>
    </section>
  )
}

export default App
