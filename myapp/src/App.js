import React from 'react'
import { LoginPage } from './Login'
import { SignUpPage } from './SignUpPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/signup' element={< SignUpPage />} />
        <Route path='/login' element={< LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;