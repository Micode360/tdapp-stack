import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { SignOutUser } from "../dataservices/user/userAction"
import { LOGOUT_SUCCESS } from "../dataservices/types"

const mapStateToProps = (state) => {
    return {
        logOutSuccessMessage: state.user.logOutSuccessMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignOutUser: (action) => dispatch(SignOutUser(action))
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component  {

        logOut = () => {
            return this.props.SignOutUser(LOGOUT_SUCCESS)
        }
        render() {
            const { logOutSuccessMessage } = this.props

            return (
                <div className="header d-flex justify-content-end align-items-center">
                <h4>mctivity</h4>
                {logOutSuccessMessage?<Redirect to="/signIn"/>: null}
                <ul className="nav t-navbar d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link pt-0 pb-0" href="#!">Wet</a>
                    </li>
                    <li className="nav-item profile-pic rounded-circle text-center">
                        MS
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pt-0 pb-0" href="#!">Mathew Speed</a>
                        <div className="profile-options">
                            <span onClick={this.logOut}>Log Out</span>
                        </div>
                    </li>
                </ul>
    
            </div>
            )
        }
    }
)


export default HeaderContainer