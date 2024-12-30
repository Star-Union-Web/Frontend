import React, { useState } from 'react'
import product1 from '../../assets/p1.png'
import product2 from '../../assets/p2.png'
import product3 from '../../assets/p3 (1).jpg'
import product4 from '../../assets/p3 (2).jpg'
import product5 from '../../assets/p3 (3).jpg'
import { BsArrowRightShort } from "react-icons/bs";
import { useCart } from '../../Pages/Cart/CartContext';
import { Link } from 'react-router-dom';


const ProductsData = [
    {id: 1, name: 'Product 1',price: 10, img: product1, rating : 4.5, totalRating: 100,},
    {id: 2, name: 'Product 1',price: 10, img: product2, rating : 4.5, totalRating: 100,},
    {id: 3, name: 'Product 1',price: 10, img: product3, rating : 4, totalRating: 90,},
    {id: 4, name: 'Product 1',price: 10, img: product4, rating : 4.5, totalRating: 90,},
    {id: 5, name: 'Product 1',price: 10, img: product5, rating : 5, totalRating: 120,},

]

const Products = () => {
    const { addToCart, removeFromCart, cart } = useCart();


  return (
    <div className='mt-10 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
                <h1 data-aos = "fade-up" className='text-3xl font-bold text-secondary'>
                    Explore Our Skin Care Product</h1>
                <p data-aos = "fade-up"  className='text-xs text-gray-400'>your path to Flawless Skin Starts Here. Harness the power of Nature for Beatiful Skin.</p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center
                gap-5'>
                    {/* card section */}
                    {ProductsData.map((data) => (
                        <div
                        data-aos = "fade-up"
                        data-aos-delay = {data.aosDelay}
                        key={data.id}
                        className='border border-secondary rounded-lg shadow-md overflow-hidden w-[200px]'
                        >
                            <img
                                src={data.img}
                                alt={data.name}
                                className='w-full h-[150px] object-cover'
                            />
                            <div className='p-4'>
                                <h2 className='font-bold text-lg text-secondary'>{data.name}</h2>
                                <p className='text-sm text-gray-500'>${data.price}</p>
                                <div className='flex items-center text-yellow-500 mt-2'>
                                    <span>
                                        {'★'.repeat(Math.floor(data.rating))}
                                        {data.rating % 1 !== 0 && (
                                            <span className='text-gray-400'>★</span>
                                        )}
                                        </span>
                                    <span className='text-gray-400'>
                                        {` (${data.totalRating})`}
                                    </span>
                                </div>

                                {/* Add/Remove Section */}
                                <div className='flex items-center mt-4 gap-2'>
                                        {cart[data.id] ?.count ? (
                                            <>
                                                <button
                                                    className='bg-gray-500 text-white px-2 py-1 rounded-lg text-bold '
                                                    onClick={() => removeFromCart(data.id)}
                                                >
                                                    -
                                                </button>
                                                <span className='text-sm font-semibold'>
                                                    {cart[data.id].count}
                                                </span>
                                                <button
                                                    className='bg-green-500 text-white px-2 py-1 rounded-lg'
                                                    onClick={() => addToCart(data.id , data.price , data.name , data.img)}
                                                >
                                                    +
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className='bg-secondary text-white px-4 text-sm py-2 rounded-lg
                                                hover:bg-white hover:border hover:border-secondary hover:text-secondary'
                                                onClick={() => addToCart(data.id , data.price , data.name , data.img)}
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='flex items-center justify-center '>
                <Link to = "/shop" className='flex items-center justify-center gap 2 mt-10 bg-secondary text-white
                 py-2 px-4 rounded-lg hover:bg-white hover:border hover:border-secondary hover:text-secondary'>
                    Explore All <BsArrowRightShort className='text-2xl' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Products