import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DraftYearDropDown from './components/draft_year_drop_down';

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

ReactDOM.render(<App />, document.querySelector('#root'));