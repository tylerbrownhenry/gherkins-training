const INITIAL_STATE = {
    loaded: false,
    loading: false,
    error: null,
    data: {},
};
  
function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DATA_SUCCESS":
      return {
          ...state,
          data: action.data,
        };
    case "DATA_LOADING":
        return {
            ...state,
            loading: action.loading,
          };
    case "DATA_FAILURE":
          return {
              ...state,
              error: action.error,
              loading: false,
            };
    case "DATA_LOADED":
        return {
          ...state,
          loaded: true,
        };
      default:
        return state;
  }
}

export default dataReducer;
