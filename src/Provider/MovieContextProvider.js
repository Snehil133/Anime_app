import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MovieContext = createContext()

export const MovieContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const getData = ()=>{
        axios.get("https://api.jikan.moe/v4/anime").then((response)=>{
            setData(response.data.data)
        })
    }
    useEffect(()=>{
            getData()
    },[data])

    const handleFilter = (val) =>{
        //  console.log(data.map)
        let filterArr = []
       for(let i=0; i<data.length; i++){
        let geners = data[i].genres
           for(let j=0; j<geners?.length; j++){
              if(geners[j].name===val){
                console.log("yes")
                    filterArr.push(data[i])
            
                    getData()
        }
           }
           
        }
        setData(filterArr)
    }

    // console.log(data)
    return(
        <MovieContext.Provider value={{data,handleFilter}}>
            {children}
        </MovieContext.Provider>
    )
}