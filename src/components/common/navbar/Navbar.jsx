import React from 'react';

function Navbar() {
  const handleFavouriteClick = () => {
    alert('Favourite icon clicked!');
  };

  const handleCartClick = () => {
    alert('Cart icon clicked!');
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 py-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="/" className="text-blue-500 font-bold text-xl">
            Home
          </a>
          <div className="hidden lg:flex items-center gap-6 ml-6">
            <a href="/courses" className="text-gray-700 font-bold text-lg">
              Courses
            </a>
          </div>
          <button
            className="block lg:hidden text-gray-500 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>

        <div className="flex flex-grow justify-center mt-4 lg:mt-0 w-full lg:w-auto">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for Courses..."
              className="border border-gray-300 px-5 py-2 rounded-full w-full lg:w-[600px] text-gray-500 placeholder-gray-400 text-center"
            />
            <i className="fa fa-search absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>

            <button
              onClick={handleFavouriteClick}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 p-2 bg-transparent border-none"
              aria-label="Favourite"
            >
              <img
                src="/favourite.png"
                alt="Favourite Icon"
                className="w-full h-full object-contain"
              />
            </button>

            <button
              onClick={handleCartClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-2 bg-transparent border-none"
              aria-label="Cart"
            >
              <img
                src="/cart.png"
                alt="Cart Icon"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <a href="/wishlist" className="text-gray-500 hover:text-gray-700 hidden lg:block">
            <i className="fa fa-heart"></i>
          </a>
          <a href="/cart" className="text-gray-500 hover:text-gray-700 hidden lg:block">
            <i className="fa fa-shopping-cart"></i>
          </a>
          <a
            href="/login"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
