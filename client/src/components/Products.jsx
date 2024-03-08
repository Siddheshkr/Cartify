import React, { useState, useEffect } from "react";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setSearchQuery } from "../Redux/ProductSlice";

function Products() {
  const dispatch = useDispatch();
  const { data: allProducts, searchQuery } = useSelector(
    (state) => state.products
  );
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts({ searchQuery }));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedProducts(filteredProducts);
  }, [allProducts, searchQuery]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cards = displayedProducts.map((product) => (
    <div
      className="card card-compact w-11/12 h-[450px] bg-base-100 hover:scale-105 transition-all duration-150 shadow-xl mt-16"
      key={product.id}
    >
      <figure>
        <img className="w-56 h-60 mt-5 pb-2" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <span className="text-green-800 font-bold">
          Price: &#8377;{product.price}
        </span>
        <div className="card-actions justify-center">
          <button
            className="btn w-56 bg-black text-white border-none hover:bg-neutral-900 rounded-full text-lg"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1 pt-5">
        {cards}
      </div>
    </>
  );
}

export default Products;
