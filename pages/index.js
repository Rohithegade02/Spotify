import Head from 'next/head'
import SideBar from '../components/SideBar'
import Center from '../components/Center'
import { getSession } from 'next-auth/react'
import Player from '../components/Player'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify-Clone </title>
      </Head>
      <main className="flex">
        <SideBar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
