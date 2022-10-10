import React from "react";
import Intro from "./Intro";
import Header from "./Header";
// import AlbumControl from './albums/AlbumControl';
import AlbumList from './albums/AlbumList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Intro />} />
          
          <Route path="/albums" element={<AlbumList />}/>
          

        </Routes>

      </Router>
      
      </div>
      );
    }

export default App;
