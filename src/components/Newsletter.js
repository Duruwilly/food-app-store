import React from 'react'

const Newsletter = () => {
  return (
    
    <div className='bg-newsletter bg-fixed newsletter bg-no-repeat bg-center relative w-full'>
     <div className="overlay">
      <div className="newsletter-container">
       <h1 className='text-center text-5xl text-white font-bold'>Get the latest update from Lfoods</h1>
       <p className='text-center text-3xl text-white mt-12'>join our mailing list</p>
       <form action="">
        <div className='flex w-full border-2 bg-primary border-primary rounded-lg my-12'>
        <input type="email" name="" id="" placeholder='Enter your email' className='w-full py-7 pl-10 text-3xl rounded-r-lg block focus:outline-none placeholder:text-3xl ' />
        <button className='bg-primary px-16 text-3xl text-white'>submit</button>
        </div>
       </form>
      </div>
     </div>
    </div>
  )
}

export default Newsletter