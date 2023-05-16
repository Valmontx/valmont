import {BrowserRouter,Routes, Route } from 'react-router-dom';
import { NavbarAndWelcome } from './componentes/NavbarAndWelcome';
import { Projects } from './componentes/Projects';
import { ContactMe } from './componentes/ContactMe';
import './App.css'
import './Styles/Home.css'
import './Styles/About.css'
import { AboutAndModal } from './componentes/AboutAndModal';




function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavbarAndWelcome/> }/>
    <Route path='/About me' element={<AboutAndModal/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/Contact' element={<ContactMe/>}/>
    
    </Routes>
    </BrowserRouter>
   
   
  )
}

export default App
