import React, { Component } from 'react'
import TimestampToDate from './ComponentNoState1'

class ComponentNoState2 extends Component {
    render() {
        return (
            <TimestampToDate timestamp={1475700297974} /> //Entre {} porque es número y no código JS
        );
    }
}

export default ComponentNoState2