import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';

function MyCard({ cardData }) {
    return (
        <div>
            <WhiteSpace size="lg" />
            <Card full>
            <Card.Header
                title={cardData.title}
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>{cardData.extra}</span>}
            />
            <Card.Body>
                <div>{cardData.body}</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>{cardData.foot}</div>} />
            </Card>
        </div>
    );
}

export default MyCard;