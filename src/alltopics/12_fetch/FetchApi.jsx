import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [productsData,setProductsData] = useState(null);


    async function getProducts() {
        let resp = await fetch("https://fakestoreapi.in/api/products");
        let data = await resp.json();
        console.log(data);
        setProductsData(data);
         
    }


useEffect(() => {

    getProducts();
    
},[])

  return (
    <div>
<header className='p-3 bg-yellow-300'>
        <h1 className='text-center font-bold ' >All Products</h1>

    </header>  

    <section className="p-3 bg-gray-100">
  {productsData === null ? (
    <h2 className="text-center py-80 font-bold">Loading...</h2>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productsData.products?.map((product) => {
        const { id, brand, category, description, image, price, title } = product;

        return (
          <div key={id} className="bg-white p-4 rounded shadow">
            <img src={image} alt={title} className="h-32 w-32 object-contain mx-auto mb-2" />
            <h2 className="font-semibold text-lg">{title.slice(0, 45)}...</h2>
            <p className="text-sm text-gray-600">{description.slice(0, 50)}...</p>
            <p className="text-sm">Brand: <span className="font-medium">{brand}</span></p>
            <h3 className="text-blue-600 font-bold mt-1">Price: ₹{price}</h3>

<button 
  onClick={() => handleAddToCart(product)}
  className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 block mx-auto">
  Add to Cart
</button>






          </div>
        );
      })}
    </div>
  )}
</section>

    
      </div>
  )
}

export default FetchApi