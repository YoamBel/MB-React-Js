import React from 'react'

import NavTop from './NavTop';
import NavMid from "./NavMid";
import NavBot from "./NavBot";

const Navbar = ({Client}) => {
    return (
        <React.Fragment>
            <NavTop Client = {Client}/>
            <NavMid/>
            <NavBot/>
        </React.Fragment>
    )
}

export default Navbar
