import Layout from '@/components/Layout'
import ManageUser from '@/components/ManageUser'
import MainCounter from '@/components/counter'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <MainCounter/> */}
      {/* <ManageUser/> */}
      <Layout />
    </>
  )
}
