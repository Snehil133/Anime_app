import React from 'react'
import {Routes, Route} from "react-router-dom"
import Anime from '../component/Anime'
import MovieDetail from '../component/MovieDetail'
import WatchList from '../component/WatchList'

export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Anime/>}  />
        <Route path="/watchlist" element={<WatchList/>}  />
        <Route path="/:id" element={<MovieDetail/>}  />
    </Routes>
  )
}
