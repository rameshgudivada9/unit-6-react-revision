import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { Feeds } from './pages/Feeds'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="" element={<Home/>}></Route>
       <Route path="feeds" element={<Feeds/>}></Route>

     </Routes>
    </div>
  )
}

export default App
