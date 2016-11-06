import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBmgJK-Z-tGu1gqdbz8do6i10Mn-CqysMc',
            authDomain: 'manager-9db63.firebaseapp.com',
            databaseURL: 'https://manager-9db63.firebaseio.com',
            storageBucket: 'manager-9db63.appspot.com',
            messagingSenderId: '494229333734'
        };
        firebase.initializeApp(config);
    }

    render() {
        // first param is reducers, second is initial states,
        // third are store enhancer e.g. middleware
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
