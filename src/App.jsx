 import React, { Component } from 'react';
import './App.css'
import Movies from './component/movies'

function App() {
 
  return (
    <>
      <main className='container' style={{paddingTop: "100px", fontSize: "18px", fontWeight: "600"}}>
      <Movies/>
      </main>
      
    </>
  )
}

export default App
