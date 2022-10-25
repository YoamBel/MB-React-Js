import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { serviceDropdownColliers } from '../NavItems';

const ColliersDropdown = () => {
    
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <ul
             className={dropdown ? "services-submenu clicked" : "services-submenu"}
             onClick={() => setDropdown(!dropdown)}>
              {serviceDropdownColliers.map(item => {
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
export default ColliersDropdown;
