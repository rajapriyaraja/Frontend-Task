import React, { useState, useEffect } from 'react';
import './TimerComponent.css';
import Logo from "../Asserts/Logo.jpg";
import { FaClipboardList } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { FaPlay, FaStop } from "react-icons/fa";

const TimerComponent = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('--:--:--');

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timer]);

    const startTimer = () => {
        setIsRunning(true);
        setStartTime(new Date().toLocaleTimeString());
        setEndTime('--:--:--'); 
    };

    const stopTimer = () => {
        setIsRunning(false);
        setEndTime(new Date().toLocaleTimeString());
    };

    const toggleTimer = () => {
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
            <div className="timer-container-fluid">
                <header className="timer-header container">
                    <div className="logo-container d-flex">
                        <p className='mt-5' style={{ marginLeft: '-5%' }}>Firma</p>
                        <img src={Logo} alt="Logo" className="logo w-75 mt-2" />
                    </div>
                    <div className="dropdown">
                        <FaClipboardList className='fs-1' />
                        <label>Gerätenummer</label>
                        <select className="form-select mx-2  in-color">
                            <option value="123562">1623562</option>
                            <option value="123563">123563</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <MdPersonOutline className='fs-1' />
                        <label>Bediener</label>
                        <select className="form-select mx-2 in-color">
                            <option value="select">Select--</option>
                            <option value="kanthan-kavin">Kanthan Kavin</option>
                            <option value="paramanathan-thamiliny">Paramanathan Thamiliny</option>
                            <option value="kanagaradnam-subesan">Kanagaradnam Subesan</option>
                            <option value="valavan-thikalga">Valavan Thikalga</option>
                            <option value="abdul-hameem-shathik">Abdul Hameem Shathik</option>
                            <option value="thavabalan-nikila">Thavabalan Nikila</option>
                            <option value="varathan-thevi">Varathan Thevi</option>
                            <option value="kandhan-kavin">Kandhan Kavin</option>
                        </select>
                    </div>
                    <button onClick={startTimer} className="start-button" style={{ marginRight: '-1%' }}>START</button>
                </header>
            </div>
            <div className="container w-100 bg-light py-3">
                <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex mx-5 align-items-center">
                        <BiCalendar className='fs-4' />
                        <label className="mb-0 ms-2">Datum</label>
                        <input type="date" className="form-control  in-color ms-2" defaultValue="2024-10-01" style={{ width: "150px" }} />
                    </div>

                    <div className="timer-display">
                        <div className={`timer-circle ${isRunning ? 'running' : 'stopped'}`} onClick={toggleTimer}>
                            <p>{formatTime(timer)}</p>
                            {isRunning ? (
                                <FaStop className="timer-icon stop-icon" />
                            ) : (
                                <FaPlay className="timer-icon play-icon" />
                            )}
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-start" style={{ marginRight: '10%' }}>
                        <div className="d-flex align-items-center justify-content-between mb-3" style={{ width: "300px" }}>
                            <FiClock className='fs-5 icon' />
                            <label className="mx-2" style={{ minWidth: "80px" }}>Angangzeit</label>
                            <input
                                type="text"
                                className="form-control in-color"
                                value={startTime || "--:--:--"}
                                readOnly
                                style={{ width: "120px" }}
                            />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3" style={{ width: "300px" }}>
                            <FiClock className='fs-5 icon' />
                            <label className="mx-2 " style={{ minWidth: "80px" }}>Endzeit</label>
                            <input
                                type="text"
                                className="form-control in-color"
                                value={endTime || "--:--:--"}
                                readOnly
                                style={{ width: "120px" }}
                            />
                        </div>
                        {isRunning && (
                            <button onClick={stopTimer} className="stop-button mt-2">STOP</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerComponent;
