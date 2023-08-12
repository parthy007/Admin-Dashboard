import { useContext, useEffect, useState } from "react"
import "./Login.css"
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[navigate,user]);

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const{ isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    login({email,password},dispatch);
  }

  return (
    <>
    <span className="logotop">Dash - Login</span>
    <div className='login'>
        <form className="loginForm">
            <input type="email" placeholder='Email' className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className="loginInput" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="loginButton" onClick={handleLogin}>{isFetching ? "Loading" : "Login"}</button>
        </form>
    </div>
    </>
  )
}
