const Products = ({products, addToCart}) => {
    return (
        <div className="container mx-auto px-4 mt-7">
            <h2 className="ml-5 text-3xl font-bold">Products</h2>   
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {products.map((eachItem) => (
                    <li key={eachItem.id} className="bg-white p-4 m-4 border-2 border-gray-300 rounded-lg">
                        <p className="text-xl font-bold">{eachItem.name}</p>
                        <p className="text-gray-600">Rs {eachItem.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                        onClick={() => addToCart(eachItem)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products