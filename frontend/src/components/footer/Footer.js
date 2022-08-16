const Footer = ({collasped}) => {
  return (
    <footer className={`${collasped ? 'ml-0 lg:ml-20':'ml-0 lg:ml-60'} flex justify-center px-6 h-20 items-center relative z-10 duration-0 lg:duration-200 bg-gray-200 dark:border-t dark:border-gray-700`}>
      <div className="text-black dark:text-white">
        Copyright © 2022 COOKIVEL All rights reserved.
      </div>
    </footer>
  )
}

export default Footer