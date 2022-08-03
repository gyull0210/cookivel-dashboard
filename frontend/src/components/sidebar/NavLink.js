  import React from 'react'
  import { Link, useMatch } from 'react-router-dom'

  const NavLink = ({ Icon, SolidIcon, name, to }) => {

    const active = useMatch(to);

    return (
      <Link to={to}>
      <div className="flex w-full my-3 md:px-1 lg:px-4 items-center relative gap-2 hover:bg-gray-700 rounded-full">
        <div className="p-3">
          {active ? <SolidIcon className="w-6 h-6 fill-gray-200"/>: <Icon className="w-6 h-6 stroke-gray-400" />}
        </div>       
        <span className={`${active ? 'text-gray-200 font-bold' : 'text-gray-400'} text-xl hidden w-full lg:block`}>
          {name}
        </span>
      </div>
      </Link>
    )
  }
  
  export default NavLink