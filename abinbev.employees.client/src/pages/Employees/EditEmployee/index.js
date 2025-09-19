import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import api from '../../../services/api';

function EditEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const accessToken = localStorage.getItem('accessToken');

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
            phonebook: [
                {
                    type: 0,
                    phone: "string"
                },
                {
                    type: 1,
                    phone: "string"
                }
            ],
            birthDate
        };

        try {

            const accessToken = localStorage.getItem('accessToken');

            await api.put('employee', data,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

            navigate('/employees');

        } catch (error) {
            alert(error.response.data);
        }
    }

    async function loadEmployee() {
        try {
            var response = await api.get(`employee?id=${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setDocumentNumber(response.data.documentNumber);
            setBirthDate(response.data.birthDate);
            setEmail(response.data.email);

        } catch (error) {
            alert(error);
        }
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
                            <Form.Label>BirthDate</Form.Label>
                            <Form.Control type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control disabled type="email" value={email} />
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