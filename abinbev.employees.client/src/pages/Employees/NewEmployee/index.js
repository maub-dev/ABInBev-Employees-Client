import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

import Api from '../../../services/api';

function NewEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [role, setRole] = useState('0');
    const [managerId, setManagerId] = useState('');
    const [employees, setEmployees] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    useEffect(() => {
        Api.EmployeeApi.getAll().then(response => {
            if (response.success) {
                setEmployees(response.data);
            }
        });
    }, [accessToken]);

    async function createNewEmployee(e) {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            documentNumber,
            phone1,
            phone2,
            password,
            birthDate,
            role,
            managerId
        };

        Api.EmployeeApi.post(data).then(response => {
            if (response.success) {
                navigate('/employees');
            }
        });
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
                        <Form.Group className="mb-3" controlId="employee.BirthDate">
                            <Form.Label>BirthDate</Form.Label>
                            <Form.Control type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Phone1">
                            <Form.Label>Phone 1</Form.Label>
                            <Form.Control type="text" value={phone1} onChange={e => setPhone1(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Phone2">
                            <Form.Label>Phone 2</Form.Label>
                            <Form.Control type="text" value={phone2} onChange={e => setPhone2(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Role">
                            <Form.Label>Role</Form.Label>
                            <Form.Select value={role} onChange={e => setRole(e.target.value)}>
                                <option value="0">Employee</option>
                                <option value="1">Leader</option>
                                <option value="2">Director</option>
                                <option value="3">Admin</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Manager">
                            <Form.Label>Manager</Form.Label>
                            <Form.Select value={managerId} onChange={e => setManagerId(e.target.value)}>
                                <option value={null}></option>
                                {employees.map(x => {
                                    return (<option value={x.id}>{x.firstName} {x.lastName}</option>);
                                })}
                            </Form.Select>
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