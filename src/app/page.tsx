import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex gap-10 py-3 border  justify-center '>
      <Link href={"/"}>Home</Link>
      <Link href={"/product"}>pruduct</Link>
      <Link href={"/user"}>Users</Link>
    </div>
  )
}

export default Home




