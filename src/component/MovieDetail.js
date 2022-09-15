import React, { useContext, useState } from 'react'
import { MovieContext } from '../Provider/MovieContextProvider'
import {useParams} from "react-router-dom"
export default function MovieDetail() {


    const {data} = useContext(MovieContext)
    const {id} = useParams()
    // console.log(id);
    const [singleData, setSingleData] = useState({}) 
    if(id){
        const getData = data.find((item)=>{
            return +item.mal_id === +id
        })
        setSingleData(getData)
    }

console.log(singleData);


  return (
    <div className="my-3 mx-5 px-4">
      <div className="cotainer">

        <div className="card" style={{width: "18rem"}}>
        <img src={singleData?.images.jpg.large_image_url} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{singleData?.title_english}</h5>
        <p className="card-text"><b>Total Number of Episodes: </b>{singleData?.episodes}</p>
        <p className="card-text"><b>Rating: </b>{singleData?.rating}</p>
      </div>
        <a href="/" className="btn btn-primary">Add to watchlist</a>
    </div>
</div>
      </div>
  )
}
