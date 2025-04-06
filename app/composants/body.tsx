"use client"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Body() {
  return (
    <div className="px-6 md:px-20 py-12 space-y-10 bg-white">
      {/* Les 3 cartes : téléphone, email, localisation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
          <FaPhoneAlt size={30} className="mx-auto text-teal-700 mb-3" />
          <h3 className="font-bold text-lg">(+876) 765 665</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
          <FaEnvelope size={30} className="mx-auto text-teal-700 mb-3" />
          <h3 className="font-bold text-lg">mail@influenca.id</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-white border p-6 rounded-lg shadow-md">
          <FaMapMarkerAlt size={30} className="mx-auto text-teal-700 mb-3" />
          <h3 className="font-bold text-lg">London Eye London</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Carte Google Map intégrée */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte de localisation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19825.80584911987!2d-0.1280051!3d51.5032979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd2a6fda95%3A0x8a3d3787480d654f!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1712393346613!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}