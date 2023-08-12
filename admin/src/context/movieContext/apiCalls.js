import {
    deleteMovieFailure, 
    deleteMovieStart, 
    deleteMovieSuccess, 
    getMoviesFailure, 
    getMoviesStart, 
    getMoviesSuccess, 
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure,
} from "./MovieAction";
import rootUrl from "../../api";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await fetch(`${rootUrl}/movies`, {
          method:"GET",  
          credentials:"include"
        });

        if (!res.ok) {
          throw new Error("Request failed with status " + res.status);
        }

        const data = await res.json();
        dispatch(getMoviesSuccess(data))
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        const res = await fetch(`${rootUrl}/movies/`+id, {
          method: "DELETE",  
          credentials:"include"
        });

        if (!res.ok) {
          throw new Error("Request failed with status " + res.status);
        }
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure());
    }
};

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await fetch(`${rootUrl}/movies`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:"include",
        body: JSON.stringify(movie)
      });

      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }

      const data = await res.json();
      dispatch(createMovieSuccess(data));
    } catch (err) {
      dispatch(createMovieFailure());
    }
  };

export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
      const res = await fetch(`${rootUrl}/movies/`+movie._id ,{
        method:"PUT",
        headers: {
          "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(movie)
      });

      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }

      const data = await res.json();
      dispatch(updateMovieSuccess(data));
    } catch (err) {
      dispatch(updateMovieFailure());
    }
  };