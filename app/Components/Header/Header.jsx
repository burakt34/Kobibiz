import React from 'react'
import Logo from './Logo'
import HeaderNav from './HeaderNav'
import LogIn from './LogIn'

const Header = () => {
  return (
    <div className='flex justify-between px-12 pt-6 pb-4 bg-inherit'>
        <Logo/>
        <HeaderNav/>
        <LogIn/>
    </div>
  )
}

export default Header