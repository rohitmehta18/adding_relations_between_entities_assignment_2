import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        ⭐ {product.avgRating} ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
