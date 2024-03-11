import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed w-full h-screen z-[2]'>
        <div className='absolute top-[5%] w-full text-xl  text-zinc-500 flex justify-center items-center  py-10 '>Documents</div>
        <h1 className='absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 leading-none tracking-tight'>Docs.</h1>
      </div>
    </>
  )
}

export default Background
