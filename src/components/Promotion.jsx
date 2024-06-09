import React from 'react'

export default function Promotion() {
    return (
        <div id="promotion">
            <div id="promotion-card" style={{ backgroundColor: "rgb(253, 8, 132)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0' }}>Featured</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>Multi-factor authentication is here!</h1>
                    <button style={{ color: "rgb(47, 44, 40)", backgroundColor: "rgb(255, 235, 51)" }} id="promotion-button">Learn more</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt8d3db97da16b8e8a/6657ddb36d77597c5be472ed/mfa-promo-spot.jpg"></img>
            </div>
            <div id="promotion-card" style={{ backgroundColor: "rgb(72, 84, 211)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0' }}>Promotion</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>Winter home & living sale!</h1>
                    <button style={{ color: "rgb(72, 84, 211)", backgroundColor: "rgb(242, 175, 220)" }}id="promotion-button">Shop now</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt6a42e1f293b1349f/664be255f5cbb79b8e89f757/3829_winter_h&l_homepage_stripe.png"></img>
            </div>
            <div id="promotion-card" style={{ backgroundColor: "rgb(9, 22, 165)"}}>
                <div id="promotion-content">
                    <h1 style={{ fontSize: '0.8rem', margin: '0'}}>Trending</h1>
                    <h1 style={{ fontSize: '1.5rem', margin: '0', fontWeight: '600' }}>Upgrade your home entertainment!</h1>
                    <button style={{ color: "rgb(47, 44, 40)", backgroundColor: "rgb(255, 235, 51)" }} id="promotion-button">Shop now</button>
                </div>
                <img id="promotion-image" src="https://www.trademe.co.nz/contentstack/images/v3/assets/blt8ede3f648df7664a/blt7378286536decef4/65c979b5918f5d5338de2a42/3729_tech&entertainment_Promo_Spot_Artwork.png"></img>
            </div>
        </div>
    )
}