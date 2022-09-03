import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Contents from './components/Main/Contents'

function App() {
  return (
    <div className='overflow-y-auto'>
      <Header />
      <Contents />
    </div>
  )
}

export default App
