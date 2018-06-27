import React, { Component } from 'react';

class DropDown extends Component{
    constructor(props) {
        super(props);

        this.state = { years: this.props.data };
    }

    render() {
        var selectionOptions = this.state.years.map(function(selection){
            return <option value={selection}>{selection}</option>
        })

        return (
            <div>
                <select 
                    value={ this.state.year }
                    onChange={ event => this.setState({ year: event.target.value }) }>
                    <option value="default">Make a Selection</option>
                    { selectionOptions }
                </select>
            </div> 
        );
    }

    // onOptionChange(event) {
    //     console.log(event.target.value);
    // }
}

// class MenuTagItems extends Component{
//     render() {
//         var years = [2018, 2019, 2020, 2021]
//         var dropDownList = years.map(function(year){
//             return <MenuItem>{ year }</MenuItem>
//         })

//         return { dropDownList }
//     }
// }

// MenuTagItems = () => {
//     years.forEach(function(year) {
//         return <MenuItem>year</MenuItem>
//     })
// }

export default DropDown;