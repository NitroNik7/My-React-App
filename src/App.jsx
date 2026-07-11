import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import {input} from 'bootstrap';

import Navbar from './Components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <h1>Hello, React!</h1>
      <p>Your local development server is running.</p>
    </div>
  )
}

export default App

