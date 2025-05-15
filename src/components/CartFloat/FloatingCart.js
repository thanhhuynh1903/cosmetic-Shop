import React, { useEffect, useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import './FloatingCart.css';
import useCartStore from '../../util/zustandCartState';

export default function FloatingCart() {
  const { isOpen, toggleDrawer, cart } = useCartStore();
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    if (cart?.length > 0) {
      setIsRinging(true);
      const timeout = setTimeout(() => {
        setIsRinging(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [cart]);

  return (
    <div className="relative">
      {/* Floating open button */}
      {!isOpen && (
        <div className="floating-cart">
          <button
            className={`cart-button ${isRinging ? 'ring' : ''}`}
            onClick={toggleDrawer}
            aria-label="Open cart"
          >
            <ShoppingBag />
            {cart?.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </button>
        </div>
      )}
      {/* Floating close button (shows when cart is open) */}
      {isOpen && (
        <div className="floating-cart">
          <button
            className="cart-button"
            onClick={toggleDrawer}
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>
      )}
    </div>
  );
}