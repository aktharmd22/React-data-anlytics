import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
             <div className='lg:col-span-2'>
             <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Wants tips & tricks to optimize your flow
             </h1>
             <p>
                Sign up to your newsletter and stay up to date.
             </p>
             </div>
             <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" name="" id="" placeholder='Enter Email'/>
                    <button className='bg-[#0097df] text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3'>Notify me</button>
                </div>
                <p>
                    we care about the protection of your data. Read our <span className='text-[#0097df]'>privacy policy</span>
                </p>
             </div>
        </div>

    </div>
  )
}

export default NewsLetter