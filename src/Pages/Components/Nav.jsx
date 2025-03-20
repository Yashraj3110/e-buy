import { useState } from "react"
import Cart from "./cart"

export default function Navbar({ onStoreSelect }) {

    const [CartOpen, setCartOpen] = useState(false)
    const [WishList, setWishList] = useState(false)
    const [selectedStore, setSelectedStore] = useState(null);

    function OpenCart() {
        if (CartOpen === false) {
            setCartOpen(true)
        } else {
            setCartOpen(false)
        }
    }
    function OpenWishList() {
        if (WishList === false) {
            setWishList(true)
        }
    }

    function handleSelectStore(value) {
        setSelectedStore(value);
        onStoreSelect(value);
    }


    return (
        <>
            {/* Navbar */}
            <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/assets/logo/ebuy.png" className="h-9" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Easy-Buy</span>

                    </a>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

                        <div class="relative max-w-lg mx-auto pr-10 mr-10" style={{ width: "200rem" }}>
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>

                            <input class="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" type="text" placeholder="Search" />
                        </div>

                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {/* WishList */}
                            <li>
                                <a onClick={OpenWishList} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><svg class="w-[29px] h-[29px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                </svg>
                                </a>
                            </li>
                            {/* Cart */}
                            <li>
                                <a onClick={OpenCart} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><svg class="w-[29px] h-[29px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>


            {/* Products */}
            <section className="bg-gray-50 py-8 antialiased md:py-16 mt-8" style={{ height: "170px" }}>
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 flex  justify-center gap-4">
                    <div className="w-full sm:w-auto" id="cat-opt">
                        <a onClick={() => handleSelectStore("Electronics")}
                            className={`relative block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${selectedStore === "Electronics" ? "border-2 border-[#4747ff] rounded-lg" : ""}`}
                            style={{ width: "230px", borderRadius: "20px" }}>
                            <div>
                                <img src="assets/images/electronics.jpg" alt="Overlay Image" className="absolute inset-0 w-full h-full object-fit opacity-40" style={{ borderRadius: "20px" }} />
                            </div>
                            <div className="relative z-10">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ textAlign: "center" }}>Electronics</h5>
                            </div>
                        </a>
                    </div>

                    <div className="w-full sm:w-auto" id="cat-opt">
                        <a onClick={() => handleSelectStore("Clothing")}
                            className={`relative block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${selectedStore === "Clothing" ? "border-2 border-[#4747ff] rounded-lg" : ""}`}
                            style={{ width: "230px", borderRadius: "20px" }}>
                            <img src="assets/images/clothes.jpg" alt="Overlay Image" className="absolute inset-0 w-full h-full object-fit opacity-50" style={{ borderRadius: "20px" }} />
                            <div className="relative z-10">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ textAlign: "center" }}>Clothes</h5>
                            </div>
                        </a>
                    </div>

                    <div className="w-full sm:w-auto" id="cat-opt">
                        <a onClick={() => handleSelectStore("Kitchen")}
                            className={`relative block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${selectedStore === "Kitchen" ? "border-2 border-[#4747ff] rounded-lg" : ""}`}
                            style={{ width: "230px", borderRadius: "20px" }}>
                            <div>
                                <img src="assets/images/kitchen.jpg" alt="Overlay Image" className="absolute inset-0 w-full h-full object-fit opacity-50" style={{ borderRadius: "20px" }} />
                            </div>

                            <div className="relative z-10">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ textAlign: "center" }}>Kitchen</h5>
                            </div>
                        </a>
                    </div>

                    <div className="w-full sm:w-auto" id="cat-opt">
                        <a onClick={() => handleSelectStore("Decoratives")}
                            className={`relative block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${selectedStore === "Decoratives" ? "border-2 border-[#4747ff] rounded-lg" : ""}`}
                            style={{ width: "230px", borderRadius: "20px" }}>
                            <div>
                                <img src="assets/images/home.jpg" alt="Overlay Image" className="absolute inset-0 w-full h-full object-fit opacity-50" style={{ borderRadius: "20px" }} />
                            </div>
                            <div className="relative z-10">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ textAlign: "center" }}>Decoratives</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


            <Cart CartOpen={CartOpen} onCartClose={OpenCart} />

        </>
    )
}
