import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style.css'


function App() {
  const strings = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array index as the key'];
 

  return (
    <>
    <div className='wrapper'>
    <h2 className='top'>React way to render a list</h2>
    <div className='divlist' >
    <ul className='list'>
      {strings.map((str) => (
        <li key={str}>{str}</li>
      ))}
    </ul>
    </div>
    </div>
    
      
    </>
  )
}

export default App
