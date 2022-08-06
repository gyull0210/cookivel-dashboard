import { Link } from 'react-router-dom'
import { SearchIcon,  UserCircleIcon } from '@heroicons/react/solid'
import { MenuIcon, BellIcon} from '@heroicons/react/outline'

const HeaderVerticalBar = ({collasped, mobileCollasped, toggleSidebar, toggleMobileSidebar}) => {

  return (
  <header className={`${collasped ? 'ml-0 lg:ml-60': 'ml-0 lg:ml-20'} bg-light-100 border-b border-gray-400`}>
    <nav className="flex justify-between items-center px-2">
    <div className="flex">
      {/* logo */}
      
      <button className="hidden lg:inline-block p-3 rounded-full hover:bg-gray-200 active:bg-gray-400 duration-200" type="button" onClick={toggleSidebar}>
        <MenuIcon className="w-6 h-6 stroke-gray-800"/>
      </button>

      <button className="inline-block lg:hidden p-3 rounded-full hover:bg-gray-200 active:bg-gray-400 duration-200" type="button" onClick={toggleMobileSidebar}>
        <MenuIcon className="w-6 h-6 stroke-gray-800"/>
      </button>

      {/* search form */}  
      <form className="hidden relative lg:inline-block py-1">
        <input className="h-10 px-6 border bg-gray-100 border-gray-400 rounded-full focus:outline-none focus:bg-white" type="text" placeholder="검색" />
        <button className="absolute right-0 top-0 mt-3 mr-4" type="submit">
          <SearchIcon className="w-6 h-6 fill-gray-400"/>
        </button>
      </form>
    </div>         

    {/* right menu */}
    <div className="flex items-center pr-2">
   
      {/* notification */}
      <button className="p-3 rounded-full hover:bg-gray-200 active:bg-gray-400 duration-200">
        <BellIcon className="w-6 h-6 stroke-gray-800"/>
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
    </nav>
  </header>
 )
}

export default HeaderVerticalBar