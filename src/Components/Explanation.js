import React from 'react'
import styled from 'styled-components'

export default function Explanation (props) {
    
    const {explanation} = props;
    const StyleExplanation = styled.div`
    padding: 5rem
    `

    return (
        <div className = 'nasa-explanation'>
            <StyleExplanation explanation={explanation}>
            <span className = 'explanation'>{explanation}</span>
            </StyleExplanation>
        </div>
    )

}