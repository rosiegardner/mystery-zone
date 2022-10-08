import React from "react";
import Header from "./Header";
import Home from './Home';
import AlbumControl from './albums/AlbumControl';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AlbumControl/>
      {/* <Router>
        <Header />
        <AnimatePresence wait>
          <Routes>
            <Route path="/" element={<AlbumControl />}/>
            <Route path="/home" element={<Home />}/>
          </Routes>
        </AnimatePresence>

      </Router> */}
      {/* <Home/>
      <AlbumControl /> */}
      
    </div>
  );
}

export default App;
