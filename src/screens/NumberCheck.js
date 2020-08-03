import React from 'react';
import {connect} from 'react-redux';
import Language from "../components/Language";
import {Container} from 'react-bootstrap';
import NumberCheckForm from "../components/NumberCheckForm";

class NumberCheck extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const windowHeight = window.innerHeight;
        return (
            <Container fluid style={{backgroundColor: '#CCCCCC', height: `${windowHeight}px`}}>
                <Language />
                <NumberCheckForm />
            </Container>
        );
    }
}

export default connect(
    (state) => ({  }),
    (dispatch) => ({  }),
)(NumberCheck);
