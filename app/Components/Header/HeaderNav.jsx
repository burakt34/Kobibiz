import Link from 'next/link'
import React from 'react'

const HeaderNav = () => {
  return (
    <div className='hidden text-white lg:flex justify-center items-center gap-6'>
      <Link href="/">Bussines Doctor</Link>
      <Link href="/">Kobi Teşvik</Link>
      <Link href="/">Şirket Kurun</Link>
      <Link href="/">Kobi İK</Link>
      <Link href="/">Kobi Marin</Link>
      <Link href="/">Kobi YOS</Link>
      <Link href="/">İletişim</Link>
    </div>
  )
}

export default HeaderNav