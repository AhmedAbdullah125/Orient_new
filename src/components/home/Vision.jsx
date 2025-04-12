'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bg from '/public/images/about/muslim.jpg'
import Loading from '@/app/loading';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import axios from 'axios';
import tt from '/public/images/about/tt.jpg'
import pp from '/public/images/about/pp.jpg'
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Book() {
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const headers = {
            lang: 'ar', // Change language dynamically based on state
        };
        // Fetch data from the API with Axios
        axios.get(`${API_BASE_URL}/vision-message`
            , {
                headers: headers,
            }).then(response => {
                setData(response.data.data);  // Set the response data to state
                setLoading(false);  // Set loading to false

            })
            .catch(error => {
                setError(error);  // Handle any errors
                console.error('Error fetching data:', error);
                setLoading(false)
            });
    }, []);  // Run this effect whenever the `language` changes

    return (
        <section
            className="vision-section"
            style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
            {
                loading ? <Loading /> :
                    <div className="container m-auto">
                        <div className="vision-cont">
                            <motion.div
                                initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
                                whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2,
                                    // type: 'spring', // Using spring animation for smooth motion
                                    bounce: 0.2, // Small bounce effect for the animation
                                }} className="vision-item">
                                <div className="vision-content">
                                    <h3>Our Vision</h3>
                                    <p> Leadership in delivering public services by efficiently managing allocations for Hajj and Umrah pilgrims, while directly enhancing the travel and local tourism sectors. </p>
                                </div>
                                <div className="vision-img-cont">
                                    <div className="vision-img">
                                        <figure>
                                            <Image src={tt} width={200} height={200} alt="vision" />
                                        </figure>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
                                whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2,
                                    // type: 'spring', // Using spring animation for smooth motion
                                    bounce: 0.2, // Small bounce effect for the animation
                                }} className="vision-item">
                                <div className="vision-content">
                                    <h3>Our Mission</h3>
                                    <p>The company is driven by efficiency and adaptability, consistently aligning its services with the latest advancements in religious and international tourism. Throughout the year, Orient Travel ensures that every visitor and Umrah pilgrim receives the highest level of comfort and care.</p>
                                </div>
                                <div className="vision-img-cont">
                                    <div className="vision-img">
                                        <figure>
                                            <Image src={pp} width={200} height={200} alt="vision" />
                                        </figure>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
            }

        </section >
    );
}
