import SearchBar from 'components/SearchBar'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-slate-900 flex h-screen justify-center items-center w-full">
        <SearchBar />
      </div>
    </main>
  )
}
