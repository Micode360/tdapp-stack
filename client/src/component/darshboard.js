import { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import jwt_decode from "jwt-decode"
import HeaderContainer from "./header"
import { loadData } from "../dataservices/user/userAction"
import  AddActivity  from "./addActivity"
import axios from "axios"



const mapStateToProps = (state) => {
    return {
        signInSuccessPayload: state.auth.signInSuccessPayload,
        loadData: state.user.loadData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (data) => dispatch(loadData(data))
    }
}

const Darshboard = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                load: [],
                initials: ''
            };
        }


        componentDidMount() {
            let onloadTkn = localStorage.getItem('access-tkn');
            if (!onloadTkn) return;
            else {
                let decode = jwt_decode(onloadTkn);
                axios.get(`/user/${decode.user.id}`)
                    .then((user) => {
                        let firstName = user.data.firstName.charAt(0).toUpperCase();
                        let lastName = user.data.lastName.charAt(0).toUpperCase();
                        this.props.loadData({ load: user.data, initials: `${firstName}${lastName}` })
                        this.setState({ load: user.data, initials: `${firstName}${lastName}` })
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
                        <HeaderContainer/>

                        <div className="App">
                            <div className="main">
                                <div className="title-header">
                                    <p className="d-flex align-items-center">Hey <span className="username">{this.state.load.firstName} {this.state.load.lastName}</span>, it's</p>
                                    <p className="title-header-quote">Thursday <sup>10:14pm</sup></p>
                                    <p className="date">17th March, 2021</p>
                                </div>

                                <div className="t-card-container">
                                        <div className="quote">
                                            <p>Add Task</p>
                                            <i class="far fa-circle"></i>
                                        </div>
                                </div>
                            </div>

                            <aside>
                                <div className="quote-output">
                                    <div>
                                        <input className="checked" type="checkbox" name="check" id="check" />
                                    </div>
                                    <div className="quote-output-text">
                                        <p>Go for a walk with <span className="name">peter shawmaker</span></p>
                                        <span className="quote-output-date">20th Tuesday 10:21am</span>
                                    </div>
                                    <span className="box-opt">
                                          <i class="fas fa-square"></i>
                                          <i class="fas fa-square"></i>
                                          <i class="fas fa-square"></i>
                                    </span>
                                </div>
                                
                            </aside>
                        </div>
                        <AddActivity/>
                    </>
                );
            }
        }
    }
)


export default Darshboard