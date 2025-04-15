'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img1 from '/public/images/detservices/2.jpg'
import img2 from '/public/images/hotels/1.jpg'
import img3 from '/public/images/detservices/14.jpg'
import img4 from '/public/images/detservices/24.jpg'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import img from '/public/alalaa.jpg'
export default function About() {
    const data = [
        { id: 1, cover: img1, title: 'Umrah services', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company' },
        { id: 2, cover: img2, title: 'Hotel Reservation', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company' },
        { id: 3, cover: img3, title: 'Car Reservation', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company' },
        { id: 4, cover: img4, title: 'Plane Tickets', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company' },
    ]
    const [lang, setLang] = useState('en');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Define the headers with the selected language
            setLang(localStorage.getItem('lang'));
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
        }
    }, []);
    return (
        <div className="about" >
            <div className="container m-auto" id='services'>
                <h2>{lang == 'en' ? 'Our Services' : 'አገልግሎቶች'}</h2>
                <h3>{lang == 'en'?"We offer a wide range of services to meet your needs":"ፍላጎቶችዎን ለማሟላት ሰፋ ያሉ አገልግሎቶችን እናቀርባለን።"}</h3>
                <div className="services-conr">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={32}
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1400: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            767: {
                                slidesPerView: 2.5,
                            },
                            640: {
                                slidesPerView: 1.5,
                                autoplay: false,
                                spaceBetween: 16
                            },
                            100: {
                                slidesPerView: 1,
                                autoplay: false,
                                spaceBetween: 16
                            }
                        }}
                        className="option"
                    >

                        {data.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Link
                                    href={`/service?id=${item.id}`}
                                    className="option" key={index}
                                >
                                    <div className="img-cont">
                                        <Image src={item.cover} width={200} height={200} alt="Mazar"></Image>
                                    </div>
                                    <div className="text">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <div  className="btn"><span>Read More </span> <i className="fa-solid fa-chevron-right"></i></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
