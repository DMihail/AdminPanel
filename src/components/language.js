import React from 'react';
import {connect} from 'react-redux';
import {Navbar} from 'react-bootstrap';

const styles = {
    borderBottom:  "2px solid currentColor",
    borderBottomColor: "yellow"
}

class Language extends React.Component {
    constructor(props) {
        super(props);
    }

    setUk = () => {
        if (this.props.language === "uk") {
            return (
                <b style={styles}> Укр </b>
            )
        }
        return "Укр"
    }

    setRus = () => {
        if (this.props.language === "ru") {
           return (
               <b style={styles}> Рус </b>
           )
        }
        return "Рус"
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={() => {
                        this.props.setLanguage('UK')

                    }}>
                        {this.setUk()}
                    </Navbar.Text>
                    <Navbar.Text>
                        &emsp;
                    </Navbar.Text>
                    <Navbar.Text onClick={() => {
                        this.props.setLanguage('RU')
                    }}>
                        {this.setRus()}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(
    (state) => ({
        language: state.language
    }),
    (dispatch) => ({
        setLanguage: (language) => {
            dispatch({type: language});
        },
    }),
)(Language);
