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
import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'

const Admin = () => {

  const [collasped, setIsCollapsed ] = useState(false);

  const toggleSidebar = (e) => {
    setIsCollapsed(!collasped);
  }

	return (
		<div className="flex w-screen h-full">
			{/* sidebar */}
			<Sidebar collasped={collasped} />
			{/* content */}
			<div className="flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar}/>
        {/* main+footer */}
        <div className="flex flex-col w-full h-full justify-between overflow-y-auto">             
        <Outlet/>
          
        {/* footer */}
        <footer className="flex flex-wrap justify-around items-center h-15 bg-gray-300 px-2 lg:px-5 py-3">
          <div className="">
            <a className="mr-5" href="/privacypolicy">
              개인정보이용방침
            </a>

            <a href="/termsofservice">
              사이트운영정책
            </a>
          </div>
          <div className="">
          Copyright © 2022 COOKIVEL All rights reserved.
          </div>
        </footer>
        </div>
			</div>
		</div>
	)
}

export default Admin