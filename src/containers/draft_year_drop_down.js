import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropDown from '../components/drop_down';

class DraftYearDropDown extends Component {
    render() {
        return (
            <div>
                <h1>Please Select the Draft Year</h1>
                <DropDown data={this.props.years} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        years: state.years
    }
}

export default connect(mapStateToProps)(DraftYearDropDown);