import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/solid'
import { MenuIcon, BellIcon} from '@heroicons/react/outline'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick.js'

const Header = ({collasped, toggleSidebar}) => {

  const dropdownProfileRef = useRef(null);
  const dropdownNotificationRef=useRef(null);
  const [isProfileActive, setIsProfileActive] = useDetectOutsideClick(dropdownProfileRef, false);
  const [isNotificationActive, setIsNotificationActive] = useDetectOutsideClick(dropdownNotificationRef, false);

  const handleDropdownNotification = () => {
    setIsNotificationActive(!isNotificationActive);
  }
  const handleDropdownProfile = () => {
    setIsProfileActive(!isProfileActive);
  }

  return (
  <header className={`${collasped ? 'left-0 lg:left-20':'left-0 lg:left-60'} top-0 right-0 fixed z-20 bg-gray-100 dark:bg-black shadow duration-0 lg:duration-200`}>
    <nav className="flex justify-between items-center px-2 mx-auto">
    <div className="flex">
      {/* logo */}
      
      <button className="p-3 rounded-full hover:bg-gray-200 active:bg-gray-400 dark:hover:bg-gray-400 dark:active:bg-gray-500 duration-200" type="button" onClick={toggleSidebar}>
        <MenuIcon className="w-6 h-6 stroke-gray-800 dark:stroke-white"/>
      </button>

      {/* search form */}  
      <form className="relative lg:inline-block py-1">
        <input className="h-10 px-6 border bg-gray-100 border-gray-400 rounded-full focus:outline-none focus:bg-white" type="text" placeholder="검색" />
        <button className="absolute right-0 top-0 mt-3 mr-4" type="submit">
          <SearchIcon className="w-6 h-6 fill-gray-400"/>
        </button>
      </form>
    </div>         

    {/* right menu */}
    <div className="flex items-center pr-2">
   
      {/* notification */}
      <div className="relative inline-block py-3" ref={dropdownNotificationRef}>
        <button className="p-3 rounded-full hover:bg-gray-200 active:bg-gray-400 duration-200 dark:hover:bg-gray-400 dark:active:bg-gray-500" onClick={handleDropdownNotification}>
          <BellIcon className="w-6 h-6 stroke-gray-600 dark:stroke-white hover:animate-waving"/>
        </button>

        {/* dropdown menu */}
        <div id="dropdownDivider" className={`${isNotificationActive ? 'absolute':'hidden'} right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                이벤트 진행중입니다
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                이벤트 진행중입니다
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                이벤트 진행중입니다
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              새로운 알림이 있습니다
            </a>
          </div>
        </div>
      </div>
      {/* usermenu */}
      <div className="relative inline-block py-3" ref={dropdownProfileRef}>
        <button className="flex items-center" type="button" onClick={handleDropdownProfile}>
        {/* avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2 active:bg-gray-400 duration-200">
            <img className="w-full h-full" src="https://i.pravatar.cc/80" alt="프로필이미지"/>
          </div>
        {/* nickName */}
          <div className="hidden lg:block text-gray-800 dark:text-white">
          Jone Doe
          </div>
        {/* drops */}
          <div className="">
            <ChevronDownIcon className="w-5 h-5 fill-gray-400"/>
          </div>
        </button>

        {/* dropdown menu */}
        <div id="dropdownDivider" className={`${isProfileActive ? 'absolute':'hidden'} right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">알림</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">메세지</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">계정설정</a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">로그아웃</a>
          </div>
        </div>
      </div>
    </div>
    </nav>
  </header>
 )
}

export default Header