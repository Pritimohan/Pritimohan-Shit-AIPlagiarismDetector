
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'


function App() {


  return (
    <>
      <Toaster />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
