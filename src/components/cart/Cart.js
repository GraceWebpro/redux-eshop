import CartContainer from './CartContainer'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './cartSlice'


function Cart() {

    const { cartItems } = useSelector((state) => state.cart);
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);
    return (
        <div>
            <CartContainer />
        </div>
    )
}

export default Cart;