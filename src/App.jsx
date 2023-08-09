import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Form2hr from './Pages/Form2hr'
import Form4hr from './Pages/Form4hr'
import TheBooth from './Pages/TheBooth'
import Paymentconfirm from './Pages/Paymentconfirm'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact-us' element={<Contact />}></Route>
        <Route exact path='/2hours-booking' element={<Form2hr />}></Route>
        <Route exact path='/4hours-booking' element={<Form4hr />}></Route>
        <Route exact path='/the-booth' element={<TheBooth />}></Route>
        <Route exact path='/deposit-confirmed' element={<Paymentconfirm />}></Route>


        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default App