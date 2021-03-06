import React from 'react';
import {connect} from 'react-redux';
import {Form, Button, Jumbotron} from 'react-bootstrap';
import language from "../language.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

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
            <Jumbotron fluid style={{backgroundColor: '#ffffff'}} className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                <FontAwesomeIcon icon={faUserCircle} size='10x' color='orange' className=" col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4"/>
                <h1 className="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">{language[this.props.language].comeIn}</h1>
            <Form>
                <Form.Group controlId="login" className="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                    <Form.Control type="text" placeholder={language[this.props.language].login} value={this.state.login} onChange={(e) => {
                        this.setState({login: e.target.value})
                    }}/>
                </Form.Group>

                <Form.Group controlId="Password" className="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                    <Form.Control type="password" placeholder={language[this.props.language].password} value={this.state.password} onChange={(e) => {
                        this.setState({password: e.target.value})
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit" variant={this.state.color}  onClick={this.Send} onMouseOver={() => {
                    this.setState({color: 'warning'})}} onMouseOut={() => {this.setState({color: 'light'})}} disabled={this.state.disabled}
                        className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4 ">
                    {language[this.props.language].next}
                </Button>
            </Form>
            </Jumbotron>
        );
    }
}

export default connect(
    (state) => ({
        language: state.language
    }),
    (dispatch) => ({  }),
)(Authorization);
