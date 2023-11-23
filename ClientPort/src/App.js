import React from 'react';
import {BrowserRouter , Routes , Route , useLocation} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './component/navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particles } from './helper/util';
import './App.scss';


function App() {
  
 const location = useLocation()

 const homePageLocation = location.pathname === '/'

 const handleInit = async (main)=>{
      await loadFull(main)
 }


  return (
    <div className='App'>
     {homePageLocation && <Particles id="particles" options={particles} init={handleInit}/>}
     
      <Navbar/>

      <div className='App__main-page-content'> 
       <Routes>
         <Route index path='/' element={<Home/>}/>
         <Route  path='/about' element={<About/>}/>
         <Route  path='/resume' element={<Resume/>}/>
         <Route  path='/skills' element={<Skills/>}/>
         <Route  path='/contact' element={<Contact/>}/>
         <Route  path='/portfolio' element={<Portfolio/>}/>
       </Routes>
      </div>

     </div>
  );
  
}

export default App;
