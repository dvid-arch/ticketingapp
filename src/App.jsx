import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import MultiForm from './pages/MultiForm/Multiform';


function App() {
  // console.log('API URL:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<MultiForm />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
