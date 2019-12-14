import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCard from './MyCard'
import { Button } from 'antd-mobile';

function mapStateToProps({ tarbar1 }) {
    return {
        cardData: tarbar1
    };
}

class TarBar1 extends Component {

    buttonClick = () => {
        const { dispatch } = this.props
        dispatch({
            type: 'tarbar1/getCardData',
            payload: {
                id: 34
            }
        })
    }

    render() {
        const { cardData } = this.props

        const MyCards = cardData.map((item, key) => {
            return <MyCard cardData={ item } key={key}></MyCard>
        })

        return (
            <div>
                {/* <MyCard cardData={ cardData[0]}></MyCard>
                <MyCard cardData={ cardData[1]}></MyCard> */}
                { MyCards }
                <Button type="default" onClick={this.buttonClick}>获取数据</Button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TarBar1);