import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Employees() {
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
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <Link className='btn btn-primary' to='/employees/edit'>Edit</Link>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <Link className='btn btn-primary' to='/employees/edit'>Edit</Link>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>
                                    <Link className='btn btn-primary' to='/employees/edit'>Edit</Link>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Employees;