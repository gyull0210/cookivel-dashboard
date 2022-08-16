import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline' 
import { DotsHorizontalIcon, SearchIcon } from '@heroicons/react/solid' 
import Pagination from '../components/pagination/Pagination.js'

const Users = () => {
  return (
    <main className="relative h-full p-5 bg-white rounded-lg shadow">  
      <div className="w-full flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black">회원관리</h1>
      </div>
      
      <div className="grid grid-cols-12 flex-wrap gap-6">

      </div>

      
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">회원목록</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">차단된 회원</a>
          </li>
          <li>
            <a className="inline-block p-4 text-gray-600 rounded-t-lg dark:text-gray-500">탈퇴한 회원</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div className="">
          <select className="px-4 py-2 border border-gray-400 rounded-lg">
            <option>10개</option>
            <option>15개</option>
            <option>20개</option>
            <option>50개</option>
          </select>
        </div>
        <form className="relative lg:inline-block py-1">
          <input className="h-10 px-6 border bg-gray-100 border-gray-400 rounded-full focus:outline-none focus:bg-white" type="text" placeholder="검색" />
          <button className="absolute right-0 top-0 mt-3 mr-4" type="submit">
            <SearchIcon className="w-6 h-6 fill-gray-400"/>
          </button>
        </form>

        <button className="px-6 py-2 bg-gray-100 rounded-lg border border-gray-400 hover:bg-gray-200 active:bg-gray-300 shadow">
          회원 등록하기
        </button>
      </div>
      <div>
        {/* table header */}
        <div className="flex items-center px-4 py-2 bg-gray-200">
          <div className="">
            <input className="w-5 h-5" type="checkbox"/>
          </div>
          <div className="text-lg">계정</div>
          <div className="text-lg">권한</div>
          <div className="text-lg">가입일</div>
          <div className="text-lg">접속일</div>      
        </div>
        {/* table content */}
        <div className="">
          <div className="flex items-center justify-between border-gray-400 border-b py-1">
            <div className="">
              <input className="w-5 h-5" type="checkbox"/>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://i.pravatar.cc/80" alt="avatar"/>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <span className="text-lg font-semibold mr-2">닉네임</span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2 py-1 rounded dark:bg-green-200 dark:text-green-900">
                    활성화
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2 py-1 rounded dark:bg-yellow-200 dark:text-yellow-900">
                    잠김
                  </span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2 py-1 rounded dark:bg-red-200 dark:text-red-900">
                    차단된
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2 py-1 rounded dark:bg-gray-200 dark:text-gray-900">
                    탈퇴한
                  </span>
                </div>
                <span className="text-gray-500">abcd1234@naver.com</span>
              </div>
            </div>
            <div className="text-lg mx-auto">
              작가
            </div>
            <div className="text-lg mx-auto">
              1999-01-01
            </div>
            <div className="text-lg mx-auto">
              2022-01-01
            </div>
            <div className="">
              <div className="relative inline-block lg:hidden">
                <button className="p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <DotsHorizontalIcon className="w-8 h-8 fill-gray-400"/>
                </button>
              </div>

              <div className="hidden lg:flex items-center">
                <button className="p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <PencilAltIcon className="w-8 h-8 stroke-gray-400 hover:stroke-green-500 active:stroke-green-600"/>
                </button>
                <button className="p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <TrashIcon className="w-8 h-8 stroke-gray-400 hover:stroke-red-500 active:stroke-red-600"/>
                </button>
              </div>
            </div>
              
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th><input type="checkbox"/></th>
              <th>계정</th>
              <th className="hidden lg:inline-block">권한</th>
              <th className="hidden lg:inline-block">가입일</th>
              <th>접속일</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"/></td>
              <td>abcd1234@naver.com</td>
              <td className="hidden lg:inline-block">일반</td>
              <td className="hidden lg:inline-block">2022-01-01</td>
              <td>2022-01-01</td>
              <td>
              <div className="hidden lg:flex items-center">
                <button className="p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <PencilAltIcon className="w-8 h-8 stroke-gray-400 hover:stroke-green-500 active:stroke-green-600"/>
                </button>
                <button className="p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <TrashIcon className="w-8 h-8 stroke-gray-400 hover:stroke-red-500 active:stroke-red-600"/>
                </button>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* pagination */}
        <Pagination/>
      </div>
    </main>
  )
}

export default Users;