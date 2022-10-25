import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { serviceDropdownPiercings } from '../NavItems';

const PiercingsDropdown = () => {
    
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <ul
             className={dropdown ? "services-submenu clicked" : "services-submenu"}
             onClick={() => setDropdown(!dropdown)}>
              {serviceDropdownPiercings.map(item => {
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
export default PiercingsDropdown;
