import { Link } from "react-router-dom"
import SiteHeader from "./SiteHeader.jsx"

const details = [
  { label: "Yönetmen", value: "Henry Selick" },
  { label: "Tür", value: "Animasyon · Fantastik · Gizem" },
  { label: "Süre", value: "1 saat 40 dakika" },
  { label: "Yapım yılı", value: "2009" },
  { label: "Yaş önerisi", value: "10+" },
  { label: "Gösterim dili", value: "Türkçe altyazılı" },
]

const characters = [
  {
    name: "Coraline Jones",
    description:
      "Meraklı, cesur ve keşfetmeyi seven Coraline, yeni evinde gizli bir kapıyla karşılaşır.",
    symbol: "🗝",
  },
  {
    name: "Siyah Kedi",
    description:
      "Diğer dünyanın sırlarını bilen, Coraline’e yol gösteren gizemli bir yol arkadaşıdır.",
    symbol: "◉",
  },
  {
    name: "Diğer Anne",
    description:
      "Başlangıçta kusursuz görünen diğer dünyanın arkasındaki karanlık gücü temsil eder.",
    symbol: "●",
  },
]

function FilmPage() {
  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-purple-300/10">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_390px] lg:py-24">
            <div>
              <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
                KAPININ ARDINDAKİ HİKÂYE
              </span>

              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-purple-100 sm:text-6xl lg:text-7xl">
                Film Hakkında
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/70">
                Coraline, ailesiyle birlikte taşındığı eski evde küçük ve gizli
                bir kapı keşfeder. Kapının ardında kendi dünyasının daha renkli
                görünen bir kopyası vardır. Ancak bu kusursuz dünyanın ardında,
                Coraline’in çözmesi gereken karanlık bir sır saklanmaktadır.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-purple-100/55">
                Stop-motion tekniğiyle hazırlanan film; cesaret, aile, merak ve
                ait olma duygularını gizemli bir masal atmosferiyle anlatır. Bu
                bölüm spoiler içermez.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/biletler"
                  className="rounded-full bg-yellow-300 px-7 py-3 font-bold text-[#05081d] transition hover:-translate-y-1 hover:bg-yellow-200"
                >
                  Biletini seç
                </Link>

                <Link
                  to="/etkinlik"
                  className="rounded-full border border-purple-300/40 px-7 py-3 font-semibold transition hover:bg-purple-200 hover:text-[#05081d]"
                >
                  Etkinliği incele
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-purple-500/20 blur-2xl" />

              <img
                src="/coraline-poster.jpg"
                alt="Coraline film posteri"
                className="relative aspect-[3/4] w-full rounded-[2rem] border border-purple-200/20 object-cover shadow-2xl"
              />

              <span className="absolute -bottom-5 -left-5 grid h-20 w-20 place-items-center rounded-full border border-yellow-300/40 bg-[#0b1030] text-3xl text-yellow-300 shadow-xl">
                🗝
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {details.map((detail) => (
              <article
                key={detail.label}
                className="rounded-2xl border border-purple-300/10 bg-purple-950/20 p-6"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                  {detail.label}
                </span>

                <p className="mt-2 text-lg font-semibold text-purple-100">
                  {detail.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-purple-300/10 bg-purple-950/10">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.3em] text-yellow-300">
                KARAKTERLER
              </span>

              <h2 className="mt-4 font-serif text-4xl text-purple-100 sm:text-5xl">
                Diğer dünyanın sakinleri
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {characters.map((character) => (
                <article
                  key={character.name}
                  className="group rounded-3xl border border-purple-300/10 bg-[#090d29] p-7 transition hover:-translate-y-2 hover:border-purple-300/30"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-purple-300/30 bg-purple-950/60 text-2xl text-yellow-300">
                    {character.symbol}
                  </span>

                  <h3 className="mt-6 font-serif text-2xl text-purple-100">
                    {character.name}
                  </h3>

                  <p className="mt-3 leading-7 text-purple-100/60">
                    {character.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

export default FilmPage