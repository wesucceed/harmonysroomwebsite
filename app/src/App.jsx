import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './components/About/AboutPage';
import ProgramsPage from './components/Programs/ProgramsPage';
import Home from './components/Home/Home';
import OurStory from './components/OurStory/OurStory';
import Team from './components/Team/Team';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/programs" element={<ProgramsPage></ProgramsPage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/story" element={<OurStory></OurStory>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}
export default App