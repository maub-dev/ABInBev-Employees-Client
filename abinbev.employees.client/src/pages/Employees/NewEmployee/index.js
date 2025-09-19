import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

function NewEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [password, setPassword] = useState('');

    async function createNewEmployee(e) {
        e.preventDefault();

        const data = {
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
            password,
            birthDate: "2000-09-19"
        };

        try {

            const accessToken = localStorage.getItem('accessToken');

            await api.post('employee', data,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h1>Add Employee</h1></Col>
                <Col md="auto"><Link className='btn btn-primary' to='/employees'>Return</Link></Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={createNewEmployee}>
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
                        <Form.Group className="mb-3" controlId="employee.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
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

export default NewEmployee;