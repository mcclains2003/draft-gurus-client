import React from 'react';
// import ReactDOM from 'react-dom';

import DropDown from './drop_down';

const DraftYearDropDown = () => {
    var yearArray = ['2017', '2018', '2019', '2020']
    return <div>
        <h1>Please Select the Draft Year</h1>
        <DropDown data={yearArray} />
    </div>;
}

export default DraftYearDropDown;
// ReactDOM.render(<App />, document.querySelector('#root'));