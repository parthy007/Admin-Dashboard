import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
} from './ListActions';
import rootUrl from '../../api';

// Get
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await fetch(`${rootUrl}/lists`, {
      method:"GET",
      credentials: "include"
    });

    if(!res.ok){
      throw new Error("Request failed with status "+ res.status);
    }

    const data = await res.json();
    dispatch(getListsSuccess(data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// Create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await fetch(`${rootUrl}/lists/`,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      credentials: "include",
      body: JSON.stringify(list)
    });

    if (!res.ok) {
      throw new Error('Request failed with status ' + res.status);
    }

    const data = await res.json();
    dispatch(createListSuccess(data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

// Update
export const updateList = async (list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await fetch(`${rootUrl}/lists/` + list._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(list)
    });

    if (!res.ok) {
      throw new Error('Request failed with status ' + res.status);
    }

    const data = await res.json();
    dispatch(updateListSuccess(data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};

// Delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    const res = await fetch(`${rootUrl}/lists/` + id, {
      method:"DELETE",
      credentials: "include"
    });

    if (!res.ok) {
      throw new Error('Request failed with status ' + res.status);
    }

    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};