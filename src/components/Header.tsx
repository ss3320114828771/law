import Image from "next/image"

export default function Header() {
  return (
    <header className="pt-8 pb-4 bg-gradient-to-b from-white/80 to-transparent">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-2xl opacity-40 -z-10" />
          <Image
            src="/sajid.jpeg"
            alt="Adv. Hafiz Sajid Hussain"
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-2xl mx-auto object-cover"
            priority
          />
        </div>

        <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>

        <p className="mt-3 text-lg text-slate-700 font-medium">
          Advocate Hafiz Sajid Hussain
        </p>
      </div>
    </header>
  )
}