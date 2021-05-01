import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { SignOutUser } from "../dataservices/auth/authAction"

const mapStateToProps = (state) => {
    return {
        logOutSuccessMessage: state.auth.logOutSuccessMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignOutUser: () => dispatch(SignOutUser())
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component  {


        render() {
            const { logOutSuccessMessage, user } = this.props
            
            return (
                <div className="header d-flex justify-content-end align-items-center">
                <h4>mctivity</h4>
                {logOutSuccessMessage?window.location.reload(): null}
                <ul className="nav t-navbar d-flex align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link pt-0 pb-0" to='/add_activity'>input</Link>
                    </li>
                    <li className="nav-item profile-pic rounded-circle text-center">
                    {/*user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()*/}
                    JS
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pt-0 pb-0" href="#!">{user.firstName} {user.lastName}</a>
                        <div className="profile-options">
                            <span onClick={()=>{
                                    return this.props.SignOutUser()
                            }}>Log Out</span>
                        </div>
                    </li>
                </ul>
    
            </div>
            )
        }
    }
)


export default HeaderContainer