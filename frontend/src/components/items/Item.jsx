import React from 'react'

const Item = (props) => {

  return (
    <div className='flex flex-col justify-center items-center w-[250px] border-2 border-gray-400 m-t-[10px] p-[10px] rounded-2xl '>
      <div>
        <img className= 'h-[300px] flex justify-center items-center' src={props.image} alt="images" />
      </div>
     
     <div className='flex flex-row justify-between gap-5 items-center text-center '>
      <p className=' text-xl font-bold font-serif tracking-wider text-red-400'>{props.name}</p>
        <div>NewPrice ${props.new_price}</div>
        <div>OldPrice ${props.old_price}</div>
     </div>
    </div>
  )
}

export default Item; 