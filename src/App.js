import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <div className='bg-black'>
    <Navbar />
      <Hero />
      <Card />
      <Food />
      <Category />
      <Footer/>

    </div>
     
    </>
  )
}

export default App