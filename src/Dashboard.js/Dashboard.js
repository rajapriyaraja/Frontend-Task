import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const boards = [
    { id: 1, name: 'All Hubs' },
    { id: 2, name: 'Birmingham - Attendance Record' },
    { id: 3, name: 'Birmingham - Outcomes Star' },
  ];

  const progressItems = [
    { id: 1, text: 'I feel very lonely', score: 1, color: '#63c76a' },
    { id: 2, text: 'I get stomach-aches/cramps', score: 1, color: '#63c76a' },
    { id: 3, text: 'I have horrible dreams', score: 1, color: '#63c76a' },
    { id: 4, text: 'I have lots of energy', score: 1, color: '#63c76a' },
    { id: 5, text: 'I like going out', score: 9, color: '#f44336' },
    { id: 6, text: 'I like talking to my friends and family', score: 3, color: '#63c76a' },
  ];

  return (
    <div className="dashboard">
      <div className="boards-section">
        <h3>Boards</h3>
        <button className="new-board-btn">+ New Board</button>
        <ul className="boards-list">
          {boards.map((board) => (
            <li key={board.id} className="board-item">
              <img src="https://via.placeholder.com/40" alt="board icon" className="board-icon" />
              <span>{board.name}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      
      <div className="progress-section">
        <h3>Personal Progress <a href="#" className="go-to-board">Go to board</a></h3>
        <ul className="progress-list">
          {progressItems.map((item) => (
            <li key={item.id} className="progress-item">
              <div className="progress-circle" style={{ backgroundColor: item.color }}>{item.score}</div>
              <span className="progress-text">{item.text}</span>
              <div className="progress-bar-wrapper">
                <div
                  className="progress-bar"
                  style={{ width: `${item.score * 10}%`, backgroundColor: item.color }}
                ></div>
              </div>
              <button className="progress-menu">•••</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
