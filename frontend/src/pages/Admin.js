import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'
import Footer from '../components/footer/Footer.js'

const Admin = () => {

  const [collasped, setIsCollapsed ] = useState(false);
  const toggleSidebar = (e) => {
    setIsCollapsed(!collasped);
  }

	return (
		<div className="h-screen bg-gray-200 dark:bg-gray-800">
      <Sidebar collasped={collasped} toggleSidebar={toggleSidebar}/> 
      <Header collasped={collasped} toggleSidebar={toggleSidebar}/>
      {/* main */}    
      <div className={`${collasped ? 'ml-0 lg:ml-20':'ml-0 lg:ml-60'} pt-20 lg:pt-24 px-4 lg:px-8 h-full overflow-hidden duration-200`}>
      {/* sidebar */}		              
        <Outlet/>    
      </div>
      <Footer collasped={collasped} />
		</div>
	)
}

export default Admin