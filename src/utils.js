import store from './store';

const utils = {
    renderData: async () => {
        return new Promise(async(resolve)=>{
            const result = await fetch('/getData').catch((e)=>{
                store.dispatch({ type:"DATA_FAILURE", error: e.message })
            });

            result.json().then((resp)=>{
                console.log('dataresolt',resp.data);
                store.dispatch({ type:"DATA_SUCCESS", data: resp.data })
                resolve(resp.data);
            });
        })
    },
    loadData: function (callback) {
        this.renderData().then((response)=>{
            callback(response);
        })
    }
}

export default utils;