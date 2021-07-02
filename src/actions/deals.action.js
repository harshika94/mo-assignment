import axios from "axios";

export const getDealsListRequest = () => ({
  type: "GET_DEALS_LIST_REQUEST"
});

export const getDealsListSuccess = (response: Object) => ({
  type: "GET_DEALS_LIST_SUCCESS",
  payload: { response }
});

export const getDealsListError = (error: Object) => ({
  type: "GET_DEALS_LIST_ERROR",
  payload: { error }
});

export const getDealsList = () => (dispatch: Function) => {
  dispatch(getDealsListRequest());
  return axios
    .get("https://bakesaleforgood.com/api/deals")
    .then(response => {
      return dispatch(getDealsListSuccess(response.data));
    })
    .catch(response => dispatch(getDealsListError(response.error)));
};

// Implementation of search by term
export const getSearchKeyData = (key: string) => (dispatch: Function) => {
  dispatch(getDealsListRequest());
  return axios
    .get(`https://bakesaleforgood.com/api/deals?searchTerm=${key}`)
    .then(response => {
      return dispatch(getDealsListSuccess(response.data));
    })
    .catch(response => dispatch(getDealsListError(response.error)));
};


