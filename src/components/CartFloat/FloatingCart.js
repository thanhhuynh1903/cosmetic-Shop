import React from 'react';
import { ShoppingBag } from 'lucide-react';
import './FloatingCart.css';
import useCartStore from '../../util/zustandCartState';
export default function FloatingCart() {
  const { toggleDrawer } = useCartStore();
  return (
    <div className="relative">
      {/* Your page content */}

      {/* Floating Cart Button */}
      <div className="floating-cart">
        <button className="cart-button" onClick={toggleDrawer}>
        <ShoppingBag />
        </button>
      </div>
    </div>
  );
}
