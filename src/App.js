import React, {Component} from 'react';
import './App.css';
import store from './store/index';
import {Provider} from 'react-redux';
import Template from './templates/index'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Template/>
            </Provider>
        );
    }
}

export default App;
