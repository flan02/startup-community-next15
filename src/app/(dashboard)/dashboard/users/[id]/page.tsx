import React from 'react'

type Props = {
  params: {
    id: string
  }
}

const Id = async ({ params }: Props) => {
  const { id } = await params
  return (
    <h1 className='text-3xl'>{`User ${id} details page`}</h1>
  )
}

export default Id