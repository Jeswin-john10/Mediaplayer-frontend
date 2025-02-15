import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'

function App() {

  return (
    <>
 <Header/>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/Watchhistory' element={<Watchhistory/>}/>
</Routes>
   
<Footer/>
    </>
  )
}

export default App
