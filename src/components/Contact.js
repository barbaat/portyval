import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center mt-8 w-full bg-gradient-to-b from-white to-gray-100 py-24"
    >
      <div
        className="container mx-auto px-6 lg:px-20 flex justify-center"
        data-aos="zoom-in"
      >
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl text-center">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Contacto</h2>
            <div className='flex justify-center'>
              <div className='w-24 border-b-4 border-blue-900'></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900"></h2>
            <h3 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              Solicita tu presupuesto sin compromiso
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-16 text-gray-700 text-2xl">
            <div className="flex items-center gap-5">
              <FaPhoneAlt className="text-blue-600 text-4xl" />
              <h1>658 670 331</h1>
            </div>
            <div className="flex items-center gap-5">
              <FaEnvelope className="text-blue-600 text-4xl" />
              <h1>portyval@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
