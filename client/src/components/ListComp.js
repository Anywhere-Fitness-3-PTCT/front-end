import React from 'react';
import { Link } from 'react-router-dom';

const ListComp = (props) => {

    return(
        <div>
            <p>Name:{props.list.name} Time:{props.list.time} Date:{props.list.date} Type:{props.list.type} 
             <button><Link to="reservation">Reserve Spot</Link></button></p>
        </div>
    )
}

export default ListComp;