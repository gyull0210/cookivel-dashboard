import { useState, useEffect, useRef } from 'react'
import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon,
  CollectionIcon as CollectionSolidIcon,
  DotsHorizontalIcon  } from '@heroicons/react/solid'
import { HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon, CollectionIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import NavLink from './NavLink.js'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick.js'

const Sidebar = ({collasped, toggleSidebar}) => {
  // const slidebarRef = useRef(null);
  // const [mobileActive, setMobileActive] = useDetectOutsideClick(slidebarRef, null);
  // const handleSidebar = () => {
  //   setMobileActive(!mobileActive);
  // }

  return (
		<aside className="fixed z-30 flex flex-col h-screen py-2 bg-gray-100 dark:bg-black shadow">
      <div className={`hidden lg:block ${collasped  ? 'w-20 :px-1' : 'w-60 lg:w-60 px-4'} flex flex-col justify-between flex-1 duration-200`}>
        <div className="flex flex-col flex-start items-center">         
          <div className={collasped ? "flex items-center mb-6":"flex items-center lg:ml-6 mb-6"}>
            <div className={collasped ? "hidden":"flex" }>
              <span className="text-2xl font-semibold text-black dark:text-white">C</span>
              <span className="text-2xl font-semibold text-amber-400">OO</span>
              <span className="text-2xl font-semibold text-black dark:text-white">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-amber-400 p-3" onClick={toggleSidebar}>
              <FaCookieBite className="hover:animate-waving"/>
            </span>
          </div>
            
          <nav className="my-1">
            <ul className="flex flex-col justify-start h-full">
              <li>
                <NavLink to="/dashboard" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} collasped={collasped} />
              </li>
              <li>
                <NavLink to="/users" name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} collasped={collasped}/>
              </li>
              <li>
                <NavLink to="/managers" name="관리자관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} collasped={collasped}/>
              </li>
              <li>
                <NavLink to="/books" name="작품관리" Icon={BookOpenIcon} SolidIcon={BookOpenSolidIcon} collasped={collasped}/>
              </li>
              <li>
                <NavLink to="/boards" name="게시판관리" Icon={ArchiveIcon} SolidIcon={ArchiveSolidIcon} collasped={collasped}/>
              </li> 
              <li>
               <NavLink to="/notices" name="공지사항" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} collasped={collasped}/>
              </li>
              <li>
               <NavLink to="/carousels" name="배너관리" Icon={CollectionIcon} SolidIcon={CollectionSolidIcon} collasped={collasped}/>
              </li>            
              <li>
                <NavLink to="/helpcenter" name="고객센터" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} collasped={collasped}/>
              </li> 
            </ul> 
          </nav>
        </div>
      </div>

      <div className={`block lg:hidden ${collasped  ? '-ml-60': 'ml-0'} w-60 px-4 flex flex-col justify-between flex-1 duration-200`}>
        <div className="flex flex-col flex-start items-center">         
          <div className="flex items-center mb-6 lg:ml-6">
            <div className="flex">
            <span className="text-2xl font-semibold text-black dark:text-white">C</span>
              <span className="text-2xl font-semibold text-amber-400">OO</span>
              <span className="text-2xl font-semibold text-black dark:text-white">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-amber-400 p-3" onClick={toggleSidebar}>
              <FaCookieBite className="hover:animate-waving"/>
            </span>
          </div>
            
        <nav className="my-1">
          <ul className="flex flex-col justify-start h-full">
            <li>
              <NavLink to="/dashboard" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} />
            </li>
            <li>
              <NavLink to="/users" name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
            </li>
            <li>
              <NavLink to="/managers" name="관리자관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
            </li>
            <li>
              <NavLink to="/books" name="작품관리" Icon={BookOpenIcon} SolidIcon={BookOpenSolidIcon} />
            </li>
            <li>
              <NavLink to="/boards" name="게시판관리" Icon={ArchiveIcon} SolidIcon={ArchiveSolidIcon} />
            </li> 
            <li>
              <NavLink to="/notices" name="공지관리" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon}/>
            </li>           
            <li>
              <NavLink to="/helpcenter" name="고객센터관리" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon}/>
            </li> 
          </ul> 
        </nav>
      </div>
    </div>
  </aside>
  )
}

export default Sidebar