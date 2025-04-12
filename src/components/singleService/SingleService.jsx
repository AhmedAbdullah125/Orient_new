'use client'
import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import Image from 'next/image';
import NumberTicker from '../ui/number-ticker';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import BlurFade from '../ui/blur-fade'
import img1 from '/public/images/detservices/2.jpg'
import img3 from "/public/images/detservices/3.jpg"
import img4 from "/public/images/detservices/4.jpg"
import img5 from "/public/images/detservices/5.jpg"
import img6 from "/public/images/detservices/6.jpg"
import img7 from "/public/images/detservices/7.jpg"
import img8 from "/public/images/detservices/8.jpg"
import img9 from "/public/images/detservices/9.jpg"
import img10 from "/public/images/detservices/10.jpg"
import img11 from "/public/images/detservices/11.jpg"
import img12 from "/public/images/detservices/12.jpg"
import img13 from "/public/images/detservices/13.jpg"
import img14 from "/public/images/detservices/14.jpg"
import img15 from "/public/images/detservices/15.jpg"
import img16 from "/public/images/detservices/16.jpg"
import img17 from "/public/images/detservices/17.jpg"
import img18 from "/public/images/detservices/18.jpg"
import img19 from "/public/images/detservices/19.jpg"


export default function SingleService() {
    // const searchParams = useSearchParams()
    // const pathId = searchParams.get('id')

    const [loading, setLoading] = useState(false); // State for loading indicator
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     setLoading(true);
    //     const headers = {
    //         lang: 'ar', // Change language dynamically based on state
    //     };
    //     //scroll to top
    //     window.scrollTo(0, 0);
    //     axios.get(`${API_BASE_URL}/services/${pathId}/show`
    //         , {
    //             headers: headers,
    //         }).then(response => {
    //             setData(response.data.data);  // Set the response data to state
    //             setLoading(false);  // Set loading to false
    //         })
    //         .catch(error => {
    //             setError(error);  // Handle any errors
    //             console.error('Error fetching data:', error);
    //             setLoading(false)
    //         });
    // }, []);  // Run this effect whenever the `language` changes
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    const data = {
        id: 1,
        name :"Umrah Travel",
        description :"🌟 Discover Hassle-Free Ummrah Services with Orient 🌟 Embark on a spiritual journey with confidence and peace of mind through our tailored Ummrah packages. At [Your Travel Agency Name], we take pride in providing comprehensive services that cater to all your needs. From visa processing and flight bookings to luxurious accommodation and ground transportation, we ensure every detail is meticulously planned. Experience the convenience of guided tours, spiritual support, and 24/7 customer assistance as you focus on your prayers and spiritual growth. Let us be your trusted companion on this sacred journey, creating unforgettable memories with unmatched comfort and reliability. Contact us today to plan your Ummrah trip and experience excellence in every step! 🕋✈️",
        features: [
            { title: "Visa Processing", counter: "1000", description: "Visa processing and flight bookings" },
            { title: "Accommodation", counter: "500", description: "Luxurious accommodations and ground transportation" },
            { title: "Guided Tours", counter: "100", description: "Guided spiritual support and 24/7 customer assistance" },
        ],
       cover : img1,
        images: [
            img1, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19
        ]
    }  

    return (
        <div className="SingleService" >
            {
                loading ? <Loading /> :
                    <div className="container m-auto">
                        <div className="single-details">
                            <div className="text">
                                <h2>{data?.name}</h2>
                                <p>{data?.description}</p>
                                <div className="counters">
                                    {
                                        data.features.map((feature, index) =>
                                            <div className="counter" key={index}>
                                                <h4>{feature.title}</h4>
                                                <h5><NumberTicker value={Number(feature.counter)} /> + </h5>
                                                <p>{feature.description}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="img-cont">
                                <Image src={data?.cover} alt="Alalaa" width={200} height={200} />
                                {/* <Image src={img2} alt="Alalaa" width={200} height={200} /> */}
                            </div>
                        </div>
                        <div className="gallery">
                            <h3>معرض الصور</h3>
                            <div className="columns-2 gap-4 sm:columns-5">
                                {
                                    data.images.map((img, idx) =>
                                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                                            <a href={img.src} data-fancybox="gallery">
                                                <figure>
                                                    <Image src={img} alt="Alalaa" width={200} height={200} className="mb-4 size-full rounded-lg object-contain" />
                                                </figure>
                                            </a>
                                        </BlurFade>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
