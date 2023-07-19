import React from 'react'

const Footer = () => {
    return (
        <div className=' flex justify-center gap-20 items-center h-[100px] md:h-[300px] max-md:flex-col max-md:mt-60'>
            <img className=' w-48 ' src="assets/images/new-logo.svg" alt="" />

            <div className=' flex gap-10 flex-wrap'>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-lg text-slate-400'>Company</h2>
                    <ul className=''>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>

                    </ul>
                </div>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-lg text-slate-400'>Support</h2>
                    <ul className=''>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className=' flex flex-col gap-5'>
                    <h2 className=' text-lg text-slate-400'>About</h2>
                    <ul className=''>
                        <li>Made by Alex </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer