import React from 'react'

const SingleProduct = ({title, image, price}) => {
 return (
  <div className="product">
   <img src={image} alt={title} className="product-img" />
   <h4 className="product-title">{title}</h4>
   <h4 className="product-price">{price}</h4>
  </div>
 )
}

export default SingleProduct
