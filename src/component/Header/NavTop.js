import React , {useState} from "react";
import { useHistory } from "react-router";
import { Link  } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShopping } from 'react-icons/ai'; 
import { GoHome } from 'react-icons/go'; 
import { AiFillCloseSquare } from 'react-icons/ai'; 
import { AiOutlineMenu } from 'react-icons/ai'; 
import { AiOutlineClose } from 'react-icons/ai'; 
import { SidebarData } from "./SidebarData";
import { SidebarDataCollections,SidebarDataBagues,SidebarDataBoucleDoreilles,SidebarDataBracelets,SidebarDataColliers,SidebarDataPendentifs,SidebarDatanPiercings } from "./SidebarData";
import ReactScrollableFeed from 'react-scrollable-feed'
import './styles/NavBars.css'


const NavTop = ({Client}) =>{

    const history = useHistory();
    const [Sidebar, setSideBar] = useState(false)

    const ShowSideBar = () => setSideBar(!Sidebar)

    return(
       <div className = "nav-top">
           <div className = "container-nav-top">
                <div className = "toggle-menu md-1000 ct-icons">
                    <div className = "ct-link-ic"><Link to ="#" onClick = {ShowSideBar} className = "link-ic"><AiOutlineMenu className = "ic-toggle ic"/><div className = "ct-ic-home ct-ic">menu</div></Link></div>
                    <nav className = {Sidebar ? 'nav-menu-toggle active-toggle' : 'nav-menu-toggle'}>
                    <ReactScrollableFeed>
                        <ul className = 'nave-menu-items-toggle' onClick={ShowSideBar}>
                            
                            <li className = "navbar-toggle">
                                <Link to = "#" className = "menu-bars-toggle">
                                    <AiOutlineClose  className = "ic-toggle-close"/>
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                if(item.title === "Nos Collections"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataCollections.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link ss-sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Bagues"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataBagues.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Boucles d'oreilles"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataBoucleDoreilles.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Bracelets"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataBracelets.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Colliers | Chaînes"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataColliers.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Pendentifs"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDataPendentifs.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                if(item.title === "Piercings"){
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link className = "sidebar-link" to={item.path}>
                                                <span className = "nav-top-span-sidebar">{item.title}</span>
                                            </Link>
                                            <ul>
                                                {SidebarDatanPiercings.map(item => {
                                                    return(<li>
                                                        <Link className = "sidebar-link" to={item.path}>
                                                            <span className = "nav-top-span-sidebar">{item.title}</span>
                                                        </Link>
                                                    </li>);
                                                })}
                                            </ul>
                                        </li>
                                    )
                                }
                                return( <li key={index} className={item.cName}>
                                    <Link className = "sidebar-link" to={item.path}>
                                        <span className = "nav-top-span-sidebar">{item.title}</span>
                                    </Link>
                                </li>);
                               
                            })}
                            
                            
                        </ul>
                        </ReactScrollableFeed>
                    </nav>
                </div>
                <div className = "ct-txt">
                    <p className = "txt-top">E-mail : MaudBijoux@gmail.com &nbsp;&nbsp;&nbsp;&nbsp; Tel : 01 48 04 07 50</p>
                </div>
                <div className ="ct-icons">
                    <div className = "ct-link-ic"><Link to ="/" className = "link-ic"><GoHome className = "ic-home ic"/><div className = "ct-ic-home ct-ic">Accueil</div></Link></div>
                    <div className = "ct-link-ic"><Link to ="/FilterSearch" className = "link-ic"><BiSearch className = "ic-search ic"/><div className = "ct-ic-search ct-ic">Recherche</div></Link></div>
                    <div className = "ct-link-ic">
                        {sessionStorage.getItem(Client.Cptcli_Num_ID) ? 
                             <Link to ="/Profile" className = "link-ic"><VscAccount className = "ic-profile ic"/><div className = "ct-ic-profile ct-ic">{Client.Cptcli_Prenom} {Client.Cptcli_Nomcli}</div></Link>
                            :
                            <Link to ="/InscriptionConnection2" className = "link-ic"><VscAccount className = "ic-profile ic"/><div className = "ct-ic-profile ct-ic">Connexion / Inscription</div></Link>
                        }
                    </div>
                    <div className = "ct-link-ic"><Link to = "/Command" className = "link-ic"><AiOutlineShopping className = "ic-shopping ic"/><div className = "ct-ic-shopping ct-ic" >Votre Panier</div></Link></div>
                    {<div className = "ct-link-ic">
                        {sessionStorage.getItem(Client.Cptcli_Num_ID) ? 
                             <Link to = "/"  className = "link-ic" onClick = {() => {sessionStorage.clear();window.location.reload();}}><AiFillCloseSquare className = "ic-diconnect ic"/><div className = "ct-ic-profile ct-ic">Déconnexion</div></Link>
                            :
                           null
                        }
                    </div>}
                </div>       
           </div>
       </div>
    )
}
export default NavTop;