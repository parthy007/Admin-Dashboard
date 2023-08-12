import { loginFailure, loginStart, loginSuccess, logout } from "./AuthAction";
import rootUrl from "../../api";

export const login = async(user,dispatch)=>{
    dispatch(loginStart());
    try{
        const res = await fetch(`${rootUrl}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify(user)
        });

        if(!res.ok){
            throw new Error("Request failed with status "+ res.status);
        }

        const data = await res.json();
        if(data.isAdmin){
            dispatch(loginSuccess(data))
        }
    }catch(err){
        dispatch(loginFailure())
    }
};

export const logoutCall = (dispatch) => {
    dispatch(logout());
};