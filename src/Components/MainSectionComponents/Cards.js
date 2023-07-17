import React from 'react'

const Cards = ({textValue,imgUrl}) => {
  return (
    <>
      <div className='lg:w-[40%] w-[70%] bg-[#C4C4C466] flex flex-col align-center justify-center m-[20px] items-center'>
        <div className={`mt-[2rem] bg-[red] rounded-[5rem] cardimg`}>
          <img src={require('./card1.png')} className='h-full w-full rounded-[5rem]'/>
        </div>
        <div className=' mt-[3rem] mb-[1rem] ml-[1rem]'><i className="fa-brands fa-facebook-f fa-sm"></i><span className='text-[#101010] text-[0.8rem] ml-[10px]'>{textValue}</span></div>
      </div>
    </>
  )
}

export default Cards
