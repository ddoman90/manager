import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBmgJK-Z-tGu1gqdbz8do6i10Mn-CqysMc",
            authDomain: "manager-9db63.firebaseapp.com",
            databaseURL: "https://manager-9db63.firebaseio.com",
            storageBucket: "manager-9db63.appspot.com",
            messagingSenderId: "494229333734"
        };
        firebase.initializeApp(config);
    }

    render() {
        // first param is reducers, second is initial states, third are store enhancer e.g. middleware
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <LoginForm>
                        Hello!
                    </LoginForm>
                </View>
            </Provider>
        )
    }
}

export default App;