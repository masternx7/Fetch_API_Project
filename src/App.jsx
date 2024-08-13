import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'><Home /></div>
    </>
  )
}

export default App
