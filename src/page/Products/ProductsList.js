//Mai fix lai cach fetch Api nay de toi uu performance , recommend nen de ben shoppingpage
import React from "react";
import Card from "../../components/Card/Card";

export default function ProductsList({ products, loading }) {
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <Card key={product.id} product={product} expired={true} />
      ))}
    </div>
  );
}
