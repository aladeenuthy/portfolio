import HomeBody from './components/HomeBody';
import Navbar from './components/Navbar';
import ProjectBody from './components/ProjectBody';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route} from 'react-router-dom';
import Services from './components/Services';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomeBody/>}>

          </Route>
          <Route path='/projects' element={<ProjectBody/>}>

          </Route>
          <Route path='/services' element={<Services/>}>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
