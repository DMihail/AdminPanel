import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import language from "../language.json";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            send: false,
            color: 'light',
            disabled: true,
        }
        this.Send = this.Send.bind(this);
    }

    Send = (event) => {
        event.preventDefault();
    }

    componentDidUpdate(prevState) {
        if (!this.state.send) {
            if (this.state.login.length > 3 && this.state.password.length > 6) {
                this.setState({
                    send: true, disabled: false,
                })
            }
        } else  if (this.state.send) {
            if (this.state.login.length < 3 && this.state.password.length < 6) {
                this.setState({
                    send: false, disabled: true,
                })
            }
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="login">
                    <Form.Control type="text" placeholder={language[this.props.language].login} value={this.state.login} onChange={(e) => {
                        this.setState({login: e.target.value})
                    }}/>
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Control type="password" placeholder={language[this.props.language].password} value={this.state.password} onChange={(e) => {
                        this.setState({password: e.target.value})
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit" variant={this.state.color}  onClick={this.Send} onMouseOver={() => {
                    this.setState({color: 'warning'})}} onMouseOut={() => {this.setState({color: 'light'})}} disabled={this.state.disabled}>
                    {language[this.props.language].next}
                </Button>
            </Form>
        );
    }
}

export default connect(
    (state) => ({
        language: state.language
    }),
    (dispatch) => ({  }),
)(Authorization);
