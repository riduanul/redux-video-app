import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import Video from './Pages/Video'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='videos/:videoId' element={<Video />} />
     </Routes>
      <Footer />
    </Router>
  );
}

export default App;
