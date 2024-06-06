import React from 'react'

export default function Promotion() {
    return (
        <div id="promotion">
            <div id="promotion-card" style={{ backgroundColor: "rgb(72, 84, 211)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0'}}>Promotion</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>List a job for free - Thu 6 Jun!</h1>
                    <button id="promotion-button">Shop now</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt2e2489a8cdd80150/66592feeb752e036af81c48a/JOBS3644_tm-homepage-carousel-exporrt-2x_Resized.png"></img>
            </div>
            <div id="promotion-card" style={{ backgroundColor: "rgb(253, 8, 132)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0' }}>Featured</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>Multi-factor authentication is here!</h1>
                    <button id="promotion-button">Learn more</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt8d3db97da16b8e8a/6657ddb36d77597c5be472ed/mfa-promo-spot.jpg"></img>
            </div>
            <div id="promotion-card" style={{ backgroundColor: "rgb(72, 84, 211)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0' }}>Promotion</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>Winter home & living sale!</h1>
                    <button id="promotion-button">Shop now</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt6a42e1f293b1349f/664be255f5cbb79b8e89f757/3829_winter_h&l_homepage_stripe.png"></img>
            </div>
        </div>
    )
}