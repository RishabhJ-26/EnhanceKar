const Navbar = () => {
  return (
<nav className="bg-white shadow-md py-4 px-8 flex items-center w-full rounded-lg">
      <div className="text-3xl font-bold text-purple-800 animate-pulse cursor-pointer mr-auto">
       <a href="/">EnhanceKar</a> 
      </div>
      <div className="space-x-6 text-lg font-semibold text-gray-700">
        <a href="#about" className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">About</a>
        <a href="#contact" className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Contact</a>
        <a href="#review" className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">Review</a>
      </div>
    </nav>
  );
};

export default Navbar;
