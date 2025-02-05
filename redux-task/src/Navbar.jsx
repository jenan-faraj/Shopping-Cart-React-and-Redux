export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyShop</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Products</a></li>
            <li><a href="#" className="hover:text-gray-300">Cart</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  