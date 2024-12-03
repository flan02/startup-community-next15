import React from 'react'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {

  return (
    <div>
      <h1 className="text-3xl">NAVBAR</h1>
      {children}
    </div>
  )
}

export default RootLayout