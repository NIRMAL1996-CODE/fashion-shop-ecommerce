
import { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({product}) =>{
    const { addToCart } = useContext(ShopContext); 
  return (
    <div className='leftpart flex flex-row justify-between gap-10 items-center'>
      <div className='flex flex-row justify-between gap-4'>
        <div>
          <img src={product.image} alt="image" className='h-[200px] w-[300px] m-2 ' />
          <img src={product.image} alt="image" className='h-[200px] w-[300px] m-2 '/>
          <img src={product.image} alt="image" className='h-[200px] w-[300px] m-2 '/>
        </div>
        <div>
         <img src={product.image} alt="mainimage" className='mainimage m-4 h-[400px] w-[600px]'/>
        </div>
        </div>
        <div className='rightpart '>
          <h1 className='text-4xl font-bold'>{product.name}</h1>
          <div className='leftpart flex flex-row justify-self-start'>
            <FaStar className='text-yellow-600 text-4xl'/>
            <FaStar className='text-yellow-500 text-4xl'/>
            <FaStar className='text-yellow-400 text-4xl'/>
            <FaStar className='text-yellow-300 text-4xl'/>
            <FaRegStar className="text-yellow-400 text-4xl" />
            <p className='text-2xl'>(130)</p>
          </div>
          <div className='text-2xl'>${product.new_price}</div>
          <div className="line-through text-gray-500 text-2xl">${product.old_price}</div>
          <div className='description'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam facere, voluptatem aspernatur recusandae quos rerum suscipit obcaecati enim ipsa accusantium iure quisquam amet quae animi minus similique beatae fugiat.</p>
          </div>
           {/* Sizes */}
        <div>
          <h2 className="font-semibold mb-2">Select Size</h2>
          <div className="flex space-x-2">
            {["S","M","L","XL","XXL"].map(size => (
              <div key={size} className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-200">{size}</div>
            ))}
          </div>
        </div>

       {/* Add to cart button */}
      <button className="bg-blue-500 cursor-pointer text-white p-2 mt-2 rounded hover:bg-blue-600 transition"  onClick={() => addToCart(product.id)}
      >ADD TO CART
        </button>
        
        {/* Category & Tags */}
        <div className="text-gray-600 space-y-1">
          <div>Category: <span className="font-semibold">Women, T-Shirt, Crop Top</span></div>
          <div>Tags: <span className="font-semibold">Modern, Latest, Trend Shorts</span></div>
        </div>

      </div>
    </div>
  )
}

export default ProductDisplay