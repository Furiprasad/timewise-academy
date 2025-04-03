
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/e192ad3f-6095-4e36-ac9a-f7249d2f8ca8.png" 
                alt="TIME Institute Logo" 
                className="h-12 bg-white p-1 rounded"
              />
            </div>
            <p className="mb-4 text-blue-100">
              Triumphant Institute of Management Education (T.I.M.E.) - Leading coaching institute for competitive exams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="#about" className="text-blue-100 hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link to="#courses" className="text-blue-100 hover:text-yellow-300 transition-colors">Courses</Link></li>
              <li><Link to="#contact" className="text-blue-100 hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Banking Exams</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">SSC Exams</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Railway Exams</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Insurance Exams</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Other Competitive Exams</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Information</h3>
            <address className="not-italic text-blue-100">
              <p className="mb-2">123 Main Road, Dwarakanagar,</p>
              <p className="mb-4">Visakhapatnam, AP - 530016</p>
              <p className="mb-2">Phone: +91 98765 43210</p>
              <p>Email: info@timeinstitute.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Triumphant Institute of Management Education. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-blue-200">
              <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
