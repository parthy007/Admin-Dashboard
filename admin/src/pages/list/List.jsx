import { Link, useLocation } from "react-router-dom";
import "./List.css";
import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";

const List = () => {

    const location = useLocation();
    const list = location.state.list;

    const [listUpdate, setListUpdate] = useState(list);

    const {dispatch} = useContext(ListContext);

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setListUpdate({...listUpdate,[e.target.name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateList(listUpdate,dispatch);
        console.log("clicked")
    }

  return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">List</h1>
          <Link to="/newList">
              <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
        
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Type:</span>
                      <span className="productInfoValue">{list.type}</span>
                  </div>
              </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>List Title</label>
                  <input type="text" name="title" onChange={handleChange} placeholder={list.title} />
                  <label>Type</label>
                  <input type="text" name="year" onChange={handleChange}  placeholder={list.type} />
                  <label>Genre</label>
                  <input type="text" name="genre" onChange={handleChange} placeholder={list.genre} />
              </div>
              <div className="productFormRight">
                    <button className="productButton" onClick={handleSubmit}>Upload</button>
              </div>
          </form>
        </div>
      </div>
  );
}

export default List
