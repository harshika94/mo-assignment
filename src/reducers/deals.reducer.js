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
      case "GET_DEAL_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        success: false
      };
    case "GET_DEAL_DETAILS_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        success: false
      };
    case "GET_DEAL_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        dealDetails: action.payload.response
      };
      case "ADD_NEW_DEAL":
        const newObj = state.list;
        newObj.push(action.payload);
        return {
          ...state,
          list: newObj
        };
      case "UPDATE_DEAL":
        const updatedObj = state.list;
        updatedObj.map(item => {
          if (item.key === action.payload.key) {
            item.title = action.payload.title;
          }
        });
        return {
          ...state,
          list: updatedObj
        };
  
        case "RESET":
          return {
            ...state
          };
        default:
          return dealsList;
  }
};

export default dealsReducer;
