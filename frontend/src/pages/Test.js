import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/HeaderVerticalBar.js'
import Sidebar from '../components/sidebar/SideNavbar.js'

const Test = () => {

  const [collasped, setIsCollapsed ] = useState(false);
 
  const toggleSidebar = (e) => {
    setIsCollapsed(!collasped);
  }

	return (
		<div className="h-full">
      <Sidebar collasped={collasped} toggleSidebar={toggleSidebar}/> 
      <Header collasped={collasped} toggleSidebar={toggleSidebar}/>
      {/* main */}    
      <div className={`${collasped ? 'ml-0 lg:ml-20':'ml-0 lg:ml-60'} overflow-hidden duration-200`}>
      {/* sidebar */}			              
      <Outlet/>
      </div>
		</div>
	)
}

export default Test