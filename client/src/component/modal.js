import { Component } from "react"
import { Form, Modal } from "react-bootstrap"



export default class MyVerticallyCenteredModal extends Component {
    // console.log(props.valuetoupdate, typeof(props.valuetoupdate));
    constructor(props) {
        super(props);
        this.state = {
            updatedValue: ''
        }
    }


    handleChange = (e) => {
        this.setState({ updatedValue: e.target.value });
    }

    render() {

        const textValue = () => {
            const updateTextValue = Object.entries(this.props.valuetoupdate).map((item) => {
                    return item[1].text;
            })
            return updateTextValue;
        }

        const idValue = () => {
            const updateIdValue = Object.entries(this.props.valuetoupdate).map((item) => {
                    return item[1].id;
            })
            return updateIdValue;
        }



        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Post
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <Form.Control
                                className="textarea update-textarea"
                                as="textarea"
                                rows={3}
                                defaultValue={textValue()[0]}
                                onChange={this.handleChange}
                            />
                        <button className="send" onClick={()=> {
                             this.props.setupdatetostate({id: idValue()[0], value: this.state.updatedValue});
                            this.props.modalValue(false);
                        }}>Update</button>
                </Modal.Body>
            </Modal>
        );
    }
}
