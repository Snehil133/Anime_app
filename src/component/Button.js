import React, { useContext } from 'react'
import { MovieContext } from '../Provider/MovieContextProvider'


  const Button = () => {
    const {handleFilter} = useContext(MovieContext)
    return (
      <div className="menu-tabs container">     
          <div className="menu-tab d-flex justify-content-between">
           <button onClick={()=>handleFilter("Action")} className="btn btn-warning">Action</button>
           <button onClick={()=>handleFilter("Adventure")} className="btn btn-warning">Adventure</button>
           <button onClick={()=>handleFilter("Comedy")} className="btn btn-warning">Comedy</button>
           <button onClick={()=>handleFilter("Drama")} className="btn btn-warning">Drama</button>
           <button onClick={()=>handleFilter("Sci-Fi")} className="btn btn-warning">Sci-Fi</button>
           <button onClick={()=>handleFilter("Sports")} className="btn btn-warning">Sports</button>
           </div>
    
      </div>
    )
  }
export default Button
