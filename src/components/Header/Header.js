import React, { Component } from 'react';
import Regis from '../iconMain/iconSetMainForm64_addPatient.png';
import SendP from '../iconMain/iconSetMainForm64_sendPatient.png';
import Nurse from '../iconMain/iconSetMainForm64_nurse-04.png';
import Doc from '../iconMain/iconSetMainForm64_doctor.png';
import Drug from '../iconMain/iconSetMainForm64_drug.png';
import Xray from '../iconMain/iconSetMainForm64_xray-15.png';
import Coin from '../iconMain/iconSetMainForm64_coin.png';
import Manage from '../iconMain/iconSetMainForm64_calendar.png';

class Header extends Component {
    render() {
        return (
            <div> 
             <ul className="h-menu row bg-primary">
                    <li><a className="fg-white"></a></li>&nbsp;&nbsp;
                    
                </ul>
                <nav className="rib" data-role="ribbonmenu">
                    <ul className="tabs-holder">
                        <li className="static bg-primary" ><a href="/home"> HIS </a></li>
                        <li><a href="#section-1-1">Home</a></li>
                        <li><a href="#section-1-2">Master</a></li>
                        <li><a href="#section-1-3">Setting</a></li>
                        <li><a href="#section-1-4">Reports</a></li>
                        
                        <li><a href="/" className="d-menu put-right bg-red fg-white" ><big>Sign out</big></a></li>
                    </ul>

                    <div className="content-holder">
                        <div className="section" id="section-1-1">
                            <div className="group">
                                <a href="/register">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img src={Regis} />
                                        </span>
                                        <span className="caption">ทะเบียนผู้ป่วย</span>
                                    </button>
                                </a>
                                <a href="/sendpatient">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img src={SendP} />
                                        </span>
                                        <span className="caption">ส่งตรวจผู้ป่วย</span>
                                    </button>
                                </a>
                                <span className="title">เวชระเบียน</span>
                            </div>

                            <div className="group">
                                <a href="/examination">
                                    <button className="ribbon-button">
                                        <span className="icon">
                                            <img src={Nurse} />
                                        </span>
                                        <span className="caption">งานหน้าห้องตรวจ</span>
                                    </button>
                                </a>
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Doc} />
                                    </span>
                                    <span className="caption">ห้องตรวจแพทย์</span>
                                </button>

                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Drug} />
                                    </span>
                                    <span className="caption">งานห้องจ่ายยา</span>
                                </button>

                                <span className="title">OPD</span>
                            </div>
                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Xray} />
                                    </span>
                                    <span className="caption">งานหน้าห้อง X-ray</span>
                                </button>

                                <span className="title">X-ray</span>
                            </div>

                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Coin} />
                                    </span>
                                    <span className="caption">งานห้องการเงิน</span>
                                </button>

                                <span className="title">Finance</span>
                            </div>

                            <div className="group">
                                <button className="ribbon-button">
                                    <span className="icon">
                                        <img src={Manage} />
                                    </span>
                                    <span className="caption">Manage Session</span>
                                </button>
                                <span className="title">Appointment</span>
                            </div>
                            <div className="group"></div>
                        </div>
                    </div>
                    <div className="content-holder">
                        <div className="section" id="section-1-2">
                        </div>
                    </div>
                    
                    <div className="content-holder">
                        <div className="section" id="section-1-3">
                        </div>
                    </div>
                    <div className="content-holder">
                        <div className="section" id="section-1-4">
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
