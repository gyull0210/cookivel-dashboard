import { SearchIcon,  UserCircleIcon, MenuIcon } from '@heroicons/react/solid'
import { BellIcon} from '@heroicons/react/outline'

const Header = ({title}) => {
  return (
    <header>
      <div className="flex justify-between px-6 h-20 items-center relative z-10 dark:bg-gray-800">

        <div className="hidden lg:block">
          <h1 className="text-3xl font-semibold text-black dark:text-white">{title}</h1>
        </div>

        <div className="lg:flex justify-end items-center">
          <form className="hidden lg:relative lg:inline-block mr-10">
            <input className="h-10 px-5 pr-5 rounded-full border border-gray-400 rounded-lg focus:outline-none dark:bg-gray-600" 
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
      </div>
    </header>
  )
}

export default Header