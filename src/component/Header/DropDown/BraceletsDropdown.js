import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { serviceDropdownBracelets } from '../NavItems';

const BraceletsDropdown = () => {
    
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <ul
             className={dropdown ? "services-submenu clicked" : "services-submenu"}
             onClick={() => setDropdown(!dropdown)}>
              {serviceDropdownBracelets.map(item => {
                  return(
                      <li key = {item.id}>
                        <Link
                            to={item.path}
                            className={item.cName}
                            onClick={() => setDropdown(false)}
                        >
                            {item.title}
                        </Link>
                      </li>
                  )
              })}  
            </ul>  
        </>
    )
}
export default BraceletsDropdown;
