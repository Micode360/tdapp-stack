import { Component } from "react"
import Input from "./input"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import jwt_decode from "jwt-decode";




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


  
            // let token = localStorage.getItem('x-access-token');
            // try {
            //   let decoded = jwt_decode(token);
            //   console.log(decoded, "")
            //   let timeLeft = decoded.exp - (Date.now() / 1000);
            //   if (timeLeft <= 0) {
            //     return history.push("/signIn");
            //   }
            // } catch (e) {
            //   return history.push("/signIn");
            // }

 

    render() {
        let tkn = localStorage.getItem('access-tkn');


        if(!tkn) return (<Redirect to="/signIn"/>)

           else{
            let decoded = jwt_decode(tkn);
            console.log(decoded, 'decoded');
               if(decoded.exp - (Date.now() / 1000) <= 0) return (<Redirect to="/signIn"/>)
            return (
                <>
                    <div className="header"><h4>Todo App</h4></div>
                    <div className="App">
                            <div className="Form-and-output-container">
                                 <Input/>
                            </div>
                    </div>
                </>
            );
           }
        }
    }
)


export default Darshboard