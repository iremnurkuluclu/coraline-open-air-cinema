import { Link } from "react-router-dom"
import SiteHeader from "./SiteHeader.jsx"

const program = [
  {
    time: "19.30",
    title: "Kapıların açılması",
    text: "Bilet kontrolü ve açık hava alanına yerleşme.",
  },
  {
    time: "19.45",
    title: "Karşılama",
    text: "Müzik, fotoğraf alanı ve yiyecek-içecek servisi.",
  },
  {
    time: "20.15",
    title: "Film öncesi",
    text: "Coraline ve stop-motion tekniği üzerine kısa tanıtım.",
  },
  {
    time: "20.30",
    title: "Gösterim",
    text: "Coraline açık hava gösteriminin başlangıcı.",
  },
]

const facilities = [
  {
    icon: "◐",
    title: "Açık hava gösterimi",
    text: "Film, yıldızların altında geniş açık hava perdesinde gösterilir.",
  },
  {
    icon: "▱",
    title: "Konforlu oturma",
    text: "Minderli oturma alanları ve sınırlı sayıda battaniye bulunur.",
  },
  {
    icon: "♨",
    title: "Yiyecek ve içecek",
    text: "Gösterim öncesinde sıcak içecek ve atıştırmalık alınabilir.",
  },
  {
    icon: "⌖",
    title: "Kolay ulaşım",
    text: "Fişekhane’ye toplu taşıma veya özel araçla ulaşılabilir.",
  },
]

function EventPage() {
  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-purple-300/10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_420px] lg:py-24">
            <div>
              <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
                30 EKİM 2026 · İSTANBUL
              </span>

              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
                Yıldızların altında gizemli bir gece
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-purple-100/65">
                Coraline’in diğer dünyasına Fişekhane Açık Hava Sineması’nda
                adım at. Film gösterimi, özel atmosfer alanları ve küçük
                sürprizlerle unutulmaz bir gece seni bekliyor.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/biletler"
                  className="rounded-full bg-yellow-300 px-7 py-3 font-bold text-[#05081d] transition hover:-translate-y-1 hover:bg-yellow-200"
                >
                  Yerini ayır
                </Link>

                <a
                  href="https://maps.google.com/?q=Fişekhane+İstanbul"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-purple-300/40 px-7 py-3 font-semibold transition hover:bg-purple-200 hover:text-[#05081d]"
                >
                  Yol tarifi
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-purple-300/15 bg-purple-950/30 p-7 shadow-2xl">
              <span className="text-xs font-bold tracking-[0.3em] text-yellow-300">
                ETKİNLİK BİLGİLERİ
              </span>

              <dl className="mt-7 grid gap-6">
                <div className="border-b border-purple-300/10 pb-5">
                  <dt className="text-sm text-purple-100/45">Tarih</dt>
                  <dd className="mt-1 text-xl font-semibold">30 Ekim 2026</dd>
                </div>

                <div className="border-b border-purple-300/10 pb-5">
                  <dt className="text-sm text-purple-100/45">Film başlangıcı</dt>
                  <dd className="mt-1 text-xl font-semibold">20.30</dd>
                </div>

                <div className="border-b border-purple-300/10 pb-5">
                  <dt className="text-sm text-purple-100/45">Mekân</dt>
                  <dd className="mt-1 text-xl font-semibold">
                    Fişekhane Açık Hava Sineması
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-purple-100/45">Tahmini bitiş</dt>
                  <dd className="mt-1 text-xl font-semibold">22.10</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-yellow-300">
              GECENİN PROGRAMI
            </span>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Gösterim programı
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {program.map((item) => (
              <article
                key={item.time}
                className="grid gap-4 rounded-3xl border border-purple-300/10 bg-purple-950/15 p-6 sm:grid-cols-[100px_1fr]"
              >
                <time className="text-2xl font-bold text-yellow-300">
                  {item.time}
                </time>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-purple-100/55">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-purple-300/10 bg-purple-950/10">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((facility) => (
                <article
                  key={facility.title}
                  className="rounded-3xl border border-purple-300/10 bg-[#090d29] p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-yellow-300 text-xl text-[#05081d]">
                    {facility.icon}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold">
                    {facility.title}
                  </h3>

                  <p className="mt-2 leading-7 text-purple-100/55">
                    {facility.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-yellow-300/20 bg-yellow-300/5 p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl">Gösterim öncesi hatırlatma</h2>
              <p className="mt-2 max-w-2xl text-purple-100/55">
                Etkinlik açık havada gerçekleşecektir. Serin hava ihtimaline
                karşı yanında ince bir battaniye veya hırka bulundurmanı
                öneririz.
              </p>
            </div>

            <Link
              to="/sss"
              className="mt-6 inline-flex rounded-full border border-yellow-300/40 px-6 py-3 font-semibold text-yellow-200 md:mt-0"
            >
              Sık sorulan sorular
            </Link>
          </div>
        </section>
      </main>

     
    </div>
  )
}

export default EventPage