const CartList = ({cartList, handleQuantityChange, subTotal, FREE_GIFT}) => {
    return (
        <div className="container mx-auto px-4 mt-7">
            {cartList.length === 0 ? 
            <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg px-3 py-3 m-4 border-gray-300">
                <p className="p-3 text-xl">Your cart is Empty</p>
                <p className="p-3">Add some products to see them here!</p>
            </div> : 
            <div>
                <h2 className="ml-5 text-3xl font-bold">Cart Items</h2>    
                {cartList.map((item) => (
                    <div className="bg-white shadow-lg rounded-lg px-3 py-3 m-4 border-gray-300">
                        <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xl font-bold">{item.name}</p>
                            <p>Rs{item.price} x {item.quantity} = Rs{item.quantity * item.price}</p>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <button className="bg-red-500 text-white rounded h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, -1)}>
                                -</button>
                            <p>{item.quantity}</p>
                            <button className="bg-green-500 text-white rounded h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        </div>
                    </div>    
                ))}
             </div>
            }          
            {subTotal >= 1000 ?
            (
                <div className="bg-white shadow-lg rounded-lg px-3 py-3 m-4 border-gray-300">
                        <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xl font-bold">{FREE_GIFT.name}</p>
                            <p>Rs0 x 1 = Rs0</p>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <p className="bg-green-400 text-green-700 p-2 rounded-lg">FREE GIFT</p>
                        </div>
                        </div>
                    </div>    
            ) : null}  
        </div>
    )
}

export default CartList