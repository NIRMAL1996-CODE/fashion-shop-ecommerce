// import React, { useContext } from 'react'
// import { ShopContext } from '../../context/ShopContext';

// const CartItems = () => {
//    const { cartItems, allProducts, removeFromCart, getTotalCartAmount  } = useContext(ShopContext);
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//       {Object.keys(cartItems).length === 0 && <p>Your cart is empty</p>}
//       {Object.keys(cartItems).map(id => {
//         const product = allProducts.find(p => p.id === Number(id));
//         return (
//           <div key={id} className="flex items-center gap-4 mb-4 p-4 border rounded shadow-sm">
//             {/* --- Product Image --- */}
//             <img src={product.image} alt={product.name} className="h-24 w-24 object-cover rounded" />

//             {/* --- Product Info --- */}
//             <div className="flex-1">
//               <h2 className="font-semibold text-lg">{product.name}</h2>
//               <p className="text-gray-600">Price: ${product.new_price}</p>
//               <p className="text-gray-600">Quantity: {cartItems[id]}</p>
//               <p className="font-semibold">Total: ${product.new_price * cartItems[id]}</p>
//             </div>

//             {/* --- Remove Button --- */}
//             <button
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               onClick={() => removeFromCart(product.id)}
//             >
//               Remove
//             </button>
//           </div>
//         )
//       })}

//         {/* --- TOTAL AMOUNT --- */}
//       {Object.keys(cartItems).length > 0 && (
//         <div className="mt-6 p-4 border-t-2 border-gray-300 text-right">
//           <h2 className="text-2xl font-bold">Total Amount: ${getTotalCartAmount()}</h2>
//         </div>
//       )}

//     </div>
//   )
// }

// export default CartItems

import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
  const { cartItems, allProducts, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* --- Check if cart is empty --- */}
      {allProducts.every(p => !cartItems[p.id] || cartItems[p.id] === 0) && (
        <p>Your cart is empty</p>
      )}

      {/* --- Loop through allProducts to show items in cart --- */}
      {allProducts.map(product => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="flex items-center gap-4 mb-4 p-4 border rounded shadow-sm">
              {/* Product Image */}
              <img src={product.image} alt={product.name} className="h-24 w-24 object-cover rounded" />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.new_price}</p>
                <p className="text-gray-600">Quantity: {cartItems[product.id]}</p>
                <p className="font-semibold">Total: ${product.new_price * cartItems[product.id]}</p>
              </div>

              {/* Remove Button */}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          )
        }
        return null;
      })}

      {/* Total Amount */}
      {allProducts.some(p => cartItems[p.id] > 0) && (
        <div className="mt-6 p-4 border-t-2 border-gray-300 text-right">
          <h2 className="text-2xl font-bold">Total Amount: ${getTotalCartAmount()}</h2>
        </div>
      )}
    </div>
  )
}

export default CartItems;
