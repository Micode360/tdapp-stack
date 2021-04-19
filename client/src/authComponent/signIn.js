import { Component } from "react"
import { Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"



export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
         console.log(this.state);
    }


    render() {

        return (
            <div className="reg-form">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Row className="form-title"><h2>SignIn</h2></Row>

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

                    <button className="send submit">Send</button>
                    <Form.Text className="text-muted"><p>Don't Have an account? <Link to="/signUp">SignUp</Link></p></Form.Text>
                </Form>
            </div>
        )
    }
}