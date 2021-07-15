import React from 'react'

export default function Photo (props) {

    const {url} = props;

    return (
    <div className = 'nasa-photo'>
        <span className = 'photo'>{url}</span>
    </div>
    )
}