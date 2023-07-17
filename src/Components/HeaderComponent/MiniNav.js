import React from 'react';

const MiniNav = () => {
  return (
    <>
      <div className='w-full p-[7px] bg-black flex flex-wrap justify-between'>
        <div className='ml-[30px]'>
        <i class="fa-brands fa-facebook-f fa-2xs text-[#9F9F9F]"></i><span className='ml-[20px]'><i class="fa-brands fa-youtube fa-2xs text-[#9F9F9F]"></i></span>
        </div>
        <div>
        <i class="fa-solid fa-phone fa-2xs text-[red]"></i><span className='ml-[10px] text-[#9F9F9F] md:text-[17px] text-[12px]'>Õnnetuse korral helista 112</span>
        </div>
        <div className='text-[#9F9F9F] mr-[30px] md:text-[17px] text-[12px] mt-[8px]'>
        на русском
        </div>
      
      </div>
    </>
  )
}

export default MiniNav
