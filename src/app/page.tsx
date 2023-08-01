import SearchBar from 'components/SearchBar'

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="bg-slate-900 flex flex-col h-screen justify-start justify-center items-center w-screen dark:text-white">
        <div className="flex-col items-center text-center justify-center w-10/12 mb-8 ms-0">
          <h1 className="text-xl font-semibold bg-slate-900 mb-8 mt-0 dark:text-white">
            Nothing about us, without us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <SearchBar />
      </div>
    </main>
  )
}
