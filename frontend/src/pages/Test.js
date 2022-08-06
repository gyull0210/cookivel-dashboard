import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon,
  DotsHorizontalIcon,
  SearchIcon  } from '@heroicons/react/solid'
import { BellIcon, HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon, MenuIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import Header from '../components/header/HeaderVerticalBar.js'
import Sidebar from '../components/sidebar/SideNavbar.js'

const Test = () => {

  const [collasped, setIsCollapsed ] = useState(false);
  const [mobileCollasped, setIsMobileCollasped] = useState(false);

  const toggleSidebar = (e) => {
    setIsCollapsed(!collasped);
  }

  const toggleMobileSidebar = (e) => {
    setIsMobileCollasped(!mobileCollasped);
  }

  console.log(mobileCollasped);

	return (
		<div className="">
      <Sidebar collasped={collasped} mobileCollasped={mobileCollasped} toggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar}/> 
      <Header collasped={collasped} mobileCollasped={mobileCollasped} toggleSidebar={toggleSidebar} toggleMobileSidebar={toggleMobileSidebar}/>
      {/* main */}    
      <div className={collasped ? "ml-0 lg:ml-60 overflow-hidden":"ml-0 lg:ml-20 overflow-hidden" }>
      {/* sidebar */}			              
      <Outlet/>
      </div>
		</div>
	)
}

export default Test