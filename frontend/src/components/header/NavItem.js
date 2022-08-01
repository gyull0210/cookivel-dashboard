  import React from 'react'

  const NavItem = ({ Icon, SolidIcon, name, active }) => {
    return (
      <div className="flex w-full h-16 items-center relative gap-4 hover:duration-300">
        <div>
          {active ? <SolidIcon className="w-6 h-6 fill-gray-200"/>: <Icon className="w-6 h-6 stroke-gray-400" />}
        </div>       
        <span className={`${active ? 'text-gray-200 font-bold' : 'text-gray-400'} text-lg hidden md:hidden lg:block`}>
          {name}
        </span>
      </div>
    )
  }
  
  export default NavItem