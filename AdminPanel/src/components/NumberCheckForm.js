import React from 'react';
import {connect} from 'react-redux';
import {Form, Button, Jumbotron, Alert} from 'react-bootstrap';
import language from "../language.json";
import {checkNumber} from "../function/request";

class NumberCheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '+(380)',
            send: false,
            color: 'light',
            disabled: true,
            error: false,
        }
        this.Send = this.Send.bind(this);
    }

    Send = async (event) => {
        event.preventDefault();
        const request = await checkNumber(this.state.tel);
        if (request.data.status === 200) {
            this.props.addNumberStatus(request.data);
            this.props.checkScreen('DISPLAY_DATA');
        } else {
            this.setState({error: true});
        }
    }

    setAlert = () => {
        if (this.state.error) {
            return (
                <Alert variant={'danger'}
                       className="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-6 offset-md-3
                    col-lg-4 offset-lg-4 col-xl-10 offset-xl-1">
                    Введите корректный номер!
                </Alert>
            )
        }
    }

    componentDidUpdate(prevState) {
        if (!this.state.send) {
            if (this.state.tel.length === 15) {
                this.setState({
                    send: true, disabled: false,
                })
            }
        } else  if (this.state.send) {
            if (this.state.tel.length < 15) {
                this.setState({
                    send: false, disabled: true,
                })
            }
        }
    }

    render() {
        return (
            <Jumbotron fluid style={{backgroundColor: '#ffffff'}} className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                <h6 className="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">{language[this.props.language].checkNumber}</h6>
                <Form>
                    <Form.Group controlId="number" className="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                        <Form.Control type="tel" maxLength="15" placeholder="+(380) ___ __ __" value={this.state.tel} onChange={(e) => {
                            if (e.target.value.length >= 6) {
                                this.setState({tel: e.target.value})
                            }
                        }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" variant={this.state.color}  onClick={this.Send}
                            className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4"
                            onMouseOver={() => {
                        this.setState({color: 'warning'})}} onMouseOut={() => {this.setState({color: 'light'})}} disabled={this.state.disabled} >
                        {language[this.props.language].check}
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
    (dispatch) => ({
        checkScreen: (screen) => {
            dispatch({type: 'CHECK_SCREEN', payload: screen});
        },
        addNumberStatus: (status) => {
            dispatch({type: 'ADD_NUMBER_STATUS', payload: status});
        },
    }),
)(NumberCheckForm);
