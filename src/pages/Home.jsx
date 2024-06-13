import React from 'react'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import Promotion from '../components/Promotion'
import '../style.css'

export default function Home() {
    return (
      <>
        <Header />
        <Homepage />
        <Promotion />
        <Discover name="$1 Listings"/>
        <Categories />
        <Discover name="New Listings"/>
        <Footer />
      </>
    )
  }