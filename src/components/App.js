import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AlbumControl from './albums/AlbumControl';


function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path ="/" element={ <AlbumControl /> } />

      </Routes>
    </Router>
  
  );
}

export default App;
