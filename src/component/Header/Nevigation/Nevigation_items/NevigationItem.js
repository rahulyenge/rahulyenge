import React from 'react';
import { NavLink } from 'react-router-dom';

const NevigationItem = (props) => (

    <NavLink
        to={props.link}
        exact={props.exact}
    >
        {props.children}

    </NavLink>

);

export default NevigationItem;


