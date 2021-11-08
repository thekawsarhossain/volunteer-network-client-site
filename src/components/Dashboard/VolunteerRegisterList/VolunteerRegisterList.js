import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const VolunteerRegisterList = () => {
    return (
        <div className="ps-4 py-3">
            <h5 className="p-1">Volunteer register list</h5>
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
                            {/* table data will be here  */}
                            <h2>This is Volunteer register list</h2>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default VolunteerRegisterList;