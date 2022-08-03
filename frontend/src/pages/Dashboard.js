import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon,
  DotsHorizontalIcon  } from '@heroicons/react/solid'
import { HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import NavLink from './components/sidebar/NavLink.js'
import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'
import Footer from '../components/footer/Footer.js'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
	return (
		<div className="flex w-screen h-screen bg-gray-100">
			{/* sidebar */}
			<div className="w-17 px-1 md:w-22 lg:w-64 lg:px-4 flex flex-col h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600  duration-500">
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
   
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
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
          </nav>

          <div className="flex items-center lg:px-4 my-3 lg:mx-2 rounded-full hover:bg-gray-600">
						<div className="mx-auto lg:p-3">
							<img className="block object-cover rounded-full h-10 w-10" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
						</div>             
            <h4 className="hidden lg:block mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
						<button className="hidden lg:block" type="button">
              <span className="">
                <DotsHorizontalIcon className="w-6 h-6 fill-gray-400"/>
              </span>
            </button>
          </div>
        </div>
    </div>
			{/* content */}
			<div className="flex-1 w-full bg-gray-600 duration-500">
				{/* header */}
				<header className="w-full h-10 bg-gray-800 text-white">

				</header>
				<main className="w-full ">
					ㅇ
				</main>
				<footer className="w-full h-10 bg-gray-300">

				</footer>
			</div>
		</div>
  )
}

export default Dashboard;