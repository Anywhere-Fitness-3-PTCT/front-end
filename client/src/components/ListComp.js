import React from 'react';

const ListComp = (props) => {

    return(
        <div>
            <p>Name:{props.list.name} Time:{props.list.time} Date:{props.list.date} Type:{props.list.type}</p>
        </div>
    )
}

export default ListComp;