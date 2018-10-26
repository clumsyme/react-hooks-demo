import React, { Component } from 'react'

export default function(props) {
    return (
        <div className="tab">
            <nav>
                {props.tabs.map((tab, index) => {
                    return (
                        <span key={index}>
                            <label htmlFor={`tabbar-${index}`}>{tab}</label>
                            <input
                                name="tabinput"
                                value={index}
                                type="radio"
                                id={`tabbar-${index}`}
                                defaultChecked={index===0}
                            />
                        </span>
                    )
                })}
            </nav>
            <div>
                {
                    
                }
            </div>
        </div>
    )
}
