import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Section.css';
import logo from "../Asserts/logo.png"
import logo1 from "../Asserts/logo1.png"
import logo3 from "../Asserts/logo3.png"
import logo5 from "../Asserts/logo5.png"
import logo4 from "../Asserts/logo4.png"
import logo2 from "../Asserts/logo2.png"
import pic1 from "../Asserts/pic1.jpg"
import pic2 from "../Asserts/pic2.jpg"
import pic3 from "../Asserts/pic3.jpg"
import pic4 from "../Asserts/pics4.jpg"
import pic5 from "../Asserts/pic5.jpg"
import pic6 from "../Asserts/pic6.jpg"

function Dashboard() {
  return (
    <div className=''>
    <div className="container-fluid my-4">
      <div className="d-flex col-12">
        {/* {/ Contacts Section /} */}
        <div className="col-md-4 "  style={{ width: '450px', }}>

          <div className="card custom-card mb-4 me-5">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>15 Contacts</span>
                <i className="fas fa-filter me-2"></i>
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-sm btn-primary me-2">+ New Contact</button>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                <img src={logo} alt="Logo" className=' fs-5' rounded />
                  henry
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo} alt="Logo"  className='fs-5' rounded />
                  siyamadit
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo} alt="Logo"className=''rounded />
                  Claire
                </li>
              </ul>
              <div className="text-end mt-2">
                <a href="#" className="text-primary">Show All</a>
              </div>
            </div>
          </div>
        </div>

        {/* {/ Projects Section /} */}
        <div className="col-4 "  style={{ width: '400px' }}>
          <div className="card custom-card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>Projects</span>
              </div>
              <button className="btn btn-sm btn-primary">+ New Project</button>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <img src={logo1} className="fas fa-clipboard-list me-2"/>
                  4359 test
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo1} className="fas fa-clipboard-list me-2"/>
                  a test 5146
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo1} className="fas fa-clipboard-list me-2"/>
                  A Training Project
                </li>
              </ul>
              <div className="text-end mt-2">
                <a href="#" className="text-primary">Show All</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 "  style={{ width: '500px' }}>
          <div className="card custom-card mb-4 mx-5">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>Albums</span>
              </div>
              <button className="btn btn-sm btn-primary">+ New Album</button>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                <img src={logo} alt="Logo" className=' fs-5 me-2' rounded />
                  2021 Portfolio
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo} alt="Logo" className=' fs-5 me-2' rounded />
                  All Partners
                </li>
                <li className="list-group-item d-flex align-items-center">
                <img src={logo3} alt="Logo" className=' fs-5 me-2' rounded />
                  Big Lottery Fund
                </li>
              </ul>
              <div className="text-end mt-2">
                <a href="#" className="text-primary">Show All</a>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* {/ Albums Section /} */}
        <div className='d-flex col-12'>

      
      

      {/* People You Follow Section */}
      <div className="col-4 card custom-card mt-4" style={{ width: '400px', height:'250px' }}>
        <div className="card-header">
          <h5>People You Follow</h5>
        </div>
        <div className="card-body">
          <div className="d-flex mt-3">
          <img src={pic1} alt="Follower" className="rounded-circle me-2" width="60" />
            <img src={pic2} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic3} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic4} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic5} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic6} alt="Follower" className="rounded-circle me-2" width="50" />
          </div>
          <div className="text-end mt-5">
            <a href="#" className="text-primary">Show All</a>
          </div>
        </div>
      </div>

      <div className="col-4 my-4 mx-5"  style={{ width: '400px' }}>
      {/* Organizations Section */}
      <div className="card custom-card mb-4">
        <div className="card-header">
          <h5>Organizations</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src={logo5} alt="Org Logo" className="me-2" width="30" />
                <span>An Organisation Demo</span>
                <div className='ms-4'>
                <span className='ms-3'>Admin</span>
                </div>
              </div>
              
             
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src={logo4} alt="Org Logo" className="me-2" width="30" />
                <span>A Showcase International Development </span>
                <div className='ms-4'>
                <span className='ms-3'>Education Charity Member</span>
                </div>
              </div>
              
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img src={logo2} alt="Org Logo" className="me-2" width="30" />
                <span>Oak Tree Secondary School</span>
                <div className='ms-4'>
                <span className='ms-3'>Admin</span>
                </div>
              </div>
              
            
            </li>
          </ul>
          <div className="text-end mt-2">
            <a href="#" className="text-primary">Show All</a>
          </div>
        </div>
      </div>
      </div>

      <div className="col-4 card custom-card mt-4 mx-2" style={{ width: '400px', height:'250px' }}>
        <div className="card-header">
          <h5>Followers</h5>
        </div>
        <div className="card-body">
          <div className="d-flex mt-3">
            <img src={logo} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={logo} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic1} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic2} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic3} alt="Follower" className="rounded-circle me-2" width="50" />
            <img src={pic4} alt="Follower" className="rounded-circle me-2" width="50" />
          </div>
          <div className="text-end mt-5">
            <a href="#" className="text-primary">Show All</a>
          </div>
        </div>
      </div>

      </div>

      </div>

      {/* Followers Section */}
      <div className='d-flex col-12'>
      
    </div>
    </div>
  );
}

export default Dashboard;
