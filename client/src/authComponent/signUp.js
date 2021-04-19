import { Component } from "react"
import { Form, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { registerationAction } from "../dataservices/auth/authAction"

const mapStateToprops = (mappedData)  => ({
    ...mappedData
})

const mapDispatchToProps = (state) => {
    return {
        signUp: registerationAction(state)
    }
}


const SignUp = connect(mapStateToprops, mapDispatchToProps)(
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                confirmPassword: ""
            }
        }
    
        handleChange = (event) => {
            event.preventDefault();
            this.setState({ [event.target.name]: event.target.value });
        }
    
        handleSubmit = (event) => {
            event.preventDefault();
            if(this.state.password !== this.state.confirmPassword) console.log('password doesnt match');
            else {
                registerationAction(this.state)
                console.log(registerationAction(this.state) , 'handle submit')
                return true;
            }
           
        }
    
    
        render() {
            
            return (
                <div className="reg-form">
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Row className="form-title"><h2>SignUp</h2></Row>
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
    
                        <Form.Row>
                        <Form.Label>Username</Form.Label>
                                <Form.Control 
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                 />
                        </Form.Row>
    
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
                        <Form.Text className="text-muted"><p>Already Signed up? <Link to="/signIn">SignIn</Link></p></Form.Text>
                    </Form>
                </div>
            )
        }
    }
)



export default SignUp;