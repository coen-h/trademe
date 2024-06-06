import React from 'react'

export default function Discover(props) {
    return (
    <div id="discover">
        <div id="discover-title">
            <p>{props.name}</p>
        </div>
        <div id="discover-section">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div id="discover-card" key={index}>
                        <img src="https://picsum.photos/300/300" id="discover-image" alt="Discover" />
                    </div>
                ))}
            </div>
    </div>
    )
}