
import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'
import Footer from '../components/footer/Footer.js'
import { Outlet } from 'react-router-dom'

const Error = () => {
  return (
    <div className="w-screen h-screen">
      
      <div className="flex w-screen">
        <Sidebar/>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header title="대시보드"/>
          <main className="w-full h-screen overflow-auto dark:bg-gray-800">
            <div className="flex flex-wrap">
              <Outlet/>
            </div>
          </main>
          <Footer/>
        </div>
      </div>      
    </div>
  )
}

export default Error;