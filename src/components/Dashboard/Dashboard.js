import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import AddEvent from './AddEvent/AddEvent';
import VolunteerRegisterList from './VolunteerRegisterList/VolunteerRegisterList';

const Dashboard = () => {

    const [display, setDisplay] = useState(true);

    return (
        <div className="ps-4 py-3">
            <Row>
                <Col className="d-flex">
                    <Col md={2}>
                        <img className="img-fluid" src={logo} alt="" />
                        <div className="mt-4 text-start">
                            <NavLink to="/dashboard/resgister-list" onClick={() => setDisplay(true)} className="pt-2 text-decoration-none">Volunteer register list</NavLink> <br />
                            <NavLink to="/dashboard/resgister-list" onClick={() => setDisplay(false)} className="pt-2 text-decoration-none">Add event</NavLink>
                        </div>
                    </Col >
                    <Col className="px-2 text-start" md={10}>
                        {
                            display ? <VolunteerRegisterList /> : <AddEvent />
                        }
                    </Col>
                </Col>
            </Row >
        </div >
    );
};

export default Dashboard;