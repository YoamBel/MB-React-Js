import React from 'react';
import  Container  from '../FormContainer/Container';
import  Slider  from '../Slider/Slider';
import ContainerSlideCard from '../FormContainer/ContainerSlideCard';
//import './styles/Page.css';

const Home = ({ArticlesDia}) => {  

    return (
        <div className = "home-container"> 
            <div className = "home-ct-global ac-co-pro">
                <Slider/>
                <Container/>  
                <ContainerSlideCard/>  
            </div>
        </div>
    )
}

export default Home
