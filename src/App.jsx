import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
// import Services from './Components/Services/Services'
// import PortFolio from './Components/PortFolio/Portfolio'
// import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <PortFolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App;


