import "./MovieList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext, useEffect }  from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {  getMovies } from "../../context/movieContext/apiCalls";
// import { deleteMovie } from "../../context/movieContext/apiCalls";

const MovieList = () => {

  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
      getMovies(dispatch);
  },[dispatch])
      
      
  // const handleDelete = (id) =>{
  //   deleteMovie(id, dispatch);
  // }
      
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Movies', width: 200, renderCell: (params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.img} alt="" className="productListImg"/>
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 200 },
        { field: 'year', headerName: 'Year', width: 200 },
        { field: 'limit', headerName: 'Limit', width: 200 },
        { field: 'isSeries', headerName: 'isSeries', width: 200 },
        
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return(
              <>
                <Link to={{pathname: "/product/"+params.row._id}} state={{movie: params.row}}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutlineIcon className="productListDelete" /> {/* onClick={()=>handleDelete(params.row._id)} */}
              </>
            )
          }
        } 
      ];

  return (
    <div className="productList">
        <DataGrid
        rows={movies}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  )
}

export default MovieList
