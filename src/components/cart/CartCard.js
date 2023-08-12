import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { increaseQ, decreaseQ, removeItem } from './cartSlice'
import { useDispatch } from 'react-redux'


function CartCard({ id, img, title, price, number}) {
    
    const dispatch = useDispatch()
    
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn' onClick={() => dispatch(increaseQ(id))}>
                <KeyboardArrowUpIcon />
                </button>
                {/* amount */}
                <p className='amount'>{number}</p>
                {/* decrease amount */}
                <button className='amount-btn' onClick={() => dispatch(decreaseQ(id))}>
                <KeyboardArrowDownIcon />
                </button>
            </div>
        </article>
    )
}

export default CartCard