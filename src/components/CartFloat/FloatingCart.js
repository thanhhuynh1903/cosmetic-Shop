import React from 'react';
import { ShoppingBag } from 'lucide-react';
import './FloatingCart.css';
import useCartStore from '../../util/zustandCartState';
export default function FloatingCart() {
  const { isOpen, toggleDrawer } = useCartStore();
  return (
    
    <div className="relative">
      {!isOpen &&
      <div className="floating-cart">
        <button className="cart-button" onClick={toggleDrawer}>
        <ShoppingBag />
        </button>
      </div>
      }
    </div>
  );
}
