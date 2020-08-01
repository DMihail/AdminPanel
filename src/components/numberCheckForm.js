import React from 'react';
import {connect} from 'react-redux';
import {Form, Button, Jumbotron} from 'react-bootstrap';
import language from "../language.json";

class NumberCheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '+(380)',
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
            <Jumbotron fluid>
                <Form>
                    <Form.Group controlId="number">
                        <Form.Control type="tel" maxLength="15" placeholder="+(380) ___ __ __" value={this.state.tel} onChange={(e) => {
                            if (e.target.value.length >= 6) {
                                this.setState({tel: e.target.value})
                            }
                        }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" variant={this.state.color}  onClick={this.Send} onMouseOver={() => {
                        this.setState({color: 'warning'})}} onMouseOut={() => {this.setState({color: 'light'})}} disabled={this.state.disabled}>
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
    (dispatch) => ({  }),
)(NumberCheckForm);
