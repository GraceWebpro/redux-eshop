import { useSelector } from 'react-redux'
import CartCard from './CartCard'

function CartContainer() {

    const { cartItems, total, number } = useSelector((state) => state.cart);

    if (number === 0) {
        return (
        <section className='cart'>
            {/* cart header */}
            <header>
            <h2 style={{ color: 'black'}}>your cart</h2>
            <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
        );
    }
        
    return (
        <div>
            <header>Your Cart</header>
            {cartItems?.map((item) => {
                return (
                    <div className='cart'>
                        <CartCard key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                        rating={item.rating}
                        number={item.number} />
                    </div>
                )
            })}
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                <h4>
                    total <span>${total}</span>
                </h4>
                </div>
            </footer>
        </div>
    )
}

export default CartContainer;