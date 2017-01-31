import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MyApp from '../core/reducers'
import { getRoute } from './router'
import { CONSTANTS } from '../core/constants'
import { ENV } from 'core/env'

const store = createStore(MyApp);
if (!ENV.DEV) {
    console.log = function() {};
}
export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = this._getInitialState();
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
            this._onChange();
        });
    }

    _onChange() {
        this.setState(this._getInitialState());
    }

    _getInitialState() {
        //let storeState = store.getState();
        return {};
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }
    
    componentDidMount() {}

    render() {
        return (
            <Provider store={ store }>
                <div>
                    <p>The app</p>
                </div>
            </Provider>
            );
    }
}

const styles = {}