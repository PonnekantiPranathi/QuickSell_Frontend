import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import DisplayPriority from './pages/DisplayPriority';
import DisplayStatus from './pages/DisplayStatus';
import DisplayUser from './pages/DisplayUser';
import PriorityOrdering from './pages/PriorityOrdering';
import TitleOrdering from './pages/TitleOrdering';

const App = () => {
  return (
    <Router>
      <HeaderComponent />  {/* Header stays fixed across all pages */}
      <Routes>
        <Route path="/priority" element={<DisplayPriority />} />
        <Route path="/status" element={<DisplayStatus />} />
        <Route path="/user" element={<DisplayUser />} />

        <Route path="/priority-ordering-user" element={<DisplayUser />} />
        <Route path="/title-ordering-user" element={<DisplayUser />} />
        <Route path="/priority-ordering-priority" element={<DisplayPriority />} />
        <Route path="/title-ordering-priority" element={<DisplayPriority />} />
        <Route path="/priority-ordering-status" element={<DisplayStatus />} />
        <Route path="/title-ordering-status" element={<DisplayStatus />} />
        <Route path="*" element={<Navigate to="/status" />} />
      </Routes>
    </Router>
  );
};

export default App;
