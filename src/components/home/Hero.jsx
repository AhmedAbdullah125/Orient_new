'use client'
import React, { useEffect, useState } from 'react';
export default function Hero() {
    const [muted, setMuted] = useState(true);
    return (
        <div className="hero">
            <video width="320" height="240" autoPlay loop muted={muted}>
                <source src='/video1.mp4' type="video/mp4" />
                <source src='/video1.mp4' type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"> </div>
        </div>
    );
}
