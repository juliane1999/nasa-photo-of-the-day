import React from 'react'

export default function Title (props) {

    const {title} = props;

    return (
        <div className = 'nasa-title'> 
            <span className = 'title'>{title}</span>
        </div>
    )


}