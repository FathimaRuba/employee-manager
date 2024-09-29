import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import View from './Components/View'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
