<<<<<<< HEAD
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './components/About/AboutPage';
import ProgramsPage from './components/Programs/ProgramsPage';
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
    
=======

import './App.css'
import { OurStory } from './components/OurStory/OurStory'
// import { OurStory } from './components/OurStory/OurStory'
import { Team } from './components/Team/Team'

function App() {
  return (
    <>
      {/* <Home></Home> */}
      {/* <Team></Team> */}
      <OurStory></OurStory>



      {/* <div>
       
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
>>>>>>> jj-pages
  )
}
export default App