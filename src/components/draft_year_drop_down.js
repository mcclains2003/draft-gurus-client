import React from 'react';
import ReactDOM from 'react-dom';

import DropDown from './components/drop_down';

const DraftYearDropDown = () => {
    var yearArray = ['2017', '2018', '2019', '2020']
    return <div>
        <h1>Please Select the Draft Year</h1>
        <DropDown title="Choose Draft Year" data= yearArray />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));