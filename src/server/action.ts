// ! REVALIDATE THE ENTIRE PAGE
// export const revalidate = 3600

// - This type of revalidation is effective when we are using ISR (Incremental Static Regeneration) and we want to revalidate the entire page every 3600 seconds.
// - In case you need to refresh some data but doesn't need realtime updates.

export default async function fetchAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
    // cache: 'no-store',
    next: { revalidate: 3600 } // ! only this particular data refreshes every 3600 seconds
  })
  if (!response.ok) throw new Error('Failed to fetch data')

  const albums = await response.json()
  return albums.map((album: { id: number; title: string }) => ({
    id: album.id,
    title: album.title,
  }))
}