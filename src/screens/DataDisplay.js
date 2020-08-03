import React from 'react';
import {connect} from 'react-redux';
import Language from "../components/language";
import {Container} from 'react-bootstrap';
import DataDisplayForm from "../components/dataDisplayForm";

class dataDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const windowHeight = window.innerHeight;
        return (
            <Container fluid style={{backgroundColor: '#CCCCCC',height: `${windowHeight}px`}}>
                <Language />
                <DataDisplayForm />
            </Container>
        );
    }
}

export default connect(
    (state) => ({  }),
    (dispatch) => ({  }),
)(dataDisplay);
