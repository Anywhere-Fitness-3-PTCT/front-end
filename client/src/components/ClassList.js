// Client Class list
import React from "react"

export default function ClassList(props) {
    return (
        <div>
            {props.client.map(classes => (
                <Class classes={classes} />
            ))}
        </div>
    )
}
