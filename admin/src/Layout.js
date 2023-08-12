import "./Layout.css"
import Sidebar from './components/Sidebar/Sidebar'
import TopBar from "./components/Topbar/Topbar.jsx"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <TopBar/>
        <div className='container'>
          <Sidebar className='sidebarComponent'/>
          <div className='pages'>
            <Outlet/>
          </div>
        </div>
    </>
  )
}

export default Layout