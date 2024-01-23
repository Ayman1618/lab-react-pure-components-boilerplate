import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureCounterComponent from './components/PureCounterComponent'
import SimpleCounterComponent from './components/SimpleCounterComponent'

function App() {
  

  return (
    <>
      <PureCounterComponent />
      <SimpleCounterComponent />
    </>
  )
}

export default App
