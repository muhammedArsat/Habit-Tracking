import React from 'react'
import Navbar from './components/Navbar'
import HabitTitleCard from './components/HabitTitleCard'
import RouthPath from './routes/RouthPath'
const App = () => {
  return (
    <div className= ' overflow-hidden dark:bg-black dark:text-white transition-all duration-300 py-2'>
      <RouthPath/>
    </div>
  )
}

export default App
