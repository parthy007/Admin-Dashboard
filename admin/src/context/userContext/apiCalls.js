import { createUserFailure, createUserStart, createUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./UserAction";
import rootUrl from "../../api";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await fetch(`${rootUrl}/users`, {
          method:"GET",  
          credentials:"include"
        });

        if (!res.ok) {
          throw new Error("Request failed with status " + res.status);
        }

        const data = await res.json();
        dispatch(getUsersSuccess(data))
    } catch (error) {
        dispatch(getUsersFailure());
    }
}

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        const res = await fetch(`${rootUrl}/users/`+id, {
          method: "DELETE",  
          credentials:"include"
        });

        if (!res.ok) {
          throw new Error("Request failed with status " + res.status);
        }
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure());
    }
};

export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());
    try {
      const res = await fetch(`${rootUrl}/auth/register`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:"include",
        body: JSON.stringify(user)
      });

      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }

      const data = await res.json();
      dispatch(createUserSuccess(data));
    } catch (err) {
      dispatch(createUserFailure());
    }
  };

export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try {
      const res = await fetch(`${rootUrl}/users/`+user._id ,{
        method:"PUT",
        headers: {
          "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(user)
      });

      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }

      const data = await res.json();
      dispatch(updateUserSuccess(data));
    } catch (err) {
      dispatch(updateUserFailure());
    }
  };