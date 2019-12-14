import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.less'
import Link from 'umi/link'

function mapStateToProps(state) {
    return {

    };
}

class FootBar extends Component {
    render() {
        return (
            <div className={styles.footBar}>
                <Link to="/tarbar1">tarbar1</Link>
                <Link to="/tarbar2">tarbar2</Link>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(FootBar);