import React from 'react';
import { Col } from 'react-bootstrap';
import './Event.css';

const Event = ({ eventInfo }) => {
    const { img, name } = eventInfo;

    return (
        <Col md={3}>
            <img className="img-fluid image" src={img} alt="" />
            <p className="text">{name}</p>
        </Col>
    );
};

export default Event;