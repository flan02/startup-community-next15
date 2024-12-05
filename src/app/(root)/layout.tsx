import Navbar from '@/components/custom/Navbar'


type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Readonly<Props>) => {
  return (
    <main className='font-work-sans'>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout