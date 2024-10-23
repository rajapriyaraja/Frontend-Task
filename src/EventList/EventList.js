import React from 'react';
import './EventList.css';
import { FaInfoCircle } from 'react-icons/fa';

const EventsList = () => {
  const events = [
    {
      title: 'Indoor Cricket',
      date: '10:00 21/11/23',
      details: '1 Manager, 2 Workers, 3 Guests',
    },
    {
      title: 'Indoor Cricket',
      date: '10:00 22/11/23',
      details: '1 Manager, 2 Workers, 3 Guests',
    },
    {
      title: 'Indoor Cricket',
      date: '10:00 23/11/23',
      details: '1 Manager, 2 Workers, 3 Guests',
    },
  ];

  return (
    <div className="events-container">
      <h3>Events</h3>
      {events.map((event, index) => (
        <div className="event-item" key={index}>
          <div className="event-title">
            {event.title}
            <FaInfoCircle className="info-icon" />
          </div>
          <div className="event-date">{event.date}</div>
          <div className="event-details">{event.details}</div>
        </div>
      ))}
      <div className="show-all">Show All</div>
    </div>
  );
};

export default EventsList;
