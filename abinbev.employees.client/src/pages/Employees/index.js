import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Api from '../../services/api';

function Employees() {
    const [employees, setEmployees] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        Api.EmployeeApi.getAll().then(response => {
            if (response.success) {
                setEmployees(response.data);
            }
        });
    }, [accessToken]);

    async function deleteEmployee(id) {
        Api.EmployeeApi.delete(id).then(response => {
            if (response.success) {
                setEmployees(employees.filter(x => x.id !== id));
            }
        });
    }

    return (
        <Container>
            <Row>
                <Col><h1>Employees</h1></Col>
                <Col md="auto"><Link className='btn btn-primary' to='/employees/new'>New</Link></Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => {
                                return (<tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td className='text-end'>
                                        <Link className='btn btn-primary me-1' to={{ pathname: `/employees/edit/${employee.id}` }}>Edit</Link>
                                        <Button onClick={() => deleteEmployee(employee.id)}>Delete</Button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Employees;