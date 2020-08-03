import React from 'react';
import {connect} from 'react-redux';
import Language from "../components/language";
import AuthorizationFrom from "../components/authorization";
import {Container} from 'react-bootstrap';

class Authorization extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const windowHeight = window.innerHeight;
        return (
            <Container fluid style={{backgroundColor: '#CCCCCC',height: `${windowHeight}px`}}>
                <Language />
                <AuthorizationFrom />
            </Container>
        );
    }
}

export default connect(
    (state) => ({  }),
    (dispatch) => ({  }),
)(Authorization);
