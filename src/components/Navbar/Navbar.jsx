import React from 'react'

const Navbar = () => {
    return (
        <div className='py-8 px-10 text-md flex justify-between items-center max-md:px-0'>
            <img className=' w-48 max-md:w-28' src="assets/images/logo.svg" alt="" />
            <ul className='flex gap-10 items-center max-md:hidden'>
                <li><a href="#">Features</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <div className=' bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 p-[2px] max-md:hidden'>
                <div className='flex h-full w-full items-center justify-center bg-black back '>
                    <button className='px-5 py-3'>Get Access</button>
                </div>
            </div>
            <i className="fa-solid fa-bars md:hidden text-2xl"></i>
        </div>
    )
}

export default Navbar