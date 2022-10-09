import React from "react";
import Header from "./Header";
import Home from './Home';
import AlbumControl from './albums/AlbumControl';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AlbumControl/>
    </div>
  );
}

export default App;
