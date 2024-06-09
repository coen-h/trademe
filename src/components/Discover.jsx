import React, { useState, useEffect } from 'react'

export default function Discover(props) {

        const [number, setNumber] = useState(null);
      
        useEffect(() => {
          generateRandomNumber();
        }, []);
      
        const generateRandomNumber = () => {
          const randomNumber = Math.floor(Math.random() * 100000) + 1;
          setNumber(randomNumber);
        };

    return (
    <div id="discover">
        <div id="discover-title">
            <p>{props.name}</p>
        </div>
        <div id="discover-section">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div id="discover-card" key={index}>
                        <div id="discover-image-section">
                            <img src="https://picsum.photos/280/280" id="discover-image" alt="Discover" />
                        </div>
                        {/* https://developer.trademe.co.nz/api-reference/listing-methods */}
                        <div id="discover-container">
                            <div id="discover-top">
                                <div id="discover-top-bar">
                                    <p>Auckland</p>
                                    <p>Closes: Sun, 16 Jun</p>
                                </div>
                                <h1>Test title for trademe listing!</h1>
                            </div>
                            <div id="discover-bottom">
                                <p>Reserve met</p>
                                <h1>${number}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    )
}