import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar showAlert={showAlert} title="TextUtils" text="About Me" />
        <Alert alert={alert} /> {/* pass the alert state as a prop */}
        <TextForm heading="Enter the text below to analyze:-" showAlert={showAlert} />
        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route> */}
          {/* exact is important koiki jb path exact hoga tabhi vo page show krega */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text below to analyze:-" showAlert={showAlert} />}></Route> */}

          {/* pass the showAlert function as a prop  */}
        {/* </Routes> */}
        {/**/}
        {/* <About /> */}
      {/* </Router> */}
    </>

  );
}

export default App;
