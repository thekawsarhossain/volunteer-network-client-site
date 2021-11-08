import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Events = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then(response => response.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Container className="pt-4">
                <h1 className="text-uppercase">I grow by heliping people in need.</h1>
                <div className="input-group mb-4 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <button className="btn btn-primary" type="button" id="button-addon2">search</button>
                </div>

                {/* sending data using map here  */}
                <Row>
                    {
                        events.map(event => <Event
                            key={event._id}
                            eventInfo={event}
                        ></Event>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Events;