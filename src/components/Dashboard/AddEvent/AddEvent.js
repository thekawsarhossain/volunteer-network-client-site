import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const AddEvent = () => {
    return (
        <div className="ps-4 py-3">
            <h5 className="p-1">Add Event</h5>
            <Row className="bg-light p-4 pe-5">
                <Col md={12} className="bg-white rounded-3">
                    <Table className="my-3">
                        <thead className=" border-0 bg-light rounded rounded-3">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registration date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <h2>this is add event</h2>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div >
    );
};

export default AddEvent;