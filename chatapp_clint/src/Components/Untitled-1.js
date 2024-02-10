<div className='h-4/5 w-full flex flex-col bg-[#EDEAF1] px-3  md:px-5 md:pt-10 lg:pt-10  lg:px-20'>
            <div className='flex items-start flex-col mr-'>
            <p className='text-md ml-3 opacity-75'>Kundan</p>
            <div className='h-auto w-fit max-w-3xl p-3 px-5 rounded-t-lg rounded-r-xl bg-[#F1907A] overflow-auto flex flex-col'>{incomeing}</div>
            <p className='text-xs opacity-75'>12:02 pm</p>
            </div>

            <div className='flex flex-col items-end ml-16'>
            <p className='text-md mr-3 opacity-75'>Kundan</p>
            <div className='h-auto w-fit max-w-3xl p-3 px-5 rounded-t-lg rounded-l-xl bg-[#FFFFFF] overflow-auto flex flex-col'></div>
            <p className='text-xs opacity-75'>12:02 pm</p>
            </div>
        </div>

        
        <div className='font-Roboto  flex justify-center  items-center md:px-10 lg:px-10 lg:pb-14 md:pb-14 bg-white md:h-40  pb-2 h-24 w-full rounded-md'>
          <textarea rows={3} onChange={(e)=>{setmassage(e.target.value)}} placeholder='Enter Something...' className='py-4 h-full w-full p-3 mr-1 bg-transparent rounded-md outline-none text-xl overflow-y-scroll scrollbar-hide'/>
          <button onClick={onClick} className='bg-orange-500 h-14 w-40 rounded-md mr-2 text-white text-xl font-semibold'>Send</button>
          </div>