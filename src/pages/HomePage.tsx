import { Navbar } from '@/components/layout/Navbar'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#003be2]">
      <Navbar />
      <main className="sr-only">
        <h1>ByteSpace New</h1>
        <p>Frontend foundation is ready.</p>
      </main>
    </div>
  )
}
