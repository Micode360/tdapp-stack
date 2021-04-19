import { Component } from "react"
import Input from "./input"
import { Redirect } from "react-router-dom"


export default class Darshboard extends Component {
    render() {
        const login = false;
        if(login){
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
        }else{
            return (
                <Redirect to="/signUp"/>
        );
        }
    }
}