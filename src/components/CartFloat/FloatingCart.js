import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
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
      }, 2000); // 2 seconds for the ringing animation

      return () => clearTimeout(timeout);
    }
  }, [cart]);

  return (
    <div className="relative">
      {!isOpen && (
        <div className="floating-cart">
          <button
            className={`cart-button ${isRinging ? 'ring' : ''}`}
            onClick={toggleDrawer}
          >
            <ShoppingBag />
            {cart?.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
