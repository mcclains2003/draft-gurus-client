import React, { Component } from 'react';
import DropDown from '../components/drop_down';

export default class DraftYearDropDown extends Component {
    render() {
        var yearArray = ['2017', '2018', '2019', '2020'];

        return (
            <div>
                <h1>Please Select the Draft Year</h1>
                <DropDown data={yearArray} />
            </div>
        );
    }
}