const CartSummary = ({subTotal, progress}) => {
    return (
        <div className="container mx-auto px-4 mt-7">
            <h2 className="ml-5 text-3xl font-bold">Cart Summary</h2>   
            <div className="bg-white p-4 m-4 shadow-lg border-2 border-gray-300 rounded-lg">
                <div className="flex justify-between">
                    <p className="font-bold">Subtotal:</p>
                    <p className="font-bold">Rs {subTotal}</p>
                </div>
                <hr className="mt-2 mb-2"/>
                <div>
                    {subTotal < 1000 ? (
                        <div className="bg-blue-200 rounded-lg p-4">
                            <p className="pb-3">Add Rs {1000 - subTotal} more to get a FREE Wireless Mouse!</p>
                            <div className="bg-blue-500 h-4 rounded" style={{width: `${progress}%`}}>
                            </div>
                        </div>
                    ): (
                        <p>You got a free Wireless Mouse</p>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default CartSummary