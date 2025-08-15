import React from 'react';
import img from '../images/img.jpeg'; 
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.webp';
import img4 from '../images/img4.webp';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Servicios</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Instalaciones eléctricas en obra nueva y reformas</h2>
                                    <p className="text-lg font-medium">
                                        Ofrecemos servicios de instalación eléctrica en obras nuevas y reformas, adaptándonos a las necesidades específicas de cada proyecto.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Revisiones, reparaciones y mantenimiento de instalaciones</h2>
                                    <p className="text-lg font-medium">
                                        Realizamos revisiones periódicas, reparaciones y mantenimiento de instalaciones eléctricas para garantizar su correcto funcionamiento y seguridad.
                                    </p>
                                    <p className="text-lg font-medium">
                                        - Telecomunicaciones (utp, TV, telefonía, antenas, etc.).
                                    </p>
                                    <p className="text-lg font-medium">
                                        - Aspiración centralizada.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Instalación de paneles solares para autoconsumo</h2>
                                    <p className="text-lg font-medium">
                                        Instalamos sistemas de paneles solares para autoconsumo, ayudando a nuestros clientes a reducir su dependencia de la red eléctrica y ahorrar en sus facturas de energía.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Sistemas de baterías e inversores para máxima autonomía</h2>
                                    <p className="text-lg font-medium">
                                        El objetivo es maximizar la autonomía energética de nuestros clientes, permitiéndoles aprovechar al máximo la energía generada por sus instalaciones solares.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;