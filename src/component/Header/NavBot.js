import React, { useState} from "react";
import {Link} from 'react-router-dom';
import { navItems } from "./NavItems";
import './styles/NavBars.css';

import CollectionsDropdown from "./DropDown/CollectionsDropdown.js"; 
import BaguesDropdown from "./DropDown/BaguesDropdown.js";
import BoucleDoreillesDropdown from './DropDown/BoucleDoreillesDropdown.js';
import BraceletsDropdown from "./DropDown/BraceletsDropdown.js";
import ColliersDropdown from './DropDown/ColliersDropdown.js';
import PendentifsDropdown from './DropDown/PendentifsDropdown.js';
import PiercingsDropdown from './DropDown/PiercingDropDown.js';

const NavBot = () => {
    const [dropdownForCollections, setdropdownForCollections] = useState(false);
    const [dropdownForBagues, setdropdownForBagues] = useState(false);
    const [dropdownForBoucleDoreilles, setdropdownForBoucleDoreilles] = useState(false);
    const [dropdownForBracelets, setdropdownForBracelets] = useState(false);
    const [dropdownForColliers, setdropdownForColliers] = useState(false);
    const [dropdownForPendentifs, setdropdownForPendentifs] = useState(false);
    const [dropdownForPiercings, setdropdownForPiercings] = useState(false);

    return (
        <div className = "nav-bot ">
          <div className="container-nav-bot">
            <ul className = "nav-items">
              {navItems.map(item => {
                if(item.title === "Nos Collections"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForCollections(true)}
                    onMouseLeave = {() => setdropdownForCollections(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForCollections && <CollectionsDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Bagues"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForBagues(true)}
                    onMouseLeave = {() => setdropdownForBagues(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForBagues && <BaguesDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Boucles d'oreilles"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForBoucleDoreilles(true)}
                    onMouseLeave = {() => setdropdownForBoucleDoreilles(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForBoucleDoreilles && <BoucleDoreillesDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Bracelets"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForBracelets(true)}
                    onMouseLeave = {() => setdropdownForBracelets(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForBracelets && <BraceletsDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Colliers | Chaînes"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForColliers(true)}
                    onMouseLeave = {() => setdropdownForColliers(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForColliers && <ColliersDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Pendentifs"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForPendentifs(true)}
                    onMouseLeave = {() => setdropdownForPendentifs(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForPendentifs && <PendentifsDropdown/>}
                    </li>
                  )
                }
                if(item.title === "Piercings"){
                  return(
                    <li key = {item.id}
                    className = {item.cName}
                    onMouseEnter = {() => setdropdownForPiercings(true)}
                    onMouseLeave = {() => setdropdownForPiercings(false)}
                    >
                      <Link to = {item.path} className ="item-title">
                        {item.title}
                      </Link>
                      {dropdownForPiercings && <PiercingsDropdown/>}
                    </li>
                  )
                }
                return(
                  <li key = {item.id} className = {item.cName}>
                    <Link to = {item.path} className ="item-title">{item.title}</Link>
                  </li>
                )
              })}
            </ul> 
          </div>
            
        </div>
    )
}

export default NavBot
