import React from 'react'

const Features = () => {
    return (
        <div className=' flex flex-col'>
            <div className=' flex flex-col'>
                <div className=' flex flex-col justify-center items-center w-fit self-center gap-5 max-md:mb-10'>
                    <h1 className=' font-bold text-4xl md:text-5lx text-center'>Editing photos is <span className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500'>hard.</span><br />Stop wasting your time.</h1>
                    <p className=' md:w-[580px] text-gray-400 text-center max-md:text-sm'>Don't get lost in the editing labyrinth - let our AI-powered service be your guiding light to effortless perfection!</p>
                    <span className=' my-2 text-lg text-gray-400 max-md:text-sm'>We got you covered.</span>
                </div>

                <div className=' flex max-md:flex-col md:p-14 relative'>
                    <div className=' flex flex-col gap-20 md:flex-1'>
                        <div className=' flex flex-col gap-5'>
                            <h2 className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500'>We did the hard work for you</h2>
                            <p className=' md:w-[500px]'>
                                Editio AI analyzes your photos and applies intelligent enhancements to improve clarity, color balance, and sharpness, effortlessly bringing out the best in every image.
                            </p>
                        </div>

                        <div className=' flex flex-col gap-5'>
                            <h2 className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500'>Customizable styles</h2>
                            <p className=' md:w-[500px]'>
                                Discover your unique visual aesthetic with a wide range of AI-powered artistic styles. From vintage to modern, vibrant to muted, our service allows you to effortlessly explore and experiment with various looks.
                            </p>
                        </div>

                        <div className=' flex flex-col gap-5'>
                            <h2 className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500'>Advanced object removal</h2>
                            <p className=' md:w-[500px]'>
                            Bid farewell to unwanted objects or blemishes in your photos. Editio AI intelligently detects and seamlessly removes distractions, leaving you with a clean and professional result.
                            </p>
                        </div>
                    </div>

                    <img src="assets/images/arrow.svg" alt="" className=' md:absolute left-[40%] top-[50%] max-md:rotate-90 max-md:w-32 max-md:self-center max-md:mt-14' />

                    <div className=' md:flex-1 flex items-center justify-center max-md:mt-80 relative'>
                        <div className=' w-64 md:w-[600px] h-44 md:h-[400px] bg-violet-600 absolute left-[20px] bottom-16 rounded-3xl'></div>
                        <div className=' w-64 md:w-[600px] h-44 md:h-[400px] bg-cyan-600 absolute left-[30px] bottom-20 rounded-3xl'></div>
                        <div className=' w-64 md:w-[600px] h-44 md:h-[400px] bg-gradient-to-tr from-pink-500 via-violet-500 to-blue-500 absolute left-[40px] bottom-24 rounded-3xl overflow-hidden'>
                            <img src="assets/images/sd7.jpeg" alt="" className=' ml-10 mt-10 w-64 md:w-[600px] h-44 md:h-[400px] rounded-3xl transition-all duration-700 hover:-translate-y-5 hover:-translate-x-5' />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col my-20'>
                <div className=' flex flex-col justify-center items-center w-fit self-center gap-5'>
                    <h1 className=' text-3xl font-bold md:text-5xl text-center md:w-[60%]'>Editio AI takes customization to new heights with its vast selection of <span className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500'>artistic</span> styles.</h1>
                    <p className=' text-sm md:text-base md:w-[580px] text-gray-400 text-center'>Explore an extensive library of visually stunning filters, seamlessly blending your unique vision with the power of AI. With just a few clicks, you can achieve the perfect aesthetic that aligns with your brand, personal taste, or creative vision.</p>
                </div>

                <img src="assets/images/stable-diffusion-xl-4.jpeg" alt="" className=' md:w-[40%] self-center my-10 rounded-3xl' />
            </div>

            <div className=' flex flex-col my-20'>
                <div className=' flex flex-col justify-center items-center w-fit self-center gap-5'>
                    <h1 className=' font-bold text-3xl md:text-5xl text-center md:w-[60%]'>Precision of AI algorithms with the artistry of <span className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500'>professional</span> photographers.</h1>
                    <p className=' text-sm md:text-base md:w-[580px] text-gray-400 text-center'>This powerful collaboration between technology and human vision results in a harmonious blend of technical excellence and artistic finesse, elevating the quality and impact of the edited photographs to new heights.</p>
                </div>

                <div className=' flex max-md:flex-col justify-center items-center my-20 gap-10  md:px-[10%] px-10 max-md:text-center'>
                    <div className=' flex-1 flex flex-col justify-center items-center gap-3 '>
                        <h1 className=' text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-green-500'>70%</h1>
                        <span className=' font-bold'>Faster Editing Time </span>
                        <p className=' text-slate-400 w-[350px] text-sm'>Our advanced AI algorithms work tirelessly in the background, significantly reducing the time and effort required to achieve professional-grade edits.</p>
                    </div>
                    <div className=' border-[1px] opacity-40 h-72 border-gray-500 max-md:hidden'></div>
                    <div className=' flex-1 flex flex-col justify-center items-center gap-3 '>
                        <h1 className=' text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-blue-500'>86%</h1>
                        <span className=' font-bold'>Reduction in Editing Errors</span>
                        <p className=' text-slate-400 w-[350px] text-sm'>Say goodbye to missed details, inconsistent adjustments, and frustrating oversights. With our service, you can have peace of mind, knowing that every image will be meticulously enhanced and flawlessly edited.</p>
                    </div>
                </div>

            </div>

            <img src="assets/images/arrow.svg" alt="" className=' rotate-90 w-32 -m-10 md:w-40 self-center md:my-10' />
        </div>
    )
}

export default Features