import React from 'react'
import { Container } from 'react-bootstrap'
import image from './Image/shoe.jpg'
import home from "./home.module.css"
function Home() {
    return (
        <>
                <div className="show_banner">
                    <img src={image} alt="shoe-image" />
                </div>
        </>
    )
}

export default Home