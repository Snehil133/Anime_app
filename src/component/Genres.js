import React, { Component } from 'react'

export class Genres extends Component {
    genres= [
        {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
        ]

        constructor() {
            super();
            this.state={
                genres: this.genres,
                loading: false,
            };
        }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Genres
