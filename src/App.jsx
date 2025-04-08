import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      description: "Latest model with AI features",
      image: "https://via.placeholder.com/150",
      avgRating: 4.2,
      totalRatings: 10,
    },
    {
      id: 2,
      name: "Headphones",
      description: "Noise-canceling over-ear headphones",
      image: "https://via.placeholder.com/150",
      avgRating: 4.7,
      totalRatings: 15,
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track your health and fitness",
      image: "https://via.placeholder.com/150",
      avgRating: 4.5,
      totalRatings: 8,
    },
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating: (
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1)
              ).toFixed(1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Ratings</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
