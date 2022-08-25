import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/icon-cart.svg'
import profilePic from '../../assets/images/image-avatar.png'

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <>
      <nav className='relative h-32 flex justify-between mx-20 p-10 md:border-b-2'>
        <div className='flex'>
          <div
            className='mr-3 pt-2.5 md:hidden cursor-pointer '
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <AiOutlineMenu size={20} />
          </div>
          <div className='pt-2'>
            {/* logo */}
            <a href='index.html'>
              <img src={logo} alt='Sneakers Logo' />
            </a>
          </div>
          <div className='hidden md:block '>
            {/* Nav items Left*/}
            <ul className='flex justify-center gap-14 mx-20 pt-2  '>
              <li className='h-20 text-secondaryLight hover:border-b-2 hover:border-primaryDark hover:text-secondaryDark '>
                <a href='index.html'>Collections</a>
              </li>
              <li className='h-20 text-secondaryLight hover:border-b-2 hover:border-primaryDark hover:text-secondaryDark'>
                <a href='index.html'>Men</a>
              </li>
              <li className='h-20 text-secondaryLight hover:border-b-2 hover:border-primaryDark hover:text-secondaryDark'>
                <a href='index.html'>Women</a>
              </li>
              <li className='h-20 text-secondaryLight hover:border-b-2 hover:border-primaryDark hover:text-secondaryDark'>
                <a href='index.html'>About</a>
              </li>
              <li className='h-20 text-secondaryLight hover:border-b-2 hover:border-primaryDark hover:text-secondaryDark'>
                <a href='index.html'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex pt-2 gap-8'>
          {/* Right Nav */}
          <span className='relative h-full pt-2 cursor-pointer'>
            <img src={cart} alt='cart Logo' />
          </span>
          <span className='h-[4rem] w-12 hover:scale-150 cursor-pointer'>
            <img src={profilePic} alt='Profile pics' />
          </span>
        </div>
      </nav>

      {/* Overlay / backdrops*/}
      {showMobileNav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}
      {/* Side drawer menu */}
      <div
        className={
          showMobileNav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'hidden'
        }
      >
        <AiOutlineClose
          size={20}
          className='absolute right-4 top-4 cursor-pointer'
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
        <nav>
          <ul className='flex flex-col p-4 text-secondaryDark'>
            <li className='text-3xl py-4 flex font-bold hover:border-b-2 hover:border-primaryDark'>
              <a href='index.html'>Collections</a>
            </li>
            <li className='text-3xl py-4 flex font-bold hover:border-b-2 hover:border-primaryDark'>
              <a href='index.html'>Men</a>
            </li>
            <li className='text-3xl py-4 flex font-bold hover:border-b-2 hover:border-primaryDark'>
              <a href='index.html'>Women</a>
            </li>
            <li className='text-3xl py-4 flex font-bold hover:border-b-2 hover:border-primaryDark'>
              <a href='index.html'>About</a>
            </li>
            <li className='text-3xl py-4 flex font-bold hover:border-b-2 hover:border-primaryDark'>
              <a href='index.html'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
