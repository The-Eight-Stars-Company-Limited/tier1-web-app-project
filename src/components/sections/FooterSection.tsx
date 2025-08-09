import Link from 'next/link';
import Image from 'next/image';

const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

const contactInfo = {
  address: '123 Main St, Kumasi, Ghana',
  email: 'sales@theeightstars.com',
  phone: '+233 244 666 666',
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} 
      className="text-white hover:text-button-yellow transition-colors font-poppins">
      {label}
    </Link>
  </li>
);

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-blue text-white py-8 font-poppins w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center md:text-left">
          <div className="relative">
            <Image 
            src="/company-logo-2.png" 
            alt="Company Logo" 
            width={200} 
            height={200} 
            
            />
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 font-poppins">The Eight Stars Co. LTD.</h3>
            <p className="text-white font-poppins text-sm">
              Your one stop for all your 
              <br />Building, 
              <br />Construction,
              <br />& Electrical Materials.
            </p>
          </div>
          <div className="pl-8">
            <h3 className="text-md font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {footerNavLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 font-poppins">Contact Info</h3>
            <ul className="space-y-1 text-sm">
              <li>{contactInfo.address}</li>  
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white text-center text-white">
          <p>&copy; {currentYear} The Eight Stars Company Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;