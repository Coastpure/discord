import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Groups from './components/Groups'
import Discover from './components/Discover'
import MainComponent from './components/MainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-[#393943] h-full">
      {/* Friends & Groups */}
      <Groups />
      {/* Discover */}
      {/* <Discover /> */}
      {/* Main Component */}
      < MainComponent />
        {/* Hero */}
    
      {/* Featured */}
      {/* <div className="w-full h-screen bg-[#393943]"></div> */}
      
    </div>
  )
}

export default App
