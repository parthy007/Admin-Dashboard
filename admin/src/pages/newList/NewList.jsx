import { useContext, useEffect, useState } from "react";
import "./NewList.css";
import { getMovies } from "../../context/movieContext/apiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext";
import {ListContext} from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useNavigate } from "react-router-dom";

const NewList = () => {

  const [list, setList] = useState({});
  const navigate = useNavigate();
 

  const {dispatch} = useContext(ListContext)
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(()=>{
        getMovies(dispatchMovie);
    },[dispatchMovie])

  const handleSelect = (e) =>{
    let value = Array.from(e.target.selectedOptions, (options)=>options.value);
    setList({...list, [e.target.name]:value})
  }

  const handleChange = (e) =>{
    const value = e.target.value;
    setList({...list, [e.target.name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  }

  return (
    <div className="newProduct">
        <h1 className="addProductTitle">New List</h1>
        <form className="addProductForm">
            <div className="formLeft">

            <div className="addProductItem">
                <label>Title</label>
                <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
                <label>Type</label>
                <select name="type" id="type" onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </select>
            </div>
            <div className="addProductItem">
                <label>Genre</label>
                <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
            </div>
            </div>
            <div className="formRight">

            <div className="addProductItem">
                <label>Content</label>
                <select name="content" id="content" onChange={handleSelect} multiple style={{height:"300px"}}>
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}>{movie.title}</option>
                    ))}
                </select>
            </div>
            </div>
         
            <button className="addProductButton" onClick={handleSubmit}>Create</button>
       
   
        </form>
    </div>
  )
}

export default NewList
