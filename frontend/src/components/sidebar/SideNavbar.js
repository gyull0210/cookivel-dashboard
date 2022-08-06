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

const SideNavbar = ({collasped, mobileCollasped, toggleSidebar, toggleMobileSidebar}) => {

  return (
		<aside className="fixed z-20 flex flex-col h-screen py-2 bg-white border-r border-gray-400">
      <div className={`hidden lg:block ${collasped  ? 'w-60 lg:w-60 px-4':'w-20 :px-1'} flex flex-col justify-between flex-1 duration-500`}>
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

    <div className={`block lg:hidden ${mobileCollasped  ? '-ml-60':'ml-0'} w-60 px-4 flex flex-col justify-between flex-1 duration-500`}>
        <div className="flex flex-col flex-start items-center">         
          <div className="flex items-center lg:ml-6">
            <div className="flex">
              <span className="text-2xl font-semibold text-black">C</span>
              <span className="text-2xl font-semibold text-amber-300">OO</span>
              <span className="text-2xl font-semibold text-black">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-amber-300 p-3" onClick={toggleMobileSidebar}>
              <FaCookieBite className="hover:animate-waving"/>
            </span>
          </div>
            
        {/* <nav className="my-1">
          <ul className="flex flex-col justify-start h-full">
            <li>
              <NavLink to="/dashboard" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} mobileCollasped={mobileCollasped} />
            </li>
            <li>
              <NavLink to="/users" name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} mobileCollasped={mobileCollasped}/>
            </li>
            <li>
              <NavLink to="/managers" name="관리자관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} mobileCollasped={mobileCollasped}/>
            </li>
            <li>
              <NavLink to="/books" name="작품관리" Icon={BookOpenIcon} SolidIcon={BookOpenSolidIcon} mobileCollasped={mobileCollasped}/>
            </li>
            <li>
              <NavLink to="/boards" name="게시판관리" Icon={ArchiveIcon} SolidIcon={ArchiveSolidIcon} mobileCollasped={mobileCollasped}/>
            </li> 
            <li>
              <NavLink to="/notices" name="공지관리" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} mobileCollasped={mobileCollasped}/>
            </li>           
            <li>
              <NavLink to="/helpcenter" name="고객센터관리" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} mobileCollasped={mobileCollasped}/>
            </li> 
          </ul> 
        </nav> */}
      </div>
    </div>
  </aside>
  )
}

export default SideNavbar