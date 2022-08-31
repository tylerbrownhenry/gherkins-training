import React from 'react';
import utils from '../utils'
import store from '../store';

export default class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick () {
      const { loaded } = store.getState().data;

      if (loaded) { 
        return
      }

      store.dispatch({ type:"DATA_LOADING", loading: true });

      utils.loadData(()=>{
        store.dispatch({ type:"DATA_LOADING", loading: false })
        store.dispatch({ type:"DATA_LOADED" })
      });
    }
  
    render() {
      return <button onClick={this.handleOnClick}>Load Data</button>;
    }
}