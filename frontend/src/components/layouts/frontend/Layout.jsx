import React from 'react'
import Navbar from './Navbar'
import './frontend.scss';
import Hero from './Hero';
import About from './About';
import HowToUse from './HowToUse';
const Layout = () => {
  return (
    <div className='frontend_body'>
      <Navbar/>
     <section className='frontend__hero_wrapper'>
        <Hero/>
     </section>
     <section className='frontend__about_wrapper'>
       <About/>
     </section>
     <section className='frontend__howToUse_wrapper'>
       <HowToUse/>
     </section>
    </div>
  )
}

export default Layout