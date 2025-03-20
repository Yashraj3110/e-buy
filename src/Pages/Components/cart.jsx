import { useEffect, useState } from "react";

export default function Cart({ CartOpen, onCartClose }) {
    const [isCartOpen, setIsCartOpen] = useState(CartOpen);

    useEffect(() => {
        console.log(CartOpen);
        setIsCartOpen(CartOpen);
        const element = document.getElementsByClassName("fixed")[0];
        if (element) {
            element.style.display = "block";
        }
    }, [CartOpen]);

    function CartClose() {
        setIsCartOpen(false);
        if (onCartClose) {
            onCartClose();
        }
    }

    return (
        <div className={`fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 ${isCartOpen ? "block" : "hidden"}`} style={{ zIndex: "20" }}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
                <button onClick={CartClose} className="text-gray-600 focus:outline-none">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                    <div className="mx-3">
                        <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                        <div className="flex items-center mt-2">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                            <span className="text-gray-700 mx-2">2</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-gray-600">$20</span>
            </div>
            {/* Add more cart items as needed */}
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" type="text" placeholder="Add promo code" />
                    <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Apply</span>
                    </button>
                </form>
            </div>
            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Checkout</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
    );
}

