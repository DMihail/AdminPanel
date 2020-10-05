import React from "react";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducer from './redux/index';
import Authorization from "./screens/Authorization";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    // console.log('store', store.getState());
});


export default function App() {
    return (
        <Provider store={store}>
            <Authorization />
        </Provider>
    );
}
