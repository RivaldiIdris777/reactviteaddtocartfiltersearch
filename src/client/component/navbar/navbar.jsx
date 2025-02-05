import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleStatusTab } from '../../../stores/cart';

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Products",
      link: "/#products",
    },
    {
      id: 3,
      name: "Cart",
      link: "/cart",
    },    
];

const navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);  
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(items => total += items.quantity);
    setTotalQuantity(total);
  }, [carts])
  
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }
  return (
    <>
        <div className="shadow-xl">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <h6>Pr'dct</h6>
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='flex items-center cursor-pointer' onClick={handleOpenTabCart}>
                <span className='bg-red-500 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center ml-0.5'>{totalQuantity}</span>
                <MdOutlineShoppingCart  className='text-xl'/>                
              </div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar