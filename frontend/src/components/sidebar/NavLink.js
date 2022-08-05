  import React from 'react'
  import { Link, useMatch } from 'react-router-dom'

  const NavLink = ({ to, name, Icon, SolidIcon }) => {

    const active = useMatch(to);

    return (
      <Link to={to}>
      <div className="flex w-full p-3 items-center relative lg:gap-2 rounded-full">
        <div className="rounded-full">
          {active ? <SolidIcon className="w-6 h-6 fill-black"/> : <Icon className="w-6 h-6 stroke-black" />}
        </div>       
        <span className={`${active ? 'text-black font-semibold' : 'text-black'} text-xl hidden w-full lg:block`}>
          {name}
        </span>
      </div>
      </Link>
    )
  }
  
  export default NavLink