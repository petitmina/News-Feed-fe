import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] bg-blue-300 flex items-center justify-center'>
      <div className='mx-0 my-auto'>
      <button className="m-2 text-red-500 text-lg">경제</button>
        <button className="m-2 text-red-500 text-lg">사회</button>
        <button className="m-2 text-red-500 text-lg">정치</button>
        <button className="m-2 text-red-500 text-lg">IT</button>
        <button className="m-2 text-red-500 text-lg">스포츠</button>
      </div>
    </div>
  )
}

export default Navbar
