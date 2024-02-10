import Link from 'next/link'
import React from 'react'

const LogIn = () => {
  return (
    <div className='text-white flex gap-4'>
      <Link href="/">
        <button className='bg-inherit hover:bg-white hover:text-navbg border border-white py-[14px] px-[24px] rounded-[40px] transition-all delay-100 ease-in-out'>
          <p className='text-base'>
            Üye Ol
          </p>
        </button>
      </Link>
      <Link href="/">
        <button className='bg-inherit hover:bg-white hover:text-navbg border border-white py-[14px] px-[24px] rounded-[40px] transition-all delay-100 ease-in-out'>
          <p className='text-base'>
            Giriş Yap
          </p>
        </button>
      </Link>
    </div>
  )
}

export default LogIn