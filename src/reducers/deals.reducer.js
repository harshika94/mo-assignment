const dealsList = {
  loading: false,
  error: false,
  success: true,
  list: [],
  dealDetails: {}
};

const dealsReducer = (state = dealsList, action) => {
  switch (action.type) {
    case "GET_DEALS_LIST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        success: false
      };
    case "GET_DEALS_LIST_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        success: false
      };
    case "GET_DEALS_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        list: action.payload.response
      };
    default:
      return dealsList;
  }
};

export default dealsReducer;
