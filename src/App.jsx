import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Discover from './components/Discover'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Promotion from './components/Promotion'

import './style.css'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Promotion />
      <Discover name="$1 Listings"/>
      <Categories />
      <Discover name="New Listings"/>
      <Footer />
    </>
  )
}