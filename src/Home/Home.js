import React from 'react'
import Footer from '../Components/Layout/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Corousel from '../Home/Corousel'
import Card from './Card'

const Home=()=> {
    return (
        <>
        <Navbar/>
        <Corousel/>
        <Card/>
        <Footer/>
        </>
    )
}

export default Home
