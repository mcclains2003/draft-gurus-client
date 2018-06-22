import React from 'react';
import ReactDOM from 'react-dom';

import DropDown from './components/drop_down';

const DraftOptionDropDown = () => {
    var draftArray = ['Shaun Draft', 'Justin Draft', 'NFL Draft']
    return <div>
        <h1>Please Select your Draft</h1>
        <DropDown title="Choose your Draft" data= draftArray />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));