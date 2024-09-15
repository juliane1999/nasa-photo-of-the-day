import React from 'react'
import styled from 'styled-components'

export default function Title (props) {

    const {title} = props;

    const StyleTitle = styled.h1`
    color: #0C164F
    `

    return (
        <div className = 'nasa-title'> 
        <StyleTitle title={title}>
            <span className = 'title'>{title}</span>
            </StyleTitle>
        </div>
    )


}