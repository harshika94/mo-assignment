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

// Implementation of details page actions
export const getDealDetailsRequest = () => ({
  type: "GET_DEAL_DETAILS_REQUEST"
});

export const getDealDetailsSuccess = (response: Object) => ({
  type: "GET_DEAL_DETAILS_SUCCESS",
  payload: { response }
});

export const getDealDetailsError = (error: Object) => ({
  type: "GET_DEAL_DETAILS_ERROR",
  payload: { error }
});

export const getDealDetailsById = (id: String) => (dispatch: Function) => {
  dispatch(getDealsListRequest());
  return axios
    .get(`https://bakesaleforgood.com/api/deals/${id}`)
    .then(response => {
      return dispatch(getDealDetailsSuccess(response.data));
    })
    .catch(response => dispatch(getDealDetailsError(response.error)));
};

//Implementation of Add/Edit functionality

export const addNewDeal = (newDeal: Object) => ({
  type: "ADD_NEW_DEAL",
  payload: newDeal
});

export const updateListData = (key: string, title: string) => ({
  type: "UPDATE_DEAL",
  payload: { key, title }
});

export const reset = () => ({
  type: "RESET"
});
