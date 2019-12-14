import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MyCard from './MyCard'

function mapStateToProps(state) {
    return {

    };
}

class TarBar2 extends Component {
    render() {
        return (
            <div>
                this is tarbar2
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TarBar2);