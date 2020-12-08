
import React from 'react';
import { connect } from 'react-redux';

const List = props => (
    <ul>
        { props.list.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
)

function mapStateTpProps(state) {
    return { ...state.list };
}

export default connect(mapStateTpProps)(List)
