import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDialogues.css'; // Import the CSS file

const CourseDialogues = () => {
  return (
    <div className="dialog-container">
      <div className="dialog-row">
        <div className="dialog">
          <h3 className="dialog-title">Big data<span className="golden-line"></span></h3>
          <p>
            Big data is a broad term for data sets so large or complex that traditional data processing software is inadequate.
          </p>
          <Link to="/CourseDetails">
            <button className="dialog-btn">Course Details</button>
          </Link>
        </div>
        <div className="dialog">
          <h3 className="dialog-title">Theory of Automata<span className="golden-line"></span></h3>
          <p>
            Theory of automata is a branch of theoretical computer science that deals with formal models of computation and their properties.
          </p>
          <Link to="/CourseDetails">
            <button className="dialog-btn">Course Details</button>
          </Link>
        </div>
      </div>
      <div className="dialog-row">
        <div className="dialog">
          <h3 className="dialog-title">Intro To AI<span className="golden-line"></span></h3>
          <p>
            Introduction to Artificial Intelligence is a course that covers the fundamentals of AI, including planning, and learning.
          </p>
          <Link to="/CourseDetails">
            <button className="dialog-btn">Course Details</button>
          </Link>
        </div>
        <div className="dialog">
          <h3 className="dialog-title">Software Engineering<span className="golden-line"></span></h3>
          <p>
            Software engineering is the application of engineering principles to the development of software.
          </p>
          <Link to="/CourseDetails">
            <button className="dialog-btn">Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDialogues;