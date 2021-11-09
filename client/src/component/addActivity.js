import { Component } from "react"
import { Form, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import { postActivity } from "../dataservices/user/userAction"
import profilepic from "../img/my_image.jpg"
import Upload from "./upload"


const mapStateToProps = (state) => {
    return {
        post: state.user.postSuccessData,
        error: state.user.postErrorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    postActivity: (state) => dispatch(postActivity(state))
}
}



const AddActivity = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                body: '',
                value: [],
                uploadImage: '',
                modalValue: false,
                valueToUpdate: ''
            };
        }
    
        myChangeHandler = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        }
    
        handleSubmit = (e) => {
            e.preventDefault();
            // const [body] = e.target.elements
            //console.log(body.value, 'body');
            if (this.state.title === '') return;
            else {
                // this.setState({ value: [...this.state.value, { title: this.state.title, body: this.state.body }] })
                // this.setState({ title: '', body: '' })
                this.props.postActivity({ body: this.state.body })
                this.setState({ body: '' })
                e.target.reset();
            }
        }
    
        render() {
    
    
            return (
                <Modal
                    show={true}
                    onHide={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Task
                         </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="body-modal">
                    <div 
                        className="modal-profile"
                    >
                        <span 
                            className="modal-profile-image"
                            style={{
                                backgroundImage: `url(${profilepic})`
                            }}
                        ></span>
                        <div className="modal-profile-info">
                            <h5>Miracle Hesed</h5>
                        </div>
                    </div>
                    <Form onSubmit={this.handleSubmit}>    
                                <Form.Control
                                    className="textarea update-textarea"
                                    as="textarea"
                                    name="body"
                                    value={this.state.body}
                                    onChange={this.myChangeHandler}
                                    placeholder="Add task"
                                    rows={3}
                                />
                                <div className="selected-img">
                                    {this.state.uploadImage === ''?
                                    ''
                                    :<img src={this.state.uploadImage} alt="img"/>
                                    }
                                </div>
                                <div className="task-button-options">
                                    <div className="mod-options">
                                        
                                        <span className="mod-blck"><Upload imgSrc={this.state.uploadImage}/></span>
                                        <span className="mod-blck"><i className="fas fa-map-marker-alt"></i></span>
                                        <span className="mod-blck"><i className="fas fa-video"></i></span>
                                    </div>
                                    <button className="add-task"><i className="fas fa-tasks"></i> Add Task</button>
                                </div>
                            </Form>
                    </Modal.Body>
                </Modal>
            );
        }
    }
    
)



export default AddActivity;