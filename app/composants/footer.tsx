import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white px-6 md:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        {/* Logo + Description */}
        <div className="max-w-sm space-y-4">
          <h2 className="text-2xl font-bold">Influenca</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Booking</li>
            <li>Pages</li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>404</li>
          </ul>
        </div>
      </div>

      {/* Contact Info & Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt size={20} />
          <span>London Eye, London UK</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhoneAlt size={20} />
          <span>(+876) 765 665</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope size={20} />
          <span>mail@influenca.id</span>
        </div>
        <div className="flex space-x-4">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaYoutube size={20} />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t border-white/20 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Influenca Template - All Rights Reserved.
      </div>
    </footer>
  );
}