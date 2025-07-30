import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 font-poppins">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Eight Stars Co. Ltd.</h3>
            <p className="text-gray-400">
              Your one stop for all your Building, Construction & Electrical Materials.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-button-yellow transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-button-yellow transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-button-yellow transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-button-yellow transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-button-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Main St, Anytown, USA</li>
              <li>sales@theeightstars.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} The Eight Stars Company Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;