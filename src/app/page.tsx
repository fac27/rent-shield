import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Link href={'/listings'}>View listings</Link>
    </main>
  );
}
