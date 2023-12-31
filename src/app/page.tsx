import SearchBar from 'components/SearchBar'

export default async function Home() {
  return (
    <main className="flex h-[calc(100vh-7rem)] items-center justify-between">
      <div className="bg-slate-900 flex flex-col h-full justify-center items-center w-screen dark:text-white">
        <div className="flex-col items-center text-center justify-center w-10/12 mb-8 ms-0">
          <h1 className="text-xl font-semibold bg-slate-900 mb-8 mt-0 dark:text-white">
            By renters, for renters
          </h1>
          <p>
            Find rental property listings, with comprehensive and transparent
            information, no more hidden fees or surprises. Created by renters
            who know what renters need. <br />
            We&#39;re committed to providing renters with the highest quality
            information, so you can find the perfect place to call home. <br />
            We work with the best landlords who care and understand that quality
            listings are the key to getting great tenants and a property let
            quickly.
          </p>
        </div>
        <SearchBar />
      </div>
    </main>
  )
}
