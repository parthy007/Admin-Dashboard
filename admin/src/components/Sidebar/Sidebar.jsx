import "./Sidebar.css"
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ListIcon from '@mui/icons-material/List';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
      <div className="sidebar"> 
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/" className="link">
                  <li className="sidebarListItem">
                    <LineStyleOutlinedIcon className="sidebarIcon"/>
                      Home
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <TimelineOutlinedIcon className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                  <TrendingUpOutlinedIcon className="sidebarIcon"/>
                    Sales
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentityOutlinedIcon className="sidebarIcon"/>
                      User
                  </li>
                </Link>
                <Link to="/movies" className="link">
                  <li className="sidebarListItem">
                    <PlayCircleOutlineIcon className="sidebarIcon"/>
                      Movies
                  </li>
                </Link>
                <Link to="/lists" className="link">
                  <li className="sidebarListItem">
                    <ListIcon className="sidebarIcon"/>
                      Lists
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <BarChartOutlinedIcon className="sidebarIcon"/>
                    Reports
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notification</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MailOutlinedIcon className="sidebarIcon"/>
                    Mail
                </li>
                <li className="sidebarListItem">
                  <DynamicFeedOutlinedIcon className="sidebarIcon"/>
                    Feedback
                </li>
                <li className="sidebarListItem">
                  <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
                    Messages
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutlineIcon className="sidebarIcon"/>
                    Manage
                </li>
                <li className="sidebarListItem">
                  <TimelineOutlinedIcon className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                  <ReportIcon className="sidebarIcon"/>
                    Reports
                </li>
              </ul>
            </div>
          </div>
      </div>
  );
}

export default Sidebar
