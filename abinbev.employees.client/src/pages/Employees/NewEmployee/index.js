import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewEmployee() {
    return (
        <Container>
            <Row>
                <Col><h1>Add Employee</h1></Col>
                <Col md="auto"><Button>Return</Button></Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="employee.FirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.LastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.DocumentNumber">
                            <Form.Label>Document Number</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="employee.Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
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