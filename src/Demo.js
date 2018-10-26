import React from 'react'

export default function(props) {
    return (
        <div className="demo">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}