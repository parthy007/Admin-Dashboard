import "./Topbar.css";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";
import { logout } from "../../context/authContext/AuthAction";


const Topbar = () => {

  const {dispatch} = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="top-left">
          <span className="logo">
            Dash
          </span>
        </div>

        <div className="top-right">
          <div className="icon-container">
            <NotificationsNoneOutlinedIcon/>
            <span className="badge">
              2
            </span>
          </div>
          <div className="icon-container">
            <LanguageIcon/>
            <span className="badge">
              2
            </span>
          </div>
          <div className="icon-container">
            <SettingsIcon/>
          </div>
          <div className="profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCOnDIWH3-W4JlvzeBfigxvkVz2MPn4ntxw&usqp=CAU" alt="" className="top-avatar" />
                <ArrowDropDownIcon className='icon' />
                <div className="options">
                    <span>Settings</span>
                    <span onClick={()=>dispatch(logout())}>Logout</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
