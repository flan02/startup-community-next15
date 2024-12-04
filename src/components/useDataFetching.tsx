'use client'
import { useEffect, useState } from 'react'


type Props = {}

const useDataFetching = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await response.json()
        setAlbums(data)
      } catch (error) {
        console.error("Error fetching albums:", error)
      }
    }
    fetchAlbums()
  }, [])

  return albums
}


export default useDataFetching