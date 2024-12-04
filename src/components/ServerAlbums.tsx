import fetchAlbums from '@/server/action';
import React from 'react'




const ServerAlbums = async () => {
  const serverAlbums = await fetchAlbums();
  // console.log(serverAlbums);
  return (
    <div>
      <h1>
        ServerAlbums
      </h1>
      {serverAlbums.map((album: { id: number; title: string }) => (
        <div key={album.id}>
          <p>{album.id} {album.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ServerAlbums