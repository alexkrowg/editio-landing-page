import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Access = () => {
    return (
        <div className=' flex justify-center items-center md:px-20 my-32 relative max-md:flex-col-reverse max-md:gap-20' id='access'>
            <img src="assets/images/bg-2.svg" alt="" className=' max-md:hidden w-[1200px] opacity-30 absolute -z-10' />
            <div className=' flex-1 flex items-center justify-center' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out">
                <div className=' bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 p-[2px] rounded-xl w-[90%] md:w-[350px]'>
                    <div className='flex h-full w-full items-center justify-center bg-black back rounded-xl'>
                        <div className=' w-[350px] h-fit py-10 bg-transparent rounded-xl flex flex-col justify-center gap-10 items-center px-5'>
                            <span className='bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 px-2 py-[2px] rounded-lg font-bold'>Lifetime Access</span>
                            <h1 className=' text-5xl font-bold'>$69</h1>
                            <p className=' text-center'>One-time payment, access forever! <br /><span className=' text-sky-300'>Discounted price. Increases to $420 soon.</span></p>

                            <div className='flex items-center justify-center rounded-xl'>
                                <button className=' hover:border-gray-400 bg-black border-[1px] p-4 rounded-3xl'>BUY NOW</button>
                            </div>

                            <div className=' flex flex-col justify-center items-center text-gray-500 text-sm'>
                                <div className=' flex gap-3 items-center'>
                                    <i className="fa-solid fa-shield-heart text-lg"></i>
                                    <p>14 Days Money Back Guarantee</p>
                                </div>
                                <p className=' text-center text-xs w-[80%]'>Buy clicking the purchase button above you agree with our terms.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex-1' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out">
                <h1 className=' text-5xl max-md:text-center'>Transform your photos into <span className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500'>masterpieces</span></h1>
                <div className=' flex gap-10 mt-9' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out">
                    <img className=' w-[70px] h-[70px] object-cover rounded-md' src="https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className=' flex flex-col gap-5'>
                        <p className=' text-gray-500 text-sm italic max-w-[500px]'>“As a novice photographer, I was hesitant about editing my photos. But Editio AI made the process simple and enjoyable, providing stunning results beyond my expectations.”</p>
                        <span className=' text-slate-700'>Emily, aspiring photographer</span>
                    </div>
                </div>
                <div className=' flex gap-10 mt-9' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out">
                    <div className=' flex flex-col gap-5 items-end' >
                        <p className=' text-gray-500 text-sm italic max-w-[500px]'>“I've never seen an editing tool so intuitive and versatile. Editio AI gives me the freedom to experiment and unlock new levels of creativity.”</p>
                        <span className=' text-slate-700'>Mark, social media influencer</span>
                    </div>
                    <img className=' w-[70px] h-[70px] object-cover rounded-md' src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Access