import React from 'react';
import { connect } from 'react-redux';

function ErrorMessage(props){
    if(!props.error){
        return;
    }
    return <div className="errorMessage">{props.error}</div>
}

function mapStateToProps(state) {
    const { error } = state.data;
    return {
        error
    };
}

export default connect(mapStateToProps)(ErrorMessage);