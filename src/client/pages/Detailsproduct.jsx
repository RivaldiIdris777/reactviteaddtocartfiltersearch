import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { products } from '../../data/products';
import { addToCart } from '../../stores/cart';

const Detailsproduct = () => {
const {slug} = useParams();
const [detail, setDetail] = useState([]);
const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();
useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0) {
        setDetail(findDetail[0]);
    }else {
        window.location.href = '/';
    }    
}, [slug])
const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
}
const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
}

const handleAddToCart = () => {
    dispatch(addToCart({
        productId: detail.id,
        quantity: quantity
    }))
}

return (
<>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover"
                            src={detail.image}
                            alt="Product Image" />
                    </div>
                    <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                            <button
                                className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={handleAddToCart}>Add
                                to Cart</button>
                        </div>
                        <div className="w-1/2 px-2">
                            <button
                                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add
                                to Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{detail.name}</h2>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">${detail.price}</span>
                            <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                        <div className="flex items-center mt-2">
                            <button
                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                            <button
                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                            <button
                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                            <button
                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                            <button
                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {detail.description}
                        </p>
                    </div>
                    <div className="flex gap-5 mt-3">
                        <div className="flex gap-2 justify-center items-center">
                            <button className="bg-gray-800 h-full text-gray-50 w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                            <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                            <button className="bg-gray-800 h-full text-gray-50 w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Detailsproduct