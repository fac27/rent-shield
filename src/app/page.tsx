import Image from 'next/image'
import Map from './components/Map'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Map apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} />
      
    </main>
  )
}
