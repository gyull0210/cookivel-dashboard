
import { useState, useRef, useEffect } from 'react'


const Login = () => {

  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="w-screen h-screen py-48 dark:bg-gray-800">      
      <div className="w-full lg:w-96 mx-auto p-6 bg-white dark:bg-gray-700 rounded-xl">
        <header className="flex flex-col text-center mb-8">
          <div className="flex justify-center">
          <span className="text-2xl text-bold text-black dark:text-white">C</span>
            <span className="text-2xl text-bold text-amber-200">OO</span>
            <span className="text-2xl text-bold text-black dark:text-white">KIVEL</span>           
          </div>
          <span className="text-2xl text-bold text-black dark:text-white">관리자 로그인</span>
        </header>
        <form className="p-4" method="">
          <div className="mb-4">
          <div className="mb-4">
            <input id="userid" className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none" type="text" placeholder="아이디" />
            <label className="hidden" htmlFor="userid">
              <span className="text-red-400">아이디 또는 비밀번호를 잘못 입력하였습니다</span>
              <span className="text-red-400">아이디 또는 비밀번호가 일치하지 않습니다</span>
              <span className="text-red-400">아이디를 입력해주세요</span>
            </label>
          </div>
          <div className="mb-4">
            <input id="userpw" className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none" type="password" placeholder="비밀번호" />
            <label className="hidden" htmlFor="userpw">
              <span className="text-red-400">아이디 또는 비밀번호를 잘못 입력하였습니다</span>
              <span className="text-red-400">아이디 또는 비밀번호가 일치하지 않습니다</span>
              <span className="text-red-400">비밀번호를 입력해주세요</span>
            </label>
          </div>
          </div>
          <div className="mb-4 text-center">
            <a className="text-black dark:text-white" href="#">계정 찾기</a>
          </div>
          <div className="mb-4">
            <button className="w-full px-6 py-2 bg-amber-200 rounded-md text-lg font-semibold shadow-inner hover:bg-amber-600 hover:text-white duration-300" type="submit">로그인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;