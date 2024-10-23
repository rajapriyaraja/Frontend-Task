import React, { useState } from 'react';
import './MarkeableHomePage.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

function MakeableHomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="makeable-home">
            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="logo">
                    <h2>Makeable</h2>
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>Events</li>
                        <li>Contacts</li>
                        <li>Projects</li>
                        <li>Albums</li>
                        <li>Organizations</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="content">
                <header>
                    <h1>Welcome to Makeable</h1>
                    <p>Manage your events, projects, and tasks efficiently.</p>
                </header>

                {/* Card Section */}
                <section className="cards-container">
                    <div className="card">Event 1</div>
                    <div className="card">Event 2</div>
                    <div className="card">Project 1</div>
                    <div className="card">Project 2</div>
                </section>

                {/* Progress & Tasks Section */}
                <section className="progress-tasks">
                    <div className="progress">
                        <h3>Personal Progress</h3>
                        <div className="progress-bar">
                            <div className="progress-done" style={{ width: "70%" }}>70%</div>
                        </div>
                    </div>
                    <div className="tasks">
                        <h3>Tasks</h3>
                        <ul>
                            <li>Task 1</li>
                            <li>Task 2</li>
                            <li>Task 3</li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Makeable. All rights reserved.</p>
                <div className="social-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </footer>
        </div>
    );
}

export default MakeableHomePage;
