import { useState } from 'react'
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

const Sidebar = () => {

  const [isMoblie, setIsMobile] = useState(false);

  const sideLink = ['대시보드', '회원관리', '작품관리', '관리자메뉴', '게시판관리', '공지사항관리', '고객센터'];

  return (
    <aside className="w-[84px] lg:w-[280px] h-screen p-1 overflow-y-auto shadow bg-gray-600 duration-500">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-6">
            <div className="hidden lg:flex">
              <span className="text-2xl font-semibold text-white">C</span>
              <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
              <span className="text-2xl font-semibold text-white">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-[#EEE0B1] p-3">
              <FaCookieBite className="hover:animate-waving"/>
            </span>
          </div>
          <div>
          <ul className="flex flex-col h-full">
            <li>
              <NavLink to="/" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} />
            </li>
            <li>
              <NavLink to="/users" name="회원관리" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
            </li>
            <li>
              <NavLink to="/managers" name="관리자메뉴" Icon={UsersIcon} SolidIcon={UsersSolidIcon} />
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
        <div className="my-3">
          <div className="flex flex-row justify-between items-center p-3 rounded-full hover:bg-gray-500">
            <div className="flex">
              <div className="block w-10 h-10">
                 <div className="rounded-full overflow-hidden">
                  <img className="w-full h-full" src="https://i.pravatar.cc/48"/>
                 </div>      
              </div>
              <div className="hidden lg:block mx-3 text-lg text-white">
              닉네임
              <p className="text-base">권한:관리자</p>
              </div>             
            </div>         
            <div className="hidden lg:flex justify-end">
              <button className="" type="button">
                <span className="">
                  <DotsHorizontalIcon className="w-6 h-6 fill-gray-400"/>
                </span>
              </button>
            </div>
          </div>
        </div>    
      </div>      
    </aside>
  )
}

export default Sidebar