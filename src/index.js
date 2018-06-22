import React from 'react';
import ReactDOM from 'react-dom';

import DropDown from './components/drop_down';

const App = () => {
    return <div>
        <DropDown title="Choose Draft Year"/>
    </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));