import React from 'react';
import telefonica from '../images/clients/telefonica-logo.png';
import eiffage from '../images/clients/eiffage.png';
import europcar from '../images/clients/europcar-logo.png';

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 mt-4 pt-4 text-center text-3xl text-blue-900 uppercase font-bold">
                        Nuestros clientes
                    </h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                </div>

                <div className="p-8 sm:p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
                        <div className="flex justify-center opacity-50 hover:opacity-100 transition-all">
                            <img
                                src={telefonica}
                                alt="client"
                                className="max-h-40 w-auto object-contain sm:max-h-32"
                                style={{ mixBlendMode: 'color-burn' }}
                            />
                        </div>

                        <div className="flex justify-center opacity-50 hover:opacity-100 transition-all">
                            <img
                                src={eiffage}
                                alt="client"
                                className="max-h-40 w-auto object-contain sm:max-h-32"
                                style={{ mixBlendMode: 'color-burn' }}
                            />
                        </div>

                        <div className="flex justify-center opacity-50 hover:opacity-100 transition-all">
                            <img
                                src={europcar}
                                alt="client"
                                className="max-h-40 w-auto object-contain sm:max-h-32"
                                style={{ mixBlendMode: 'color-burn' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
