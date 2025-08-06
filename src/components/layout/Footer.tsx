import Link from 'next/link';

const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const contactInfo = {
  address: '123 Main St, Anytown, USA',
  email: 'sales@theeightstars.com',
  phone: '+1 (555) 123-4567',
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-button-yellow transition-colors">
      {label}
    </Link>
  </li>
);

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
              {footerNavLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
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