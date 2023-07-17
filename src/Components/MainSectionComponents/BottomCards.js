import React from 'react'
// import Cards from './Cards'
// const cardurl = './card1.png'

const BottomCards = () => {
  return (
    <>
    
        <div className='flex justify-center bg-[#F5F5F5] items-center flex-col'>
      <div className='p-[20px] bg-[#F5F5F5] text-[#101010]'>
        <h1 className='font-bold text-[2rem] text-center'>Jälgi meid Facebookis!</h1>
        </div>
        
     <div className='w-[95%] flex lg:flex-nowrap flex-wrap justify-center m-[20px] items-center'>

      <div className='lg:w-[40%] w-[70%] bg-[#C4C4C466] flex flex-col  justify-center m-[20px] items-center'>
        <div className={`mt-[2rem] bg-[red] rounded-[5rem] cardimg`}>
          <img src={require('./card1.png')} alt='loading...' className='h-full w-full rounded-[5rem]'/>
        </div>
        <div className=' mt-[3rem] mb-[1rem] ml-[1rem]'><i className="fa-brands fa-facebook-f fa-sm"></i><span className='text-[#101010] text-[0.8rem] ml-[10px]'>/Paasteamet</span></div>
      </div>

      <div className='lg:w-[40%] w-[70%] bg-[#C4C4C466] flex flex-col align-center justify-center m-[20px] items-center'>
        <div className={`mt-[2rem] p-[0.1rem] bg-[white] rounded-[5rem] cardimg`}>
          <img src={require('./card3.png')} alt='loading...' className='flex justify-center items-center rounded-[5rem]'/>
        </div>
        <div className=' mt-[3rem] mb-[1rem] ml-[1rem]'><i className="fa-brands fa-facebook-f fa-sm"></i><span className='text-[#101010] text-[0.9rem] ml-[10px]'>/Transpordiamet</span></div>
      </div>

      <div className='lg:w-[40%] w-[70%] bg-[#C4C4C466] flex flex-col align-center justify-center m-[20px] items-center'>
        <div className={`mt-[2rem] p-[.2rem] bg-[white] rounded-[5rem] cardimg`}>
          <img src={require('./card2.png')} alt='loading...' className='rounded-[5rem]'/>
        </div>
        <div className=' mt-[3rem] mb-[1rem] ml-[1rem]'><i className="fa-brands fa-facebook-f fa-sm"></i><span className='text-[#101010] text-[0.8rem] ml-[10px]'>/Politsei- ja Piirivalveamet</span></div>
      </div>
      </div>
          {/* <Cards textValue={'/Paasteamet'}/>
          <Cards textValue={'/Transpordiamet'}/>
          <Cards textValue={'/Politsei- ja Piirivalveamet'}/> */}
    </div>
    </>
  )
}

export default BottomCards
