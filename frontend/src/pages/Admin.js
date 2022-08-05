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
import NavLink from '../components/sidebar/NavLink.js'

const Admin = () => {

	return (
		<div className="flex w-screen h-full">
			{/* sidebar */}
			<div className="w-17 px-1 md:w-22 lg:w-60 lg:px-4 flex flex-col h-screen py-2 bg-gray-200 border-r border-gray-400 duration-500">
        <div className="flex flex-col justify-between flex-1">
          {/* logo + navlink */}
          <div className="flex flex-col flex-start items-center">
          {/* logo */}
          <div className="flex items-center ml-6">
        <div className="hidden lg:flex">
          <span className="text-2xl font-semibold text-black">C</span>
          <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
          <span className="text-2xl font-semibold text-black">KIVEL</span>
        </div>
        <span className="text-2xl font-semibold text-[#EEE0B1] p-3">
          <FaCookieBite className="hover:animate-waving"/>
        </span>
      </div>
          {/* navLink */}     
          <nav className="my-1">
            <ul className="flex flex-col justify-start h-full">
              <li>
                <NavLink to="/" name="대시보드" Icon={HomeIcon} SolidIcon={HomeSolidIcon} />
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
                <NavLink to="/notices" name="공지관리" Icon={MicrophoneIcon} SolidIcon={MicrophoneSolidIcon} />
              </li>           
              <li>
                <NavLink to="/helpcenter" name="고객센터관리" Icon={AnnotationIcon} SolidIcon={AnnotationSolidIcon} />
              </li> 
            </ul> 
          </nav>
        </div>
          {/* usermenu */}
          <div className="flex items-center lg:px-4 my-3 lg:mx-2 rounded-full hover:bg-gray-200">
						<div className="mx-auto p-3">
							<img className="block object-cover rounded-full h-10 w-10" src="https://i.pravatar.cc/48" alt="avatar"/>
						</div>             
            <h4 className="hidden lg:block mx-2 font-medium text-gray-800 dark:text-gray-400 hover:underline">John Doe</h4>
						<button className="hidden lg:block" type="button">
              <span className="">
                <DotsHorizontalIcon className="w-6 h-6 fill-gray-400"/>
              </span>
            </button>
          </div> 
        </div>  
      </div>
			{/* content */}
			<div className="flex flex-col w-full">
        {/* header */}
        <header className="flex justify-between items-center px-2 bg-gray-300 border-b border-gray-400">
          {/* left menu */}
          <div className="flex">
            {/* sidebar menu button */}
            <button className="p-3 rounded-full active:bg-gray-400 duration-200" type="button">
              <MenuIcon className="w-6 h-6 stroke-gray-400"/>
            </button>

            {/* search form */}
            <form className="hidden relative lg:inline-block py-1">
              <input className="h-10 px-6 border border-gray-400 rounded-full focus:outline-none" type="text" placeholder="검색" />
              <button className="absolute right-0 top-0 mt-3 mr-4" type="submit">
                <SearchIcon className="w-6 h-6 fill-gray-400"/>
             </button>
            </form>
          </div>         

          {/* right menu */}
          <div className="flex items-center pr-2">
            
            {/* notification */}
            <button className="p-3 rounded-full active:bg-gray-400 duration-200">
              <BellIcon className="w-6 h-6 stroke-gray-400"/>
            </button>

            {/* usermenu */}
            <div className="relative inline-block py-3">
              <button className="flex items-center" type="button">
                {/* avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden active:bg-gray-400 duration-200">
                  <img className="w-full h-full" src="https://i.pravatar.cc/48"/>
                </div>
                {/* nickName */}
                <div className="hidden lg:block">
                Jone Doe
                </div>
                {/* drops */}
                <div className="">

                </div>
              </button>

              {/* dropdown menu */}
              <div className="">

              </div>
            </div>

          </div>
        </header>

        {/* main+footer */}
        <div className="flex flex-col w-full h-full justify-between overflow-y-auto">              
        <main className="relative h-full p-5 bg-gray-200">  
      <div className="w-full flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black">대시보드</h1>
      </div>
      
      <div className="grid grid-cols-12 flex-wrap gap-6">
        
        <div className="w-full h-96 col-span-12 xl:col-span-9 2xl:col-span-9 z-10 shadow rounded-lg bg-white">
        </div>
    
        <div className="relative px-5 pt-8 pb-14 col-span-12 z-10 shadow rounded-lg bg-white">
    
        </div>
    
        <div className="relative w-full h-full grid grid-cols-12 gap-6 xl:absolute -mt-8 xl:mt-0 pb-6 xl:pb-0 top-0 right-0 z-30 xl:z-auto">
          <div className="col-span-12 xl:col-span-3 xl:col-start-10 xl:pb-16 z-30 ">
            <div className="flex flex-col ">
              <div className="flex-1 xl:min-h-0">
                <div className="max-h-full xl:overflow-y-auto bg-white shadow rounded-lg">
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main> 
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