import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
    const { cart, removeFromCart, getTotalCartAmount } = useCart();

    return (
        <div className="container mt-24">
            <div className="mb-16">
                <div className="grid grid-cols-6 gap-4 text-gray-500 text-sm">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className="my-4" />
                {Object.entries(cart).map(([id, item]) => (
                    <div key={id}>
                        <div className="grid grid-cols-6 gap-4 items-center text-black my-2">
                            <img src={item.img} alt={item.name} className="w-12" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{item.count}</p>
                            <p>${item.price * item.count}</p>
                            <p
                                onClick={() => removeFromCart(id)}
                                className="cursor-pointer text-red-600"
                            >
                                x
                            </p>
                        </div>
                        <hr className="my-4" />
                    </div>
                ))}
            </div>
            <div className="container flex flex-col lg:flex-row justify-between gap-16">
                <div className="flex-1 space-y-4">
                    <h2 className="text-xl font-bold">Cart Totals</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between text-gray-600">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-gray-600">
                            <p>Delivery Fee</p>
                            <p>$2</p>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold">
                            <p>Total</p>
                            <p>${getTotalCartAmount() + 2}</p>
                        </div>
                        <button className="w-full lg:w-1/3 bg-orange-800 text-white py-3 rounded-md">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <p className="text-gray-600">If you have a promo code, enter it here:</p>
                    <div className="flex items-center bg-gray-200 rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Promo code"
                            className="flex-1 bg-transparent px-4 py-2 outline-none"
                        />
                        <button className="bg-black text-white px-6 py-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
