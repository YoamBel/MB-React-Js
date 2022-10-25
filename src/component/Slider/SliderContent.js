import React from 'react'
import { Link } from 'react-router-dom'

const SliderContent = ({activeIndex , imageSlider}) => {
    return (
        <section>
            {imageSlider.map((slider,index) => (
                <div key = {index} className = {index === activeIndex ? "slides active" : "inactive"}>
                    <Link to = {slider.cLink}><img className = "slide-image" src = {slider.url} alt=""/></Link>  
                </div>
            ))}
        </section>
    )
}

export default SliderContent
/*
<h2 className ="slide-title">{slider.title}</h2>
<h3 className = "slide-text">{slider.description}</h3>
*/