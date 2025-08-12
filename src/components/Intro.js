import React from 'react';
import img from '../images/intro.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">Portyval es una empresa especializada en instalaciones eléctricas y sistemas de energía solar fotovoltaica, comprometida con la eficiencia, la seguridad y el ahorro energético.</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Con años de experiencia en el sector, ofrecemos soluciones adaptadas a viviendas, comunidades, comercios e industrias.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Contamos con un equipo técnico altamente cualificado y en constante formación, que nos permite afrontar todo tipo de proyectos, desde instalaciones domésticas hasta soluciones a medida para empresas e industrias.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;