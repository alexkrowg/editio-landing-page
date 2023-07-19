import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {

    const matches = useMediaQuery('(max-width: 768px)')
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='py-8 px-10 text-md flex justify-between items-center max-md:px-0'>
            <img className=' w-48 max-md:w-28' src="assets/images/new-logo.svg" alt="" />
            <ul className='flex gap-10 items-center max-md:hidden'>
                <li><a href="#features">Features</a></li>
                <li><a href="#access">Membership</a></li>
                <li><a href="#home">Login</a></li>
            </ul>
            <div className=' bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 p-[2px] max-md:hidden'>
                <div className='flex h-full w-full items-center justify-center bg-black back '>
                    <button className='px-5 py-3'>Get Access</button>
                </div>
            </div>
            <i className={` fixed right-10 fa-solid md:hidden z-50 text-2xl ${openMenu ? "fa-xmark fixed" : "fa-bars static"}`} onClick={() => setOpenMenu(!openMenu)}></i>
            <div className=' fixed w-screen bg-black text-white right-0 top-0 pt-48 h-full z-10' style={matches && openMenu ? {display:"block"} : {display:"none"}}>
                <ul className=' flex flex-col gap-10 text-lg items-center'>
                    <li><a href="#features" onClick={() => setOpenMenu(false)}>Features</a></li>
                    <li><a href="#access" onClick={() => setOpenMenu(false)}>Membership</a></li>
                    <li><a href="#home" onClick={() => setOpenMenu(false)}>Login</a></li>
                    <div className=' bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 p-[2px]'>
                        <div className='flex h-full w-full items-center justify-center bg-black back '>
                            <button className='px-5 py-3'>Get Access</button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar