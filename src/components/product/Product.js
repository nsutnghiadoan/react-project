import React, { useState } from 'react'
import '../../assets/css/_product.scss'
import ProductDetail from './ProductDetail';
import ListProduct from './ListProduct';
export default function Product() {
  const [prodId, setProdId] = useState(-1)
  return (
    <>
    {prodId > -1 ? (
        <ProductDetail prodId={prodId} />
      ) : (
        <ListProduct setProductId={setProdId} />
      )}
    
    </>
  )
}
