import { PencilAltIcon, TrashIcon, FilterIcon } from '@heroicons/react/outline' 
import { DotsHorizontalIcon, SearchIcon } from '@heroicons/react/solid' 
import StateBadge from '../components/badge/StateBadge.js'
import Pagination from '../components/pagination/Pagination.js'

const UsersDetail = () => {
  return (
    <main className="relative h-full p-5 bg-white rounded-lg shadow">  
      <div className="w-full flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black">회원 상세정보</h1>
      </div>

      <div className="flex items-center justify-between mb-4">
      <div className="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">전체 회원</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">비활성화된 회원</a>
          </li>
          <li>
            <a className="inline-block p-4 text-gray-600 rounded-t-lg dark:text-gray-500">탈퇴한 회원</a>
          </li>
        </ul>
      </div>

      </div>

      <div className="flex w-full h-10 bg-gray-100 mb-4">
      </div>
      <div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className=""><input type="checkbox"/></th>
              <th className="">계정</th>
              <th className="">권한</th>
              <th className="hidden">가입일</th>
              <th className="hidden">접속일</th>
              <th className="">관리</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td><input type="checkbox"/></td>
              <td className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                  <img src="https://i.pravatar.cc/80" alt="avatar"/>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <span className="text-lg font-semibold mr-2">닉네임</span>
                    <StateBadge color="green" name="활성화"/>
                  </div>
                  <span className="text-gray-500">abcd1234@naver.com</span>
                </div>
              </td>
              <td className="">일반</td>
              <td className="hidden">2022.01.01</td>
              <td className="hidden">2022.01.01</td>
              <td>
              <div className="flex items-center">
                <button className="inline-block lg:hidden p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full" type="button">
                  <DotsHorizontalIcon className="w-6 h-6 fill-gray-400"/>
                </button>
                <button className="hidden md:inline-block p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <PencilAltIcon className="w-6 h-6 stroke-gray-400 hover:stroke-green-500 active:stroke-green-600"/>
                </button>
                <button className="hidden md:inline-block p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <TrashIcon className="w-6 h-6 stroke-gray-400 hover:stroke-red-500 active:stroke-red-600"/>
                </button>
              </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                  <img src="https://i.pravatar.cc/80" alt="avatar"/>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <span className="text-lg font-semibold mr-2">닉네임</span>
                    <StateBadge color="green" name="활성화"/>
                  </div>
                  <span className="text-gray-500">abcd1234@naver.com</span>
                </div>
              </td>
              <td className="">일반</td>
              <td className="hidden">2022.01.01</td>
              <td className="hidden">2022.01.01</td>
              <td>
              <div className="flex items-center">
                <button className="inline-block lg:hidden p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full" type="button">
                  <DotsHorizontalIcon className="w-6 h-6 fill-gray-400"/>
                </button>
                <button className="hidden md:inline-block p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <PencilAltIcon className="w-6 h-6 stroke-gray-400 hover:stroke-green-500 active:stroke-green-600"/>
                </button>
                <button className="hidden md:inline-block p-3 hover:bg-gray-200 active:bg-gray-300 rounded-full">
                  <TrashIcon className="w-6 h-6 stroke-gray-400 hover:stroke-red-500 active:stroke-red-600"/>
                </button>
              </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </main>
	)
}

export default UsersDetail