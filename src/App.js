import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.js/Footer';
import DashboardSection from './Section/Section';
import EventsList from './EventList/EventList';
import PostCard from './PostCard.js/PostCard';
import Dashboard from './Dashboard.js/Dashboard';
import Boards from './Boards/Board';
import ButtonGrid from './User_Dashboard/UserDashboard';



function App() {
  const samplePost = {
    avatar: 'https://via.placeholder.com/50',
    name: 'Yoel Adamson-Brown',
    firstPosted: '12:30',
    firstPostedDate: '11th Dec 2023',
    lastEdited: '15:29',
    lastEditedDate: '11th Dec 2023',
    content: 'New update by Yoel Adamson-Brown working on the Living football...',
    likes: 10,
    comments: 5,
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <CustomNavbar />
              <Footer />



            {/* <ButtonGrid/> */}
            {/* <Boards/> */}
           {/* < DashboardSection /> */}
            {/* <EventsList/>
            <PostCard post={samplePost} />
            < Dashboard/>
            <Footer /> */}
            </>
          }/>


          {/* <Route path="/footer" element={<Footer />} /> */}
          {/* <Route path="/" element={<CustomNavbar />} /> */}
          <Route path="/section" element={
            <>
            {/* <CustomNavbar/> */}
             {/* <DashboardSection /> */}
            </>
           } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
