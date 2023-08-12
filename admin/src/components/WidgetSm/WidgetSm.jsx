import "./WidgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import rootUrl from "../../api";

const WidgetSm = () => {

  const [newUser, setNewUser] = useState([]);

  useEffect(()=>{
    const getNewUsers = async() => {
      try{
        const res = await fetch(`${rootUrl}/users?new=true`,{
          method: "GET",
          credentials:"include"
        });

        if(!res.ok){
          throw new Error("Request failed with status "+ res.status);
        }
        
        const data = await res.json();
        setNewUser(data);
      }catch(err){
        console.log(err);
      }
    }
    getNewUsers();
  },[]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map(user => (
          <li key={user._id} className="widgetSmListItem">
            <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm
