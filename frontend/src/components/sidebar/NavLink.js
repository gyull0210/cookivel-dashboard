  import React from 'react'
  import { Link, useMatch } from 'react-router-dom'

  const NavLink = ({ to, name, Icon, SolidIcon, collasped }) => {

    const active = useMatch(to);

    return (
      <Link to={to}>
      <div className=" flex w-full p-3 items-center gap-2 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-400 dark:active:bg-gray-500 rounded-full duration-200">
        <div className="rounded-full">
          {active ? <SolidIcon className="w-6 h-6 fill-gray-800 dark:fill-white"/> : <Icon className="w-6 h-6 stroke-gray-800 dark:stroke-white" />}
        </div>       
        {collasped ? '' : <span className={`${active ? ' font-semibold' : ''}text-gray-800 whitespace-nowrap text-xl w-full inline-block dark:text-white`}> 
          {name}
        </span> }
        {collasped ? <span className={`${active ? 'font-semibold' : ''}text-gray-800 lg:hidden whitespace-nowrap text-xl w-full inline-block dark:text-white`}> 
          {name}
        </span> : ''}
      </div>
      </Link>
    )
  }
  
  export default NavLink