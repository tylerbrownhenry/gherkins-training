import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listitem';

function List(props){
    const { data, loaded } = props;

    if(!loaded){
        return;
    }

    return  <ul className="grid-container">
        {data.map((e, index) => (
            <ListItem key={index} title={e.title}/>
        ))}
    </ul>
}

function mapStateToProps(state) {
    const { data, loaded } = state.data;

    return {
        loaded,
        data
    };
}

export default connect(mapStateToProps)(List);