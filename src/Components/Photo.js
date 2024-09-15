import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Photo(){
    const [photo, setPhoto] = useState(null)

    const StylePhoto = styled.div`
    background-color: #1f3e5a
    `

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=r4kuBc5FdQ6xRi6nackGC0C7UtSzxiJCIcHsmKA8&date=2012-03-14')
        .then(res => {
            setPhoto(res.data.url)
        })
        .catch(err => (console.log(err)))
    }, [Photo])

    return (
            <div>
            <StylePhoto photo={photo}>
            <img src = {photo} ></img>
            </StylePhoto>
            </div>
    )
}