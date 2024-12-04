// import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const response = await fetch('http://localhost:3000/api/books')
  const books = await response.json()
  return (
    <div>
      <code>
        {JSON.stringify(books, null, 2)}
      </code>
    </div>
  )
}

export default page