import React from 'react';
import {connect} from 'react-redux';
import Language from "../components/Language";
import AuthorizationFrom from "../components/AuthorizationFrom";
import {Container} from 'react-bootstrap';
import DataDisplayForm from "../components/DataDisplayForm";
import NumberCheckForm from "../components/NumberCheckForm";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
    }

    setScreen = () => {
        if (this.props.screen === 'AUTH') {
            return <AuthorizationFrom />
        } else if (this.props.screen === 'CHECK_NUM') {
            return <NumberCheckForm />
        } else if (this.props.screen === 'DISPLAY_DATA') {
            return <DataDisplayForm />
        }
    }


    render() {
        const windowHeight = window.innerHeight;
        return (
            <Container fluid style={{backgroundColor: '#CCCCCC',height: `${windowHeight}px`}}>
                <Language />
                {this.setScreen()}
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        screen: state.screen,
    }),
    (dispatch) => ({
        checkScreen: (screen) => {
            dispatch({type: 'CHECK_SCREEN', payload: screen});
        },
    }),
)(Authorization);
