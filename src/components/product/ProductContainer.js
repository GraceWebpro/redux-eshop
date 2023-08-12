import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function ProductContainer() {

    const { products } = useSelector((state) => state.product)

    return (
        <div>
            <header style={{ color: 'white'}}>Phones & Tablets</header>
            {products.map((item) => {
                return (
                    <div className='cart'>
                        <ProductCard key={item.id} {...item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductContainer;