import React from 'react';
import Login from './pages/templates/login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/templates/Home.jsx';
import Compiler from './components/Compiler.jsx';
import Articles from './pages/templates/Articles.jsx';
import Policies from './pages/templates/Policies.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Compiler />}>
          <Route path='' element={<Home />} /> {/* Home route */}
          <Route path='Articles' element={<Articles />} />
          <Route path='Policies' element={<Policies/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
