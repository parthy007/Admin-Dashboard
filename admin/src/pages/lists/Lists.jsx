import "./Lists.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext, useEffect }  from "react";
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext"
import { getLists } from "../../context/listContext/apiCalls";
// import { deleteList } from "../../context/listContext/apiCalls";  


const Lists = () => {

  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
      getLists(dispatch);
  },[dispatch])
      
      
  // const handleDelete = (id) =>{
  //   deleteList(id, dispatch);
  // }
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return(
              <>
                <Link to={{pathname: "/list/"+params.row._id}} state={{list: params.row}}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutlineIcon className="productListDelete"/>  {/* onClick={()=>handleDelete(params.row._id)} */}
              </>
            )
          }
        } 
      ];

  return (
    <div className="productList">
        <DataGrid
        rows={lists}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5,8, 10]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  )
}

export default Lists;
