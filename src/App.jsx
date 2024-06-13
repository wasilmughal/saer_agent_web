import React from 'react'
import Navbar from './Components/Navbar'
import InternalNavbar from './Components/InternatNavbar'
 import Footer from './Components/Footer'
import Navigate from './Config/Navigat'
import { useLocation } from 'react-router-dom'

function App() {

const loc = useLocation()


  return (
     <div className='overflow-hidden'>


{
  loc.pathname == "/" ? <Navbar/> : <InternalNavbar/>
}

<Navigate/>


<Footer/>




    </div>
  )
}

export default App
