import { Component } from "react"
import { Form, Col, Row } from "react-bootstrap"
import { storeData } from "../dataservices/auth/registerAction"




export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            add: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword) console.log('password doesnt match');
        else storeData('REGISTER_SUCCESS',this.state)
    }


    render() {
        console.log(this.state.add);
        return (
            <div className="reg-form">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Row className="form-title"><h2>Register</h2></Row>
                    <Form.Row className="mb-3">
                        <Col>
                        <Form.Label>First Name</Form.Label>
                            <Form.Control 
                            placeholder="First name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                             />
                        </Col>
                        <Col>
                        <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                            placeholder="Last name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                             />
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}

                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}

                        />
                    </Form.Group>

                    <button className="send submit">Send</button>
                </Form>
            </div>
        )
    }
}