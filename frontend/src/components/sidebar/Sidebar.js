import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon  } from '@heroicons/react/solid'
import { XIcon, HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon } from '@heroicons/react/outline'
import NavItem from '../header/NavItem.js'

const Sidebar = () => {

  const [location] = React.useState(useLocation().pathname);

  console.log(location);

  return (
    <aside className="w-[68px] md:w-[88px] lg:w-[300px] h-screen p-2 overflow-y-auto shadow bg-black duration-300">
      <div className="flex flex-col relative px-3 md:px-6 lg:px-12">
        <div className="flex justify-between mr-2 py-4">
          <div className="hidden lg:flex">
            <span className="text-2xl font-semibold text-white">C</span>
            <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
            <span className="text-2xl font-semibold text-white">KIVEL</span>
          </div>
        </div>
        <div className="duration-300">
          <ul className="flex flex-col flex-start h-full">
            <li>
              <Link to="/">
                <NavItem name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} active={location === '/' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <NavItem name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} active={location === '/users' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/managers">
                <NavItem name="관리자관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} active={location === '/managers' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/books">
                <NavItem name="작품관리" Icon={BookOpenIcon} SolidIcon={BookOpenSolidIcon} active={location === '/books' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/boards">
                <NavItem name="게시판관리" Icon={ArchiveIcon} SolidIcon={ArchiveSolidIcon} active={location === '/boards' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/notices">
                <NavItem name="공지사항관리" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} active={location === '/notices' && true }/>
              </Link>
            </li>
            <li>
              <Link to="/helpcenter">
                <NavItem name="고객센터관리" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} active={location === '/helpcenter' && true }/>
              </Link>
            </li>      
          </ul>
        </div>
      </div>
      
    </aside>
  )
}

export default Sidebar