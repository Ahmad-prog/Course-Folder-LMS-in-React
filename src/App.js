import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CourseDialogues from './component/CourseDialogues'; // Corrected path.
import CourseDetails from './component/CourseDetails'; // Corrected path.

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/CourseDialogues">Course Folders</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CourseDialogues />} />
          <Route path="/CourseDialogues" element={<CourseDialogues />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
