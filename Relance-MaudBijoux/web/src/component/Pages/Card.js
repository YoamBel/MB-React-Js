import React from 'react';
import './styles/Page.css';



const Card = (props) =>{
   
    return (
       <div> 
           <div  className = "card-body">
               <div className = "imgBx">
                    <img src = {props.Art_Fic_Img1} className = "card-image" alt = "" />
               </div>
                <div className = "tltBx">
                    <h3 className = "card-title">{props.Art_Libelle}</h3>
                    <p className = "card-ref"> ref :{props.Art_Ref}</p>
                </div>
                             
             </div>
       </div>
        
        
    )
}

export default Card


/*<div data-aos = {props.aos} data-aos-offset = {props.aos_offset} className = "card">
              <div className = "card-body">
                    <img src = {props.Art_Fic_Img1} className = "card-image" alt = "" />
                    <h3 className = "card-title">{props.Art_Libelle}</h3>
                    <p className = "card-ref"> ref :{props.Art_Ref}</p>
                    <button onClick = {console.log("toto")} className="card-btn">Voire l'article </button>
             </div>
            
         </div>*/