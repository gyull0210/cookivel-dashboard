import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { HomeIcon as HomeSolidIcon, 
  UsersIcon as UsersSolidIcon, 
  MicrophoneIcon as MicrophoneSolidIcon, 
  ArchiveIcon as ArchiveSolidIcon, 
  BookOpenIcon as BookOpenSolidIcon, 
  AnnotationIcon as AnnotationSolidIcon,
  DotsHorizontalIcon  } from '@heroicons/react/solid'
import { HomeIcon, UsersIcon, MicrophoneIcon, ArchiveIcon, BookOpenIcon, AnnotationIcon, MenuIcon } from '@heroicons/react/outline'
import { FaCookieBite } from 'react-icons/fa'
import NavLink from '../components/sidebar/NavLink.js'
import Logo from '../components/logo/Logo.js'

const Test = () => {

  const [isSlimSidebar, setIsSlimSidebar] = useState(false);

  const handleSidebar = () => {

  }

	return (
		<div className="flex h-screen bg-gray-800">
      {/* aside */}
      <aside className="z-20 w-16 lg:w-64 overflow-y-auto shrink-0 md:block bg-white border-r border-gray-400 shadow-lg shadow-black/50 duration-300">
        {/* nav wrapper */}
        <div className="py-1">
          {/* logo */}
          <div className="flex items-center px-3 lg:ml-6">
            <div className="hidden lg:flex">
              <span className="text-2xl font-semibold text-black">C</span>
              <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
              <span className="text-2xl font-semibold text-black">KIVEL</span>
            </div>
            <span className="text-2xl font-semibold text-[#EEE0B1] p-3">
              <FaCookieBite className="drop-shadow-sm hover:animate-waving"/>
            </span>
          </div>
          {/* nav */}
          <nav className="mt-6">
            <ul>
              <li className="relative px-6 py-3">
                <Link className="inline-flex items-center w-full duration-200" to="/test">
                  <div>
                    <HomeIcon className="w-6 h-6 stroke-gray-400"/>
                  </div>
                  <span className="ml-4 text-xl text-gray-400 font-semibold hidden lg:block">대시보드</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* content */}
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-gray-100">
          <button className="px-6 px-3" onClick={handleSidebar}>
            <MenuIcon className="w-6 h-6 stroke-gray-400"/>
          </button>
        </header>
        {/* main */}
        <main className="h-full overflow-y-auto bg-white">

        </main>
        {/* footer */}
        <footer className="">

        </footer>
      </div>
    </div>
	)
}

export default Test