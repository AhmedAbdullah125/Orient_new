import React from 'react';
import Contact from '../../components/contact/Contact';
import SingleService from '../../components/singleService/SingleService';
import ServiceHero from '../../components/service/ServiceHero';
export default function page() {

    return (
        <div className="servise" >
            <ServiceHero />
            <SingleService />
            <Contact />

        </div>
    )
}
