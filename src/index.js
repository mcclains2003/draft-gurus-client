import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import DraftYearDropDown from './containers/draft_year_drop_down';
import reducers from './reducers';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { years: [] };
    }

    render() {
        return (
            <div>
                <DraftYearDropDown />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root')
);