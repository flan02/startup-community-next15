import React from 'react'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <h1 className='text-3xl'>DASHBOARD LAYOUT</h1>
      {children}
    </div>
  )
}

export default DashboardLayout