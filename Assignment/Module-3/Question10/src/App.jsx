import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const strings = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array index as the key'];
 

  return (
    <>
    <div style={{margin:"auto",width:"600px",alignItems:"center",backgroundColor:"green",height:"250px"}}>
    <h2 className='top'>React way to render a list</h2>
    <div >
    <ul style={{listStyle:"none",marginRight:"25px"}}>
      {strings.map((str) => (
        <li style={{backgroundColor:"white",display:"block",marginBottom:"5px"}} key={str}>{str}</li>
      ))}
    </ul>
    </div>
    



    </div>
    
      
    </>
  )
}

export default App
