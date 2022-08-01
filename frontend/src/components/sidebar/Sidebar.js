import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon  } from '@heroicons/react/solid'
import { HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import NavLink from './NavLink.js'

const Sidebar = () => {

  return (
    <aside className="w-[68px] md:w-[88px] lg:w-[300px] h-screen p-2 overflow-y-auto shadow bg-black duration-300">
      <div className="flex flex-col relative px-3 md:px-6 lg:px-12">
        <div className="relative mr-2 py-4">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-[#EEE0B1] mt-1 mr-2">
              <FaCookieBite className="hover:animate-waving"/>
            </span>
            <div className="hidden lg:flex">
              <span className="text-2xl font-semibold text-white">C</span>
              <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
              <span className="text-2xl font-semibold text-white">KIVEL</span>
            </div>
          </div>
        </div>
        <div className="duration-300">
          <ul className="flex flex-col flex-start h-full">
            <li>
              <NavLink to="/" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} />
            </li>
            <li>
              <NavLink to="/users" name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
            </li>
            <li>
              <NavLink to="/managers" name="관리자" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
            </li>
            <li>
              <NavLink to="/books" name="작품관리" Icon={BookOpenIcon} SolidIcon={BookOpenSolidIcon} />
            </li>
            <li>
              <NavLink to="/boards" name="게시글관리" Icon={ArchiveIcon} SolidIcon={ArchiveSolidIcon} />
            </li>
            <li>
              <NavLink to="/notices" name="공지사항" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} />
            </li>
            <li>
              <NavLink to="/helpcenter" name="고객센터" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} />
            </li>      
          </ul>
        </div>
      </div>      
    </aside>
  )
}

export default Sidebar