import React from 'react'

const Hero = () => {
  return (
    <div className=' text-white flex max-md:flex-col-reverse justify-center md:px-20 py-12 md:py-24 gap-20 overflow-hidden relative mb-10'>
      <div className=' flex flex-col gap-5 flex-1'>
        {/* <div className=' rounded-md flex items-center justify-around gap-5 px-3 py-2 bg-stone-800 w-fit text-xs'>
          <div className=' text-2xl'>
            <i className="fa-solid fa-award"></i>
          </div>
          <div className=''>
            <div className=' text-[8px]'>
              SERVICE HUNT
            </div>
            <div className=' font-bold'>
              #1 Product of the Year
            </div>
          </div>
        </div> */}

        <h1 className=' text-4xl md:text-6xl leading-none font-bold'>Flawless edits using powerful <br className='md:hidden'/> <span className='text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500'>AI technology</span></h1>

        <p className=' text-sm md:text-base text-gray-400'>Introducing PixelPerfect, the cutting-edge photo editing service powered by artificial intelligence. Our revolutionary platform combines the precision of AI algorithms with the artistry of professional photographers, bringing you unparalleled results in a fraction of the time.</p>

        <div className=' flex items-center gap-10 my-10 flex-wrap max-md:text-sm '>
          <button className=' max-md:w-full hover:scale-105 transition-all duration-700 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 p-4 rounded-md font-semibold'>Get access now!</button>
          <button className=' max-md:w-full hover:border-gray-400 border-[1px] p-4 rounded-md'>Watch Video</button>
        </div>

        {/* <div className=' flex gap-10'>
          <img className=' w-[70px] h-[70px] object-cover rounded-md' src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className=' flex flex-col gap-5'>
            <p className=' text-gray-500 text-sm italic max-w-[500px]'>“I'm amazed at the level of control I have over the final look of my photos. The customizable styles make it easy to achieve a consistent visual identity for my brand.”</p>
            <span className=' text-slate-700'>Eli Friedman, founder of Sampson Photography</span>
          </div>
        </div> */}
      </div>

      <div className=' flex-1 flex gap-10 relative'>
        <div className=' flex flex-col gap-14 mt-14'>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700 overflow-hidden'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/M82NNh2/sd1.jpg" alt="" />
          </div>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/Hq1hxXq/sd2.jpg" alt="" />
          </div>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700 max-md:hidden'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/qmr0k59/sd3.jpg" alt="" />
          </div>
        </div>

        <div className=' flex flex-col gap-14'>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/c27qZbH/sd4.jpg" alt="" />
          </div>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/BCtVDw2/sd5.jpg" alt="" />
          </div>
          <div className=' bg-neutral-900 md:w-72 md:h-40 rounded-lg hover:-translate-y-2 transition-all duration-700 max-md:hidden'>
            <img className=' md:w-72 md:h-40 object-cover' src="https://i.ibb.co/mFvMTQQ/sd6.jpg" alt="" />
          </div>
        </div>

        <div className=' bg-gradient-to-t from-black to-zinc-950 opacity-60 blur-xl absolute w-screen h-[30%] -bottom-5 -left-5'></div>
      </div>
    </div>
  )
}

export default Hero