import React from 'react';
import {connect} from 'react-redux';
import {Button, Jumbotron} from 'react-bootstrap';

class DataDisplayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Jumbotron fluid style={{backgroundColor: '#ffffff'}}>
            </Jumbotron>
        );
    }
}

export default connect(
    (state) => ({
        language: state.language
    }),
    (dispatch) => ({  }),
)(DataDisplayForm);
