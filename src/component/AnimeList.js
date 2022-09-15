import {useNavigate} from "react-router-dom"
const AnimeList = ({item}) => {
  // console.log(item);

  const navigate = useNavigate()

  const handleRedirect = (id) =>{
    navigate(`/${id}`)
  }

  return (
    <div className="my-3 mx-5 px-4">
      <div className="cotainer" onClick={()=>handleRedirect(item.mal_id)}>

        <div className="card" style={{width: "18rem"}}>
        <img src={item.images.jpg.large_image_url} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.title_english}</h5>
        <p className="card-text"><b>Total Number of Episodes: </b>{item.episodes}</p>
        <p className="card-text"><b>Rating: </b>{item.rating}</p>
      </div>
        <a href="/" className="btn btn-primary">Add to watchlist</a>
    </div>
</div>
      </div>
  )
}

export default AnimeList

