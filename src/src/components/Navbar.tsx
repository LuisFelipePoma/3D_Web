import { MouseEventHandler, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src='https://avatars.githubusercontent.com/u/102071960?s=400&u=7a93c7f22a97fa190614de3ad0f9b39119dbbdfe&v=4'
            alt='logo'
            className='w-8 h-8 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Don Gato &nbsp; <span className='sm:block hidden'>| 3D Web</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white  text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px]
          object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20
          right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-5'>
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium text-[18px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    // setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
