import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon,
  DotsHorizontalIcon  } from '@heroicons/react/solid'
import { HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import NavLink from './NavLink.js'

const SideNavbar = ({collasped, toggleSidebar}) => {

  return (
		<aside className={`${collasped  ? 'w-60 px-4':'hidden md:w-20 md:px-1 lg:w-20 lg:px-1'} fixed z-20 flex flex-col h-screen py-2 bg-white border-r border-gray-400`}>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col flex-start items-center">         
          <div className={collasped ? "flex items-center lg:ml-6": "flex items-center"}>
            <div className={collasped ? "flex" : "hidden"}>
              <span className="text-2xl font-semibold text-black">C</span>
              <span className="text-2xl font-semibold text-amber-300">OO</span>
              <span className="text-2xl font-semibold text-black">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-amber-300 p-3" onClick={toggleSidebar}>
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
              <NavLink to="/notices" name="공지관리" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} collasped={collasped}/>
            </li>           
            <li>
              <NavLink to="/helpcenter" name="고객센터관리" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} collasped={collasped}/>
            </li> 
          </ul> 
        </nav>
      </div>


    </div>
  </aside>
  )
}

export default SideNavbar