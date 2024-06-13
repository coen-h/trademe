import React from 'react';

export default function Home() {
    return (
        <div id="homepage">
            <div id="homepage-title">
                <p style={{ margin: '0px' }}>KIA ORA! READY TO FIND YOUR NEW?</p>
            </div>
            <div id="homepage-search">
                <input id="homepage-search-input" type="search" placeholder="Search all of Trade Me" />
                <button id="homepage-search-button" type="button">Search</button>
            </div>
            <div id="homepage-links">
                <button type="button" className="homepage-links-button" style={{ backgroundColor: '#e34647', borderRadius: "3px 0 0 3px"}}>Marketplace</button>
                <button type="button" className="homepage-links-button" style={{ backgroundColor: '#fc723e' }}>Jobs</button>
                <button type="button" className="homepage-links-button" style={{ backgroundColor: '#6d7e98' }}>Motors</button>
                <button type="button" className="homepage-links-button" style={{ backgroundColor: '#3cb766' }}>Property</button>
                <button type="button" className="homepage-links-button" style={{ backgroundColor: '#666', borderRadius: "0 3px 3px 0" }}>Services</button>
            </div>
        </div>
    );
}
