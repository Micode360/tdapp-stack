import { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import jwt_decode from "jwt-decode";
import HeaderContainer from "./header";
import axios from "axios"



const mapStateToProps = (reducerState) => {
    return {
        signInSuccessPayload: reducerState.auth.signInSuccessPayload,
    }
}

const mapDispatchToProps = () => {
    return {}
}

const Darshboard = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                load: []
            };
        }


        componentDidMount() {
            let onloadTkn = localStorage.getItem('access-tkn');
            if (!onloadTkn) return;
            else {
                let decode = jwt_decode(onloadTkn);
                axios.get(`/users/${decode.user.id}`)
                    .then((user) => {
                        this.setState({ load: user.data })
                    }).catch(err => {
                        return err
                    })
            }
        }

        render() {
            let tkn = localStorage.getItem('access-tkn');


            if (!tkn) return (<Redirect to="/signIn" />)

            else {
                let decoded = jwt_decode(tkn);
                if (decoded.exp - (Date.now() / 1000) <= 0) return (<Redirect to="/signIn" />)
                return (
                    <>
                        <HeaderContainer user={this.state.load} />

                        <div className="App">
                            <div className="main">
                                <div className="title-header">
                                    <p className="d-flex align-items-center">Hello <span className="username">{this.state.load.firstName} {this.state.load.lastName}</span></p>
                                    <p className="title-header-quote">Welcome back. What do you want to do today?</p>
                                </div>


                                <div className="t-card-container">
                                    <h2>Your Activities</h2>

                                    <div className="t-card-map">

                                        <div className="t-card">
                                            <h2>
                                                Take Sean to the park
                                                    </h2>
                                            <span className="t-time">15th September 2021</span>
                                            <p className="t-card-description">Sean an i have a get together, we are looking forward to see...</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <aside>
                                <div className="t-notification-header">
                                    <h5>Notifications</h5>
                                </div>
                                <div className="notifications">
                                    <div className="notify-case">
                                        Sean wants to talk to you sooner than later.
                                                </div>
                                </div>
                            </aside>
                        </div>
                    </>
                );
            }
        }
    }
)


export default Darshboard