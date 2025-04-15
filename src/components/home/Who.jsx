'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '/public/images/logoBlack.png';
import { motion } from 'framer-motion';
import NumberTicker from '../ui/number-ticker';
import part1 from '/public/images/partner/eg.png';
import part2 from '/public/images/partner/nas.png';
import part3 from '/public/images/partner/partner2.png';
import part4 from '/public/images/partner/partnr1.png';
import part5 from '/public/images/partner/sau.png';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
const ReviewCard = ({
    img,
}) => {
    return (
        <figure
            className={cn(

            )}
        >
            <div className="part-cont" >
                <Image src={img} alt="Mazar" width={200} height={200} />
            </div>
        </figure>
    );
};
let parts = [{ img: part1.src }, { img: part2 }, { img: part3 }, { img: part4 }, { img: part5 },];
export default function Who() {
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
    const data = [
        { title: 'Umrah Travel', counter: '10000000', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company' },
        { title: 'Umrah Travel', counter: '1000000', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company ' },
        { title: 'Umrah Travel', counter: '1000000', description: 'our company did more then 1000000 Umrah tranvel to makkah and madina using our company ' },
    ]
    const aboutPragEnglish = 'Orient Travel Company was founded in the Republic Democratic of Ethiopia, leveraging the founders over 15 years of accumulated experience. As a result, the company has become one of the leading providers in the Umrah, Hajj, and travel services sector.The company offers a comprehensive range of services, including the issuance of various visas, transportation, accommodation, and the organization of religious tourism programs for both groups and individuals. With branches across Africa and strong partnerships with local and international collaborators, Orient Travel ensures a seamless and enriching experience for its clients.';
    const aboutPragAmh = 'ኦሬንት ትራቭል ካምፓኒ የተቋቋመው በኢትዮጵያ ዲሞክራሲያዊ ሪፐብሊክ ሲሆን የመሥራቾቹን ከ15 ዓመታት በላይ ያካበተውን ልምድ በመጠቀም ነው። በዚህም ኩባንያው በኡምራ፣ በሐጅ እና በጉዞ አገልግሎት ዘርፍ ግንባር ቀደም አቅራቢዎች መሆን ችሏል።  ኩባንያው የተለያዩ ቪዛዎችን መስጠትን፣ መጓጓዣን፣ ማረፊያን እና የሃይማኖት ቱሪዝም ፕሮግራሞችን ለቡድንም ሆነ ለግለሰቦች ማደራጀትን ጨምሮ አጠቃላይ አገልግሎቶችን ይሰጣል። በመላው አፍሪካ ቅርንጫፎች እና ከሀገር ውስጥ እና አለምአቀፍ ተባባሪዎች ጋር ጠንካራ አጋርነት ያለው ኦሪየንት ትራቭል ለደንበኞቹ እንከን የለሽ እና የሚያበለጽግ ልምድን ያረጋግጣል።';
    return (

        <section className={` hero-main why`} id='about'>

            <div className="container m-auto">
                <div className="hero-about" >
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="r-side">
                        <div className="img-cont">
                            <div className="overlay"></div>
                            <Image src={logo} width={500} height={500} alt="Mazar" className="img-hero" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="l-side">
                        <h3 className='sec-title'>{lang === 'en' ? 'About Us' : 'ስለ እኛ'}</h3>
                        <p className='who-p'>
                            {
                                lang == 'en' ? aboutPragEnglish : aboutPragAmh
                            }
                        </p>
                        {/* تحميل الملف التعريفي */}
                        <a href="/profile.pdf" className="btn" target="_blank" rel="noopener noreferrer">
                            {
                                lang == 'en' ? 'Download our brochure' : 'ዝርዝር አስተዳደር'
                            }
                        </a>
                    </motion.div>
                </div >
            </div>
            <div className="partenerss">
                {/* <div className="container m-auto">
                <h2>{language === 'en' ? 'Accredited by':'معتمدون لدى'  }</h2>
            </div> */}
                <div className="parts-cont">
                    <div className="partss" style={{ direction: 'ltr' }}>
                        <div className="relative flex  w-full flex-col items-center gap-2 justify-center overflow-hidden  ">
                            <Marquee pauseOnHover className="[--duration:20s] ">
                                {parts.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))}
                            </Marquee>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container m-auto">

                <div className="parteners" >
                    <div className="nums">

                        <div className="numbers-cont">
                            {
                                data.map((item, index) =>
                                    <motion.div
                                        initial={{ y: 100, opacity: 0, }}
                                        whileInView={{ y: 0, opacity: 1, }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.5,
                                            duration: index * .5,
                                        }}
                                        viewport={{ once: true }
                                        }
                                        className="number" key={index}>
                                        <h2>{item.title}</h2>
                                        <div className="needed">
                                            {/* <NumberTicker value={item.counter} /> + */}
                                            <NumberTicker value={Number(item.counter) > 1000000 ? Number(item.counter) / 1000000 : Number(item.counter)} /> {Number(item.counter) > 1000000 ? 'Million' : ''} +
                                        </div>
                                        <p>{item.description}</p>
                                    </motion.div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div >
        </section >

    )
}