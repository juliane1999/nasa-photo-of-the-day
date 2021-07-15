import React from 'react'

export default function Explanation (props) {
    
    const {explanation} = props;

    return (
        <div className = 'nasa-explanation'>
            <span className = 'explanation'>{explanation}</span>
        </div>
    )

}