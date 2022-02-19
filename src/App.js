import './App.css';
// if you need to add different page, need to install "react-router-dom", 分頁要安裝"react-router-dom"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import home page
import Home from './Components/Home/Home';
// import about page
import About from './Components/About/About';
// import project page
import Project from './Components/Project/Project';
// import Navbar
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
      <Routes>
        <Route path="/Gabriel-Page" element={<Home/>} />
        <Route path="/aboutPage" element={<About/>} />
        <Route path="/projectPage" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
