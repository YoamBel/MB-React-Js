import React from 'react';
import { Link } from 'react-router-dom';
import Diamants from '../image/diamant2.png'
import Arg925 from '../image/argent.png'
import Or18 from '../image/Or18k.png'
//import Or9 from '../image/Or 375.jpg'
import Acier from '../image/acier.png'
import './styles/Container.css';




const Container = () => {


    return (
        <div className = "form-container">

           <div className = "collection-ct">

               <div className = "box-col">
                    <div className = "ct-home-collection diamant ">
                        <div className = "col-dia col-home-dia ">
                            <h3>Collection Diamants</h3>
                            <div> <img src = {Diamants} alt = ""/></div>
                            <Link to = "/Collection Diamants">Regarder Maintenant</Link>
                        </div>
                    </div>
                    <div className = "ct-home-collection argent25">
                        <div className = "col-dia col-home-argent25 ">
                            <h3>Collection Argent</h3>
                            <div> <img src = {Arg925} alt = ""/></div>
                            <Link to = "/Collection Argent 925 millièmes">Regarder Maintenant</Link>
                        </div>
                    </div>

                </div>

                <div className = "box-col">
                    <div className = "ct-home-collection acier">
                        <div className = "col-dia col-home-acier">
                            <h3>Collection Acier</h3>
                            <div> <img src = {Acier} alt = ""/></div>
                            <Link to = "/Collection Acier">Regarder Maintenant</Link>
                        </div>                   
                    </div>
                    <div className = "ct-home-collection or18">
                        <div className = "col-dia col-home-or18">
                            <h3>Collection Or 18 Carats</h3>
                            <div> <img src = {Or18} alt = ""/></div>
                            <Link to = "/Collection Or 18 Carats 750 millièmes">Regarder Maintenant</Link>
                        </div>                   
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default Container


/*
 <div className = "ct-home-collection ">
                            <div className = "col-dia col-home-dia-or18 ">
                                <h3>Collection Diamants</h3>
                                <img src = {Diamants} alt = ""/>
                                <Link to = "#">Regarder Maintenant</Link>
                            </div>
                        
                        <div className = "ct-home-collection argent25">
                            <div>
                                <Link to = "#">Collection Argent 925 millièmes</Link>
                            </div>
                        </div>
                    </div>


<div className = "ct-home-collection ">
                        <div>
                        <Link to = "#">Collection Acier</Link>
                        </div>
                    </div>
                    <div className = "ct-home-collection or18">
                        <div className = "col-dia col-home-dia-or18">
                            <h3>Collection Or 18 Carats 750 millièmes</h3>
                            <img src = {Diamants} alt = ""/>
                            <Link to = "#">Regarder Maintenant</Link>
                        </div>
                    </div>







<div className = "ct-home-collection or9">
                    <div>
                       <Link to = "#">Collection Or 9 Carats 375 millièmes</Link>
                    </div>
                </div>










  <div className = "form-ct">
            <div className = "box box1">
                <h1 className = "tlt-h1">Decouvrez nos Collections</h1>
                <div className = "ct-box1-p0 ct-box1-p1">
                    <div><Link to = {""}><img src = {Or18} alt = ""/><p>OR 18 Carats 750/°°°</p></Link></div>
                    <div><Link to = {""}><img src = {Diamants} alt = ""/><p>Diamants</p></Link></div>
                    <div><Link to = {""}><img src = {Arg925} alt = ""/><p>Argent 925/°°°</p></Link></div>
                </div>
                <div className = "ct-box1-p0 ct-box1-p2">
                    <div><Link to = {""}><img src = {Acier} alt = ""/><p>Acier</p></Link></div>
                    <div><Link to = {""}><img src = {Or9} alt = ""/><p>OR 9 Carats 375/°°°</p></Link></div>
                </div>
            </div>
            <div className = "box box2">
                <h1 className = "tlt-h2">Nos Genres de bijoux</h1>
                <div className = "ct-box2-p1">
                    <div><Link to = {""}><img src = {""} alt = ""/><p>Bijoux Homme</p></Link></div>
                    <div><Link to = {""}><img src = {""} alt = ""/><p>Bijoux Femme</p></Link></div>
                    <div><Link to = {""}><img src = {""} alt = ""/><p>Bijoux Enfant</p></Link></div>
                    <div><Link to = {""}><img src = {""} alt = ""/><p>Bijoux Mix</p></Link></div>
                </div>
            </div>
        </div>

*/