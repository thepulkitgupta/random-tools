import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Utilities from './utilities/Utilities';

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;
