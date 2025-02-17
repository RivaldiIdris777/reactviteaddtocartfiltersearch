import React from 'react'
import CartItems from './CartItems'
import { useDispatch, useSelector } from 'react-redux';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
}
  return (
    <div className={`top-0 right-0 bg-gray-700 shadow-2xl w-80 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ""}`}>
        <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
        <div className="p-5">
            {carts.map((item, key) => 
              <CartItems key={key} data={item} />
            )}
        </div>
        <div className="grid grid-cols-2">
            <button className="bg-black text-white" onClick={handleCloseTabCart}>
                CLOSE
            </button>
            <button className="bg-sky-600 text-white">CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab