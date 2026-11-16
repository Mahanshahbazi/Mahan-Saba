import { motion, useReducedMotion } from 'motion/react';

export type ElephantMood = 'happy'|'sad'|'love'|'sleepy'|'surprised';
export default function Elephant({mood='happy',small=false}:{mood?:ElephantMood;small?:boolean}){
  const reduced = useReducedMotion();
  return <motion.div className={`elephant-wrap ${small?'elephant-small':''}`} aria-label="فیل کوچولوی خاکستری با شال صورتی" role="img"
    animate={reduced?{}:{y:[0,-7,0],rotate:[-1,1,-1]}} transition={{duration:3.8,repeat:Infinity,ease:'easeInOut'}}>
    <svg viewBox="0 0 330 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="elephant-svg" aria-hidden="true">
      <ellipse cx="166" cy="275" rx="88" ry="11" fill="#8D7669" opacity=".12"/>
      <path d="M92 173c-3 43 8 88 27 89l17-2 7-33h40l8 33 18 1c15-10 22-58 17-91" fill="#A8ABB5"/>
      <path d="M102 209c3 28 12 46 18 50M209 213c-2 21-6 36-13 45" stroke="#8D909A" strokeWidth="5" strokeLinecap="round"/>
      <path d="M104 224q-32-8-36-38" stroke="#9699A3" strokeWidth="13" strokeLinecap="round"/>
      <path d="M85 120C38 75 18 153 65 197c21 18 49 11 64-8M237 120c47-45 67 33 20 77-21 18-49 11-64-8" fill="#9398A4" stroke="#808591" strokeWidth="4"/>
      <path d="M99 127c-30-34-51 10-32 42 10 16 27 22 42 17M232 127c30-34 51 10 32 42-10 16-27 22-42 17" fill="#D2ADB5" opacity=".9"/>
      <path d="M84 112C91 53 129 34 166 34c44 0 79 32 82 88 3 65-37 105-83 105-50 0-87-42-81-115" fill="#B9BDC6" stroke="#9398A4" strokeWidth="4"/>
      <path d="M153 165c0 14-1 41 5 61 6 20 25 29 36 17 8-10 1-21-8-22" stroke="#9B9FAA" strokeWidth="36" strokeLinecap="round"/>
      <path d="M153 164c0 17 0 47 7 63 5 12 16 18 23 13" stroke="#C1C5CD" strokeWidth="25" strokeLinecap="round"/>
      {mood==='sad'?<><path d="M119 137q11-10 22 0M197 137q11-10 22 0" stroke="#484D5A" strokeWidth="5" strokeLinecap="round"/><path d="M215 156q-2 17-8 19" stroke="#8AB8D8" strokeWidth="5" strokeLinecap="round"/></>:mood==='sleepy'?<><path d="M120 145q12 13 24 0M192 145q12 13 24 0" stroke="#484D5A" strokeWidth="5" strokeLinecap="round"/></>:<><ellipse cx="131" cy="143" rx="6" ry="8" fill="#414652"/><ellipse cx="204" cy="143" rx="6" ry="8" fill="#414652"/><circle cx="133" cy="140" r="2" fill="#FFF"/><circle cx="206" cy="140" r="2" fill="#FFF"/></>}
      <ellipse cx="112" cy="164" rx="17" ry="9" fill="#E8A9AF" opacity=".7"/><ellipse cx="221" cy="164" rx="17" ry="9" fill="#E8A9AF" opacity=".7"/>
      <path d="M111 205q55 37 111 0" stroke="#B85E6B" strokeWidth="17" strokeLinecap="round"/><path d="M136 220q4 21 18 22l-3-24" fill="#D97D8B"/><path d="M192 220q-5 19 6 24l10-31" fill="#D97D8B"/>
      {mood==='love'&&<><path d="M251 35c0-11 14-15 20-5 7-10 21-6 21 5 0 15-21 25-21 25s-20-10-20-25Z" fill="#D78592"/><path d="M47 69c0-7 9-10 13-3 5-7 14-4 14 3 0 10-14 17-14 17S47 79 47 69Z" fill="#E8A6AE"/></>}
      {mood==='surprised'&&<circle cx="170" cy="164" r="5" fill="#6F707A"/>}
    </svg>
  </motion.div>
}
