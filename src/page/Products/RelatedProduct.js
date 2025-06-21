import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingBag, Eye, Share2 } from "lucide-react";
import Card from "../../components/Card/Card";

const RelatedProducts = ({ products = [], isLoading = false, error }) => {
  if (isLoading) {
    return (
      <div className="mt-16 px-4 bg-gradient-to-b from-amber-50/30 to-white py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Related Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 w-full h-64 animate-pulse" />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-amber-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-amber-100 rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-amber-100 rounded-full w-1/2 animate-pulse"></div>
                    <div className="h-5 bg-amber-100 rounded-full w-1/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-red-600 text-lg font-semibold mb-2">
              Error loading related products
            </div>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 bg-gradient-to-b from-amber-50/30 to-white">
      {/* Related Products Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Related Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Discover more beautiful products carefully selected for your
              beauty routine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                expired={true}
                isSwiper={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
