import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumb/Breadcrumb.jsx';
import ProductDisplay from '../components/productDisplay/ProductDisplay.jsx';
import Description from '../components/description/Description.jsx';
const Product = () => {
  const {allProducts}= useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e)=> e.id ===Number(productId))
  return (
    <div>
       <Breadcrumbs product={product}/>
       <ProductDisplay product={product}/>
       <Description/>
    </div>
  )
}

export default Product