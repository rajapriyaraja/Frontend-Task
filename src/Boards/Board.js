import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css'; // Add custom styles if needed
import logo from "../Asserts/logo.png"

function Boards() {
  return (
    <div className="container my-4">
      <div className="card custom-card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Boards</h5>
          <button className="btn btn-sm btn-primary">+ New Board</button>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
              <img src={logo} alt="Board Icon" className="me-2" width="30" />
              <span>All Hubs</span>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <img src={logo} alt="Board Icon" className="me-2" width="30" />
              <span>Birmingham - Attendance Record</span>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <img src={logo} alt="Board Icon" className="me-2" width="30" />
              <span>Birmingham - Outcomes Star</span>
            </li>
          </ul>
          <div className="text-end mt-2">
            <a href="#" className="text-primary">Show All</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boards;
