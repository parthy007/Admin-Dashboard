import { Link, useLocation } from "react-router-dom";
import "./Movie.css"
import { Publish } from "@mui/icons-material"
import { useContext, useState } from "react";
import storage from "../../firebase"
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

const Movie = () => {

    const location = useLocation();
    const movie = location.state.movie;

    const [movieUpdate, setMovieUpdate] = useState(movie);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const {dispatch} = useContext(MovieContext);

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setMovieUpdate({...movieUpdate,[e.target.name]: value})
    }

    const upload = (items) =>{
        items.forEach((item)=>{
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on("state_changed", (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + " % done."); 
            },
            (err) => {console.log(err)},()=>{
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    setMovieUpdate((prev)=>{
                        return {...prev, [item.label]: url};
                    });
                    setUploaded((prev)=>prev+1);
                })
            })
        })
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        upload([
            {file: trailer, label:"trailer"},
            {file: video, label:"video"}
        ])
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateMovie(movieUpdate,dispatch);
        console.log("clicked")
    }

  return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Movie</h1>
          <Link to="/newproduct">
              <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
        
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img} alt="img" className="productInfoImg"/>
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{movie.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>
              </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" name="title" onChange={handleChange} placeholder={movie.title} />
                  <label>Year</label>
                  <input type="text" name="year" onChange={handleChange}  placeholder={movie.year} />
                  <label>Genre</label>
                  <input type="text" name="genre" onChange={handleChange} placeholder={movie.genre} />
                  <label>Limit</label>
                  <input type="text" name="limit" onChange={handleChange} placeholder={movie.limit} />
                  <label>Trailer</label>
                  <input type="file" name="trailer" onChange={(e)=>setTrailer(e.target.files[0])} placeholder={movie.trailer} />
                  <label>Video</label>
                  <input type="file" name="video" onChange={(e)=>setVideo(e.target.files[0])} placeholder={movie.video} />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} alt="" className="productUploadImg" />
                      <label htmlFor="file"><Publish/></label>
                      <input type="file" id="file" style={{display: "none"}}/>
                  </div>
                  {uploaded === 2 ? (
                    <button className="productButton" onClick={handleSubmit}>Upload</button>
                  ):(
                    <button className="productButton" onClick={handleUpdate}>Update</button>
                  )}
              </div>
          </form>
        </div>
      </div>
  );
}

export default Movie
