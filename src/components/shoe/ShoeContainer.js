import { useSelector } from 'react-redux'
import ShoeCard from './ShoeCard'

function ShoeContainer() {

    const { shoes } = useSelector((state) => state.shoe)

    return (
        <div>
            <header style={{ color: 'black'}}>Shoes & Bags</header>
            {shoes.map((item) => {
                return (
                    <div className='cart'>
                        <ShoeCard key={item.id} {...item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ShoeContainer;