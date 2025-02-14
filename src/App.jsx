import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import SelectTicket from './pages/MultiForm/component/SelectTicket';
import Layout from './components/Layout';
import MultiForm from './pages/MultiForm/Multiform';


function App() {


  return (
    <>
      <Router>
        <Layout>

          <Routes>

            <Route path='/' element={<MultiForm />} />


            {/* <Setting /> */}
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
