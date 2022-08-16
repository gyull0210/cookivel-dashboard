const StateBadge = ({color, name}) => {
  return (
  <span className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2 py-1 rounded dark:bg-${color}-200 dark:text-${color}-900`}>
    {name}
  </span>
  )
}

export default StateBadge