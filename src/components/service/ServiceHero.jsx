import Image from 'next/image';
import React from 'react'; // Importing React to use JSX syntax and create components.
import img1 from '/public/images/detservices/2.jpg'


export default function ServiceHero() { // Defining the main functional component named 'Footer'.

    return (
        <section className="ServiceHero" style={{ backgroundImage: `url(${img1.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <div className="overlay">
                <div className="container">
                    <div className="details">
                        <h2>Umrah Travel</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
