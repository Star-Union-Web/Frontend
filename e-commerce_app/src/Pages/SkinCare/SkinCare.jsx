import React from 'react'
import { useCart } from '../Cart/CartContext'
import face from '../../assets/skinCare/face.jpg'
import ball from '../../assets/skinCare/ball_massag.jpg'
import { useState } from 'react'


const ProductsData = [
    {id: 1, name: 'protuction face',price: 10, img: face, rating : 4.5, totalRating: 100,},
    {id: 2, name: 'ball massag',price: 10, img: ball, rating : 4.5, totalRating: 100,},

]

const SkinCare = () => {

    const { addToCart, removeFromCart, cart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

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
                                <div className='flex items-center mt-4 gap-3 justify-between'>
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
                                                hover:bg-white hover:border hover:border-secondary hover:text-secondary
                                                transition duration-300 ease-in-out'
                                                onClick={() => addToCart(data.id , data.price , data.name , data.img)}
                                            >
                                                Add
                                            </button>
                                        )}
                                         {/* View Details Button */}
                                         <button
                                        className="bg-secondary text-white px-4 text-sm py-2 rounded-lg hover:bg-white
                                          hover:border hover:border-secondary hover:text-secondary
                                           transition duration-300 ease-in-out"
                                        onClick={() => setSelectedProduct(data)}
                                        >
                                        View
                                        </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Modal Section */}
            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-1 right-2 text-gray-500 text-2xl hover:text-secondary"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>

                        <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover rounded-md mt-3" />
                        <h2 className="text-xl font-bold text-secondary mt-2">{selectedProduct.name}</h2>
                        <p className="text-gray-500 mt-1">${selectedProduct.price}</p>
                        <div className="flex items-center text-yellow-500 mt-2">
                            <span>
                            {"★".repeat(Math.floor(selectedProduct.rating))}
                            {selectedProduct.rating % 1 !== 0 && <span className="text-gray-400">★</span>}
                            </span>
                            <span className="text-gray-400"> ({selectedProduct.totalRating})</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            This is a great product with high quality and great customer reviews.
                        </p>

                        <button
                            className='mt-4  bg-secondary text-white px-4 text-sm py-2 rounded-lg
                             hover:bg-white hover:border hover:border-secondary hover:text-secondary
                             transition duration-300 ease-in-out'
                            onClick={() => {
                            addToCart(selectedProduct.id, selectedProduct.price, selectedProduct.name, selectedProduct.img);
                            setSelectedProduct(null);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}


        </div>
    </div>
  )
}

export default SkinCare