import React from 'react'
import { addToCart } from '../cart/cartSlice'
import { useDispatch } from 'react-redux'
//import { useGetProductsQuery } from '../features/apiSlice'


function ProductCard({ id, title, price, img, rating, number }) {

    const dispatch = useDispatch();

    
    return (
        <article className='cart-item'>
            <img src={img} alt={title} className="product__image" />

            <div className="product__info">
                <h4 className='title'>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <div className="product__rating" style={{ display: 'flex', marginLeft: '80px'}}>
                    {Array(rating).fill().map((_, i) => ( <p>⭐️</p> ))}
                </div>
                <button className='add-btn' onClick={() => dispatch(addToCart({ id, title, img, price, number }))}>Add to Cart</button>

            </div>

        </article>
    )
}

export default ProductCard;


