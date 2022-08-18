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
import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
// import { Provider } from "react-redux";
// import { createStore } from 'redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import blueGrey from '@material-ui/core/colors/blueGrey';

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = createStore(()=>{}, ['Use Redux'])

const override = css`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const theme = createTheme({
  palette: {
      primary: {
        main: "#455a64",
      }
    },
});

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

   

  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/Gabriel-Page">
          <Navbar />
            { loading ? (
              <PulseLoader color={"#36D7B7"} loading={loading} size={30} css={override}/>
              ) : (
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/aboutPage" element={<About/>} />
                  <Route path="/projectPage" element={<Project/>} />
                </Routes>
              )
            }
        </BrowserRouter>
      </ThemeProvider>
    // </Provider>
  );
  // ReactDOM.render(<App />, document.getElementById('root'));
}

export default App;
