import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const MainNav = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <>
      <div className='lg:p-[30px] p-[2px] bg-[#191919] flex justify-between'>
        <div className='flex lg:justify-between mr-[2rem]'>
        <div className='p-[10px] bg-[white] text-[black] font-bold text-center'>PAASTEAMET</div>
        <div className='p-[10px] lg:flex hidden text-center text-[#9F9F9F]'>Politsei- ja Piirivalveamet </div>
        <div className='p-[10px] lg:flex hidden border-l-2 border-[#6F6F6F] text-[#9F9F9F]'>Transpordiamet</div>
        </div>
        <div className='lg:flex mt-[12px] hidden'>
           <ul className='flex mr-[20px]'>
            <li className='text-[#F0F0F0]'>Miks see oluline on?</li>
            <li className='text-[#C8C8C8] md:ml-[15px]'>Mida sa öelda ja teha saad</li>
            <li className='text-[#C8C8C8] md:ml-[15px]'>Sinu suhe alkoholiga</li>
           </ul>
        </div>

        {
           toggle?<AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-black z-50 text-2xl lg:hidden flex ml-[155px] md:mr-[-50%]'/>
           :<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl z-50 lg:hidden flex ml-[155px] md:mr-[-50%]'/>
        }
          {/* Responsive Navbar */}
          <div className=''>
          <ul className={`duration-300 md:flex lg:hidden fixed top-[45px] bg-[gray] flex-col w-full h-full p-[60px] ${toggle?`left-[0]`:`left-[-100%]`}`}>
            <li className='text-black text-[25px]'>Miks see oluline on?</li>
            <li className='text-black text-[25px]'>Mida sa öelda ja teha saad</li>
            <li className='text-black text-[25px]'>Sinu suhe alkoholiga</li>
            <li className='text-black text-[25px]'><div className='text-[black]'>Politsei- ja Piirivalveamet </div></li>
            <li className='text-black text-[25px]'><div className='border-l-2 border-[black] text-[black]'>Transpordiamet</div></li>
           </ul>
          </div>
      </div>
    </>
  )
}

export default MainNav
