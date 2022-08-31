class DataHandler {
    constructor() {

    }
    getData() {
        return new Promise((resolve)=>{
            resolve([
              {
                title: "This is a title."
              },
              {
                title: "This is another title."
              }
            ])
        });
    }
  }
  const dataHandler = new DataHandler();
  module.exports = dataHandler;