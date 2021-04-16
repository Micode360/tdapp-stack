import { Component } from "react"
import { Alert } from "react-bootstrap";

export default class AlertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'success',
            style: null
        }
    }


    alertFunction = (message, style) => {
        this.setState({style:{"display":"none"}})
    }



    render() {
        /*
          'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
        */

        //style={{"display":"none"}}
        return (
            <>
                {

                    [
                        this.props.message
                    ].map((variant, idx) => (
                        <Alert classID="alert-box" style={this.props.style} key={idx} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))

                }

            </>
        );
    }
} 