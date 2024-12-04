'use client'
import React from 'react'
import useDataFetching from './useDataFetching';



const ClientAlbums = () => {
  const albums: any = useDataFetching();
  // console.log(albums);
  return (
    <div>
      <h2>
        Client Albums
      </h2>
      {
        albums.map((album: { id: number; title: string }) => (
          <div key={album.id}>
            <h3>{`${album.id} ${album.title}`}</h3>
          </div>
        ))
      }
    </div>

  )
}

export default ClientAlbums