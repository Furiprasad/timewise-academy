
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e192ad3f-6095-4e36-ac9a-f7249d2f8ca8.png" 
              alt="TIME Institute Logo" 
              className="h-10 md:h-12"
            />
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-blue-900 hover:text-blue-700 font-medium">Home</Link>
            <Link to="#courses" className="text-blue-900 hover:text-blue-700 font-medium">Courses</Link>
            <Link to="#about" className="text-blue-900 hover:text-blue-700 font-medium">About Us</Link>
            <Link to="#contact" className="text-blue-900 hover:text-blue-700 font-medium">Contact</Link>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">Enroll Now</Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-blue-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-blue-900 hover:text-blue-700 font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="#courses" 
              className="text-blue-900 hover:text-blue-700 font-medium py-2"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link 
              to="#about" 
              className="text-blue-900 hover:text-blue-700 font-medium py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="#contact" 
              className="text-blue-900 hover:text-blue-700 font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white w-full"
              onClick={toggleMenu}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
