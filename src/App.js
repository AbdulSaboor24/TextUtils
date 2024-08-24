import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const changeTheme = (color) => {
    if (color === 'green') {
      document.body.style.backgroundColor = '#198754';
    } else if (color === 'red') {
      document.body.style.backgroundColor = '#dc3545';
    } else if (color === 'yellow') {
      document.body.style.backgroundColor = '#e4ff00';
    }

    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} theme has been enabled`, "success");
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze" showAlert={showAlert} mode={mode} />}>
            </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;