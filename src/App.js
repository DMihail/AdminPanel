import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducer from './redux/index';
import Authorization from "./Screens/Authorization";
import NumberCheck from "./Screens/NumberCheck";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    console.log('store', store.getState());
});


export default function App() {
    return (
        <Router>
                <Switch>
                    {/*<Provider store={store}>*/}
                    {/*    <Router>*/}
                    {/*        <Route path="/about" component={About} />*/}
                    {/*    </Router>*/}
                    {/*</Provider>*/}
                    {/*<Provider store={store}>*/}
                    {/*    <Router>*/}
                    {/*        <Route path="/" component={Authorization} />*/}
                    {/*    </Router>*/}
                    {/*</Provider>*/}
                    <Provider store={store}>
                        <Router>
                            <Route path="/" component={NumberCheck} />
                        </Router>
                    </Provider>
                </Switch>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
