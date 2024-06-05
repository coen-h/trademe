import React from 'react'

export default function Header() {
    return (
    <>
        <div id="header">
            <div id="header-top">
                <div id="header-top-link">
                    <p id="header-link-top">Not Trade Me</p>
                    <p id="header-link-top">Not Trade Me Insurance</p>
                    <p id="header-link-top">Holiday Houses</p>
                    <p id="header-link-top">FindSomeone</p>
                    <p id="header-link-top">MotorWeb</p>
                    <p id="header-link-top">homes.co.nz</p>
                </div>
                <div id="header-top-login">
                    <p id="header-link-login">Register</p>
                    <p id="header-link-login">Log in</p>
                </div>
            </div>
        </div>
        <div id="header-bottom">
            <div id="header-bottom-left">
                <p>Not Trade Me</p>
                <p>Browse</p>
            </div>
            <div id="header-bottom-right">
                <p>Watchlist</p>
                <p>Favourites</p>
                <p>Start a listing</p>
                <p>My Not Trade Me</p>
            </div>
        </div>
    </>
    )
}