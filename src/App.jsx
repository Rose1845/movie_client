import React from 'react'
import './App.css'
import Home from './pages/Home'
import SingleMovie from './components/SingleMovie'
import { RouterProvider,HashRouter } from 'react-router-dom'
import { router } from './router/inde'
import Layout from './components/layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Layout from './layout'
function App() {
  

  return (
    <div className="App">
      

  

      <RouterProvider router={router}/>
 

   

     
      
    </div>
  )
}

export default App
