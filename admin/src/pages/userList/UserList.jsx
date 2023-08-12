import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rootUrl from "../../api";
// import { useContext } from "react";
// import { deleteUser } from "../../context/userContext/apiCalls";
// import { UserContext } from "../../context/userContext/UserContext";

const UserList = () => {

    const[data,setData] = useState([]);
    // const {dispatch} = useContext(UserContext);

    useEffect(()=>{
      const getExistingUsers = async()=>{
        try{
          const res = await fetch(`${rootUrl}/users`,{
            method:"GET",
            credentials: "include"
          });
  
          if(!res.ok){
            throw new Error("Request failed with status "+ res.status);
          }
  
          const data = await res.json();
          setData(data);
        } catch(err){
          console.log(err);
        }
      }
      getExistingUsers();
    },[])

    // const handleClick = (id) =>{
    //     deleteUser(id,dispatch);
    // }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 200, renderCell: (param)=>{
            return (
                <div className="userListUser">
                    <img src={param.row.profilePic} alt="" className="userListImg"/>
                    {param.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'isAdmin',
          headerName: 'isAdmin',
          width: 120,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return(
              <>
                <Link to={"/user/"+params.row._id} state={{user: params.row}}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutlineIcon className="userListDelete" /> {/* onClick={()=>handleClick(params.row._id)} */}
              </>
            )
          }
        } 
      ];
      

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
        getRowId={(r)=>r._id}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
