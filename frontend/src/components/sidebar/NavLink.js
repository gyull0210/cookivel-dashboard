  import React from 'react'
  import { Link, useMatch } from 'react-router-dom'

  const NavLink = ({ to, name, Icon, SolidIcon, collasped }) => {

    const active = useMatch(to);

    return (
      <Link to={to}>
      <div className="flex w-full p-3 items-center relative gap-2 hover:bg-gray-100 active:bg-gray-200 rounded-full duration-200">
        <div className="rounded-full">
          {active ? <SolidIcon className="w-6 h-6 fill-gray-800"/> : <Icon className="w-6 h-6 stroke-gray-800" />}
        </div>       
        {collasped ? <span className={`${active ? 'text-gray-800 font-semibold' : 'text-gray-800'} text-xl w-full block`}> 
          {name}
        </span> : '' }
      </div>
      </Link>
    )
  }
  
  export default NavLink