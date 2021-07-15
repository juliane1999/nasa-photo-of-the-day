import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Title from './Components/Title'
import Photo from "./Components/Photo"
import Explanation from './Components/Explanation'

function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=r4kuBc5FdQ6xRi6nackGC0C7UtSzxiJCIcHsmKA8&date=2012-03-14')
          .then(res => {
            console.log(res.data)
            setData(res.data)
          })
          .catch(err => console.log(err))
          }, [])


  return (
    <div className="App">
        <h1>PHOTO OF THE DAY</h1>
        <Title title={data.title} />
        <div>
        <Photo />
        <h2>Explanation:</h2>
        <Explanation explanation ={data.explanation} />
        </div>
    </div>
  );
}

export default App;
