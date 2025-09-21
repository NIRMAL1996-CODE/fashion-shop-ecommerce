import React from 'react'
import newCollection from '../../data/newCollection'
import Item from '../items/Item'

const NewCollections = () => {
 
  return (
    <div className='flex flex-col justify-center items-center m-[10px] mt-20 border-t-2 border-gray-300'>
       <h1 className='text-6xl font-bold mt-20 m-10'>NEW COLLECTIONS</h1>
       <div className='grid grid-cols-3 gap-10 p-[10px] items-center'>
        { newCollection.map((item,i)=>(
          <Item key={i}
           id={item.id}
           name={item.name } 
           image={item.image}
           new_price={item.new_price} 
           old_price={item.old_price} />
        ))}
       </div>
    </div>
  )
}

export default NewCollections