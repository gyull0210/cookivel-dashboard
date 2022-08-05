import { FaCookieBite } from 'react-icons/fa'

const Logo = () => {
    return (
        <div className="flex items-center ml-6">
        <div className="hidden lg:flex">
          <span className="text-2xl font-semibold text-white">C</span>
          <span className="text-2xl font-semibold text-[#EEE0B1]">OO</span>
          <span className="text-2xl font-semibold text-white">KIVEL</span>
        </div>
        <span className="text-2xl font-semibold text-[#EEE0B1] p-3">
          <FaCookieBite className="hover:animate-waving"/>
        </span>
      </div> 
    )
}

export default Logo