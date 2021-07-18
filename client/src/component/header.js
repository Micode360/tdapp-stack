import { Component } from "react";
import { connect } from "react-redux";
// /import { Link } from "react-router-dom"
import { SignOutUser } from "../dataservices/auth/authAction"

const mapStateToProps = (state) => {
    return {
        logOutSuccessMessage: state.auth.logOutSuccessMessage,
        loadData: state.user.loadData
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
            const { logOutSuccessMessage, loadData } = this.props

            return (
                <div className="header d-flex justify-content-end align-items-center">
                <h4>mctivity</h4>
                {logOutSuccessMessage?window.location.reload(): null}
                <ul className="nav t-navbar d-flex align-items-center">
                    <li className="nav-item">
                        <span className="nav-link pt-0 pb-0">Friends</span>
                    </li>
                    <li className="nav-item profile-pic rounded-circle text-center">
                    { loadData.initials }
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pt-0 pb-0" href="#!">{loadData.load.firstName} {loadData.load.lastName}</a>
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