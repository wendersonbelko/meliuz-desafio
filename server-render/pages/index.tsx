import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/characters')
  }, [])

  return (
    <div>
    </div>
  )
}

export default Home
