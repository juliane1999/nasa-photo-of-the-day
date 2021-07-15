import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Photo(){
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=r4kuBc5FdQ6xRi6nackGC0C7UtSzxiJCIcHsmKA8&date=2012-03-14')
        .then(res => {
            setPhoto(res.data.url)
        })
        .catch(err => (console.log(err)))
    }, [Photo])

    return (
            <div>
            <img src = {photo} ></img>
            </div>
    )
}