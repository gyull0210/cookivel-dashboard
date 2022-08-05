import { Link } from 'react-router-dom'
import { SearchIcon,  UserCircleIcon } from '@heroicons/react/solid'
import { BellIcon} from '@heroicons/react/outline'

const Header = ({title}) => {
  return (
    <header className="flex flex-col">
      <nav className="flex justify-between px-6 h-20 items-center relative z-10 dark:bg-gray-800">

        <div className="block">
          <h1 className="text-3xl font-semibold text-black dark:text-white">{title}</h1>

        </div>

        <div className="lg:flex justify-end items-center">
          <form className="hidden lg:relative lg:inline-block mr-10">
            <input className="h-10 px-5 pr-5 rounded-full border border-gray-400 rounded-lg text-white focus:outline-none dark:bg-gray-600" 
            type="text" placeholder="검색어를 입력하세요" />
            <button className="absolute right-0 top-0 mt-2 mr-4">
              <SearchIcon className="w-6 h-6 fill-gray-400"/>
            </button>
          </form>

          <div className="relative inline-block">
            <button className="mx-3 lg:hidden">
              <SearchIcon className="w-6 h-6 fill-gray-400"/>
            </button>

            <button className="mx-3">
              <BellIcon className="w-6 h-6 stroke-gray-400"/>
            </button>

            <button className="mx-3">
              <UserCircleIcon className="w-6 h-6 fill-gray-400"/>
            </button>
          </div>
        </div>
      </nav>
      {/* <nav className="dark:bg-gray-800 text-lg">
        <ul className="flex justify-between">
          <li className="w-full h-10 text-white hover:border-b-2 hover:border-gray-400 duration-300">
            <Link to="/users/:userlist">
              회원목록
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-gray-400 text-white hover:text-black text-center duration-300">
            <Link to="/user/:lockedlist">
              휴면회원목록
            </Link>
          </li>
          <li className="w-full h-10 hover:bg-gray-400 text-white hover:text-black text-center">
            <Link to="/user/:blacklist">
              차단된회원목록
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header