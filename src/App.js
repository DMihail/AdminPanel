import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducer from './redux/index';
import Authorization from "./Screens/Authorization";
import NumberCheck from "./Screens/NumberCheck";
import DataDisplay from "./Screens/DataDisplay";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    console.log('store', store.getState());
});


export default function App() {
    return (
        <Router>
                <Switch>
                    <Provider store={store}>
                        <Router>
                            <Route path="/dataDisplay/1" component={DataDisplay} />
                        </Router>
                    </Provider>
                    <Provider store={store}>
                        <Router>
                            <Route path="/" component={Authorization} />
                        </Router>
                    </Provider>
                    <Provider store={store}>
                        <Router>
                            <Route path="/numberCheck/2" component={NumberCheck} />
                        </Router>
                    </Provider>
                </Switch>
        </Router>
    );
}
