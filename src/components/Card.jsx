import './Card.css'
import React from 'react'

export default props => {
    return (
        <div>
            <div className="Card">
                <div className="Header">
                    <span className="Title">{props.title}</span>
                </div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
            
        </div>
    )
}