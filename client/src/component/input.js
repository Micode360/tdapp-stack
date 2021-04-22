import { Component } from "react";
import { Form } from "react-bootstrap";
import Output from "./output"
import { v4 as uuidv4 } from 'uuid';
import moment from "moment"
import MyVerticallyCenteredModal from "./modal"
import AlertComponent from "./alert"


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: [],
            modalValue: false,
            valueToUpdate: ''
        };
    }

    myChangeHandler = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') return;
        else {
            this.setState({ value: [...this.state.value, { id: uuidv4(), text: this.state.text, createdAt: moment().format('LT') }] })
            this.setState({ text: '' })
            e.target.reset();
        }
    }

    deleteValue = (id) => {
        const modifyStateContent = this.state.value.filter((item) => {
            return item.id !== id;
        })
        this.setState({ value: modifyStateContent })
    }

    updateValue = (id) => {
        const getValueById = this.state.value.filter((item) => {
            let value;
            if(item.id === id){
                value = item;
            } 
            return value;
            })   
            this.setState({ valueToUpdate: getValueById})
    }


    setUpdateToState = (val) => {
       if(val.value === "") return <AlertComponent message={'success'} style={{"display":"none"}}/>
        else {
            return this.state.value.forEach((item) => {
                if(item.id === val.id){
                item.text = val.value;
                    return true;
                } 
            })
        }
    }



    modalValue = (bool) => {
        this.setState({
            modalValue: bool
        })
    }




    render() {

         
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1" >
                        <Form.Control
                            className="textarea"
                            as="textarea"
                            value={this.state.text}
                            rows={3}
                            onChange={this.myChangeHandler}
                        />
                    </Form.Group>

                    <button className="send">Send</button>
                </Form>

                <Output stateValue={this.state.value} updateValue={this.updateValue} deleteValue={this.deleteValue} modalValue={this.modalValue} />

                <MyVerticallyCenteredModal
                    show={this.state.modalValue}
                    onHide={() => this.setState({ modalValue: false })}
                    valuetoupdate={this.state.valueToUpdate}
                    setupdatetostate={this.setUpdateToState}
                    modalValue={this.modalValue}
                />
            </>
        );
    }
}