import React from 'react'

export default function Categories() {
    return (
        <div id="categories">
            <p style={{ margin: 0, fontWeight: '500' }}>Trending</p>
            <p style={{ margin: '5px 0 20px 0', fontWeight: '500', color: '#44413d', fontSize: '1.1rem'}}>Categories</p>
            <div id="categories-content">
                <div id="categories-card" style={{ backgroundColor: "#3cb766"}}>
                    <h1>22,581+ For Lease</h1>
                    <p>Property / Commercial / Lease</p>
                </div>
                <div id="categories-card" style={{ backgroundColor: "#e34647"}}>
                    <h1>851+ Silver</h1>
                    <p>Marketplace / Antiques & collectables / Coins / New Zealand (Decimal) / Silver</p>
                </div>
                <div id="categories-card" style={{ backgroundColor: "#6d7e98"}}>
                    <h1>361+ 151 - 300 HP</h1>
                    <p>Marketplace / Business, farming & industry / Farming & forestry / Tractors / 151 - 300 HP</p>
                </div>
            </div>
        </div>
    )
}