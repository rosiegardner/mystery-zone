import React from "react";
import Intro from "./Intro";
import Header from "./Header";
import AlbumControl from './albums/AlbumControl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/welcome" element={<Intro />} />
          
          <Route path="/" element={<AlbumControl />}/>
          

        </Routes>

      </Router>
      
      </div>
      );
    }

export default App;
