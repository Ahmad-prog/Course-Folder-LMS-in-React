import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './CourseDetails.css'; // Import the CSS file

const CourseDetails = () => {
  const course = {
    name: "BIG Data",
    code: "COMP101",
    description: "This course introduces core computer science concepts: algorithms, data structures, and programming. Students learn how computers process and store data, developing problem-solving skills. Through theory and practice, they gain proficiency in logical thinking and algorithm design. Upon completion, students are equipped for careers in technology and software development..",
    clos: [
      "CLO: 1. Understand basic concepts of BIG Data, application in understanding behavior of data.",
      "CLO: 2. Apply basic tools for performing exploratory data analysis and visualization.",
      "CLO: 3. Understand basic predictive modeling and data analysis methods",
      "CLO: 4. Learn Python for performing different data science steps"
    ],
    resources: {
      books: [
        {
          title: "Book 1",
          url: "https://www.example.com/book1"
        }
      ],
      slides: [
        {
          title: "Slide 1",
          url: "https://www.example.com/slide1"
        }
      ]
    }
  };

  const [urlList, setUrlList] = useState(course.resources.books.concat(course.resources.slides));

  const handleAddUrlClick = (type, index) => {
    const urlInput = prompt("Enter the URL:");
    if (urlInput) {
      setUrlList(prevUrlList => {
        const newUrlList = [...prevUrlList];
        newUrlList[type][index].url = urlInput;
        return newUrlList;
      });
    }
  };

const XLSX = require('xlsx');
const js = Array.from(course);
function handlePrintClick() {
if (Array.isArray(js)) {
  js.forEach((item, index) => {
    const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([
    ['Course Name', 'Code', 'Description', 'CLOs', 'Resources', 'Course Offering History'],
    ['Assignment Number', 'Good', 'Bad', 'Worst', 'File'],
    ['Quiz Number', 'Student Name', 'Score', 'File'],
  ]);
  XLSX.utils.sheet_add_json(ws, course, { origin: 'A2' });
  XLSX.utils.sheet_add_json(ws, course.resources.books, { origin: 'A3' });
  XLSX.utils.sheet_add_json(ws, course.resources.slides, { origin: 'A4' });
  XLSX.utils.sheet_add_json(ws, course.clos, { origin: 'A5' });
  XLSX.utils.sheet_add_json(ws, course.offers, { origin: 'A6' });
  XLSX.writeFile(wb, 'course.xlsx');
  });
} else {
  console.log('js is not an array');
}
}
  return (
    <div className="course-details-container">
      <div className="course-details-row">
        <div className="course-details">
          <h3 className="course-details-title">{course.name}<span className="golden-line"></span></h3>
          <p className="course-details-code">Code: {course.code}</p>
          <p>{course.description}</p>
          <h4 className="Learning-Objectives">Learning Objectives:</h4>
          <ul className="clos-list">
            {course.clos.map((clos, index) => (
              <li key={index}>{clos}</li>
            ))}
          </ul>
          <h4 style={{ textAlign: 'left' }}>Recommended Resources:</h4>
          <div className="required-resources">
            <ul>
              {course.resources.books.map((book, index) => (
                <li key={index} style={{ textAlign: 'left' }} onClick={() => handleAddUrlClick('books', index)}>
                  <span style={{ fontWeight: 'bold' }}>{book.title}</span> | <span style={{ fontWeight: 'bold', color: 'red' }}><a href="https://books.google.com.pk/books/about/Big_Data.html?id=uy4lh-WEhhIC&redir_esc=y">Big Data: A Revolution That Will Transform</a></span>
                  <button className="add-url-btn">+</button>
                </li>
              ))}
            </ul>
            <ul>
              {course.resources.slides.map((slide, index) => (
                <li key={index} style={{ textAlign: 'left' }} onClick={() => handleAddUrlClick('slides', index)}>
                  <span style={{ fontWeight: 'bold' }}>{slide.title}</span> | <span style={{ fontWeight: 'bold', color: 'red' }}><a href={slide.url}>Data Science and Big Data Analytics</a></span>
                  <button className="add-url-btn">+</button>
                </li>
              ))}
            </ul>
          </div>
          <h4 style={{ textAlign: 'left' }}>Assessment Record:</h4>
<table>
  <thead>
    <tr>
      <th colSpan="4">Assignments</th>
    </tr>
    <tr>
      <th>Assignment Number</th>
      <th>Good</th>
      <th>Bad</th>
      <th>Worst</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <td>1</td>
  <td><a href="file:///D:/FYP%20-%20Scope%20Document.pdf" target="_blank">View File</a><button class="add-url-btn2" onclick="handleAddUrlClick('1')">+</button></td>
  <td><a href="C:\Users\YourName\Documents\bad1.pdf" target="_blank">View File</a><button class="add-url-btn2" onclick="handleAddUrlClick('2')">+</button></td>
  <td><a href="C:\Users\YourName\Documents\worst1.pdf" target="_blank">View File</a><button class="add-url-btn2" onclick="handleAddUrlClick('3')">+</button></td>
</tr>
    <tr>
      <td>2</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>

    <tr>
      <td>3</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>

    <tr>
      <td>4</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>
  </tbody>
</table>
<h4 style={{ textAlign: 'left' }}>Quiz Record:</h4>
<table>
  <thead>
    <tr>
      <th colSpan="4">Quiz</th>
    </tr>
    <tr>
      <th>Quiz Number</th>
      <th>Good</th>
      <th>Bad</th>
      <th>Worst</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><a href="C:\Users\YourName\Documents\good1.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad1.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\worst1.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>
    <tr>
      <td>3</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>
    <tr>
      <td>4</td>
      <td><a href="C:\Users\YourName\Documents\good2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>
      <td><a href="C:\Users\YourName\Documents\bad2.pdf" target="_blank">View File</a><button class="add-url-btn2">+</button></td>

    </tr>
  </tbody>
</table>
<div style={{marginRight: '10px', color: 'white'}}>
  This is a red div with a 10px right margin.
</div>
          <Link to="/">
            <button className="course-details-btn">Back</button>
          </Link>
          <button className="print-btn" onClick={handlePrintClick}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;