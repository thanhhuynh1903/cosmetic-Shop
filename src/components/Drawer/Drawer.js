import React from "react";
import useCartStore from "../../util/zustandCartState";
import CardOrder from "../CardOrder.js/CardOrder";
import { useNavigate } from "react-router-dom";

export default function Drawer() {
  const { isOpen, toggleDrawer, cart } = useCartStore(); // Destructuring state from Zustand store
  const navigate = useNavigate();
  const handleNavigate = () => {
    toggleDrawer();
    navigate("/checkout");
  };

  function calculateSubtotal(items) {
    // Calculate item totals and overall subtotal
    const itemTotals = items.map((item) => {
      const price = parseFloat(item.price);
      const total = price * item.quantity;
      return {
        name: item.name,
        price: price,
        quantity: item.quantity,
        total: total,
      };
    });

    // Calculate final subtotal
    const subtotal = itemTotals.reduce((sum, item) => sum + item.total, 0);
    return subtotal;
  }

  return (
    <main>
      {/* Drawer Section */}{" "}
      <section
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-full sm:w-[30rem] dark:bg-gray-800`} // w-full for mobile, sm:w-[30rem] for larger screens
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="flex justify-center">
          <h5
            id="drawer-right-label"
            className="inline-flex text-center items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            Shopping Bag
          </h5>
        </div>
        <button
          onClick={toggleDrawer}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <hr className="mb-5 text-[#96a3b3]" />
        <div className="space-y-2 overflow-y-auto max-h-[466px] ">
          {cart.map((item) => (
            <CardOrder cart={item} />
          ))}
          {!cart.length && <p className="text-center">No item in cart</p>}
        </div>
        <hr className="my-5 text-[#96a3b3]" />
        <div>
          <p className="text-sm text-[#96a3b3]">
            You have <strong>{cart.length} items</strong> in your bag
          </p>
        </div>
        {cart.length > 0 && (
          <div className="flex-direction flex flex-col">
            <div className="flex justify-between mb-5">
              <h4 className="font-bold">Subtotal </h4>
              <h5>${calculateSubtotal(cart)}</h5>
            </div>
            <article className="grid grid-cols gap-4">
              <button
                disabled={cart.length ? false : true}
                onClick={handleNavigate}
                className="px-4 py-2 text-sm font-medium text-center text-white bg-black  rounded-[20px] focus:outline-none hover:outline hover:outline-[#C5C7CA] hover:text-[#C5C7CA] focus:z-10 focus:ring-4 focus:ring-[#C5C7CA] "
              >
                Continue to checkout
              </button>
            </article>
          </div>
        )}
      </section>
      {/* Overlay to close drawer when clicked outside */}
      {isOpen && (
        <section
          className="w-screen h-full bg-black bg-opacity-80 fixed top-0 left-0 z-30"
          onClick={toggleDrawer}
        ></section>
      )}
    </main>
  );
}
