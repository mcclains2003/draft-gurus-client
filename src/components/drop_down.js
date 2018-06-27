import React, { Component } from 'react';

class DropDown extends Component{
    constructor(props) {
        super(props);

        this.state = { year: '' };
    }

    render() {
        return (
            <div>
                <select 
                    value={ this.state.year }
                    onChange={ event => this.setState({ year: event.target.value }) }>
                    <option value="default">Make a Selection</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
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