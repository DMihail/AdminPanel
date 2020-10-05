import React from 'react';
import {connect} from 'react-redux';
import {Button, Jumbotron} from 'react-bootstrap';
import language from "../language.json";

class DataDisplayForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron fluid style={{backgroundColor: '#ffffff', borderRadius: '5px'}} className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                <div style={{backgroundColor: '#ECECEC', borderRadius: '5px'}} className="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
                    <p style={{color: 'red'}}>
                        {language[this.props.language].number} {this.props.numberStatus}                     </p>
                </div>
                <Button variant="link" style={{marginLeft: '30px'}} onClick={() => {
                    this.props.checkScreen('AUTH');
                }}>Назад</Button>
                <Button variant="link" style={{marginLeft: '300px'}} onClick={() => {
                    this.props.checkScreen('AUTH');
                }}>Выйти</Button>
            </Jumbotron>
        );
    }
}

export default connect(
    (state) => ({
        numberStatus: state.numberStatus,
        language: state.language
    }),
    (dispatch) => ({
        checkScreen: (screen) => {
            dispatch({type: 'CHECK_SCREEN', payload: screen});
        },
    }),
)(DataDisplayForm);
