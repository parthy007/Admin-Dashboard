import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Layout from "./Layout";
import { Login } from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Lists from "./pages/lists/Lists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {

  const {user} = useContext(AuthContext);

  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
                {user && <Route element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/users' element={<UserList/>}/>
                  <Route path="/user/:Id" element={<User/>}/>
                  <Route path="/newUser" element={<NewUser/>}/>
                  <Route path="/movies" element={<MovieList/>}/>
                  <Route path="/product/:Id" element={<Movie/>}/>
                  <Route path="/newproduct" element={<NewMovie/>}/>
                  <Route path="/lists" element={<Lists/>}/>
                  <Route path="/list/:Id" element={<List/>}/>
                  <Route path="/newList" element={<NewList/>}/>
                </Route>}
                <Route path='/' element={user ? <Home/> : <Navigate replace to="/login"/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
