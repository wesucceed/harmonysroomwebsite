import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';
import HomePage from './components/HomePage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage></HomePage>} />
          <Route path="/programs" element={<ProgramsPage></ProgramsPage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    
  )
}
export default App