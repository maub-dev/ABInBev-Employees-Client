import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Api from '../../../services/api';

function EditEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');

    useEffect(() => {
        loadEmployee();
    }, id);

    async function editEmployee(e) {
        e.preventDefault();

        const data = {
            id,
            firstName,
            lastName,
            email,
            documentNumber,
            phone1,
            phone2,
            birthDate
        };

        Api.EmployeeApi.put(data).then(response => {
            if (response.success) {
                navigate('/employees');
            }
        });
    }

    async function loadEmployee() {
        Api.EmployeeApi.get(id).then(response => {
            if (response.success) {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setDocumentNumber(response.data.documentNumber);
                setBirthDate(response.data.birthDate);
                setEmail(response.data.email);
                setPhone1(response.data.phone1);
                setPhone2(response.data.phone2);
            }
        });
    }

    return (
        <Container>
            <Row>
                <Col><h1>Edit Employee</h1></Col>
                <Col md="auto"><Link className='btn btn-primary' to='/employees'>Return</Link></Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={editEmployee}>
                        <Form.Group className="mb-3" controlId="employee.FirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.LastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.DocumentNumber">
                            <Form.Label>Document Number</Form.Label>
                            <Form.Control type="text" value={documentNumber} onChange={e => setDocumentNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.BirthDate">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control disabled type="email" value={email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Phone1">
                            <Form.Label>Phone 1</Form.Label>
                            <Form.Control type="text" value={phone1} onChange={e => setPhone1(e.target.value)} />
                        </Form.Group><Form.Group className="mb-3" controlId="employee.Phone2">
                            <Form.Label>Phone 2</Form.Label>
                            <Form.Control type="text" value={phone2} onChange={e => setPhone2(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default EditEmployee;