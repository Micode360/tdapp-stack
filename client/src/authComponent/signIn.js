import { Component } from "react"
import { Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signInAction } from "../dataservices/auth/authAction"


const mapStateToProps = (state) => {
        return {
            signInErrorMessage: state.auth.signInErrorMessage 
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInAction: (state) => dispatch(signInAction(state))
    }
}


const SignIn = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signInAction(this.state)
    }


    render() {
        const { signInErrorMessage } = this.props
        return (
            <div className="reg-form">
                {<div>{ signInErrorMessage?<Row className="message">{ signInErrorMessage }</Row>:null}</div> }

                <Form className="form" onSubmit={this.handleSubmit}>
                    <Row className="form-title"><h2>SignIn</h2></Row>

                    <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                                <Form.Control 
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
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
)


export default SignIn