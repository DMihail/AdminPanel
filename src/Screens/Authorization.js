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
        return (
            <Container fluid>
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
