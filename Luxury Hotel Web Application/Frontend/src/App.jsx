import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Hotel/Navbar/Navbar'
import Home from './Hotel/Home Page/Home';
import About from './Hotel/About/About';
import Rooms from './Hotel/Rooms/Rooms';
import Booking from './Hotel/Booking/Booking';
import Dinein from './Hotel/Dine-in/Dinein';
import Contact from './Hotel/Contact us/Contact'
import Login from './Hotel/Auth/Login';
import Signup from './Hotel/Auth/Signup';
import Reset from './Hotel/Auth/Reset';

import Hero from './Hotel/Hero';
import Cards from './Hotel/Cards';

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar />
      <Hero />
      <Cards />
      <Home />
      <About />
      <Booking />
      <Rooms/>
      <Dinein />
      <Contact /> */}

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dinein" element={<Dinein />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>







    </>
  )
}

export default App
