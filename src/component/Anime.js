import { MovieContext } from '../Provider/MovieContextProvider'
import AnimeList from './AnimeList'
import styled from "styled-components"
import Button from './Button'
import { useContext } from 'react'

// const filterItem = (cat, setItem) =>{

//   const updatedItems = AnimeList.filter((currEle, setItem) =>{
//     return currEle.genres.name === cat
//   });
//   setItem(updatedItems)
// }

const Anime = () =>{
  const {data} = useContext(MovieContext)
  // console.log(data)
    return (
      <div className= "mt-3">
        <Button/>
       <div className="container my-3">
        <h2 className='text-center'>List of Anime Movies</h2>
        </div>
        <div className="menu-tabs container">
          </div>
        <BookListWrapper>
              
              {
                data.map((item, index) =>{
                  return (
                    <div className="col-md-4" key={index}> 
                  <AnimeList item ={item}/>
                  </div>
                  )
                })
              }
         </BookListWrapper>
    
    </div>
    )
  }


export default Anime

const BookListWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(289px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;

