import { useState } from "react"
import { Link } from "react-router-dom"
import SiteHeader from "./SiteHeader.jsx"

const questions = [
  {
    question: "Etkinlik nerede gerçekleşecek?",
    answer:
      "Gösterim İstanbul’daki Fişekhane Açık Hava Sineması’nda gerçekleştirilecektir. Etkinlik sayfasındaki Yol Tarifi bağlantısını kullanabilirsin.",
  },
  {
    question: "Kapılar saat kaçta açılıyor?",
    answer:
     "Etkinlik alanı saat 19.30’da açılır. Film gösterimi saat 20.30’da başlayacaktır. Bilet kontrolü için en az 30 dakika önce gelmeni öneririz.",
  },
  {
    question: "Yağmur yağarsa ne olacak?",
    answer:
      "Yoğun yağış nedeniyle gösterimin yapılamaması durumunda etkinlik ileri bir tarihe ertelenir. Bilgilendirme kayıt sırasında verilen e-posta adresine gönderilir.",
  },
  {
    question: "Etkinliğin yaş sınırı var mı?",
    answer:
      "Film için 10 yaş ve üzeri izleyici önerilmektedir. 13 yaşından küçük misafirlerin bir yetişkinle birlikte katılması gerekir.",
  },
  {
    question: "Dışarıdan yiyecek getirebilir miyim?",
    answer:
      "Kapalı ambalajlı küçük atıştırmalıklar ve su getirilebilir. Etkinlik alanında sıcak içecek ve yiyecek satışı da bulunacaktır.",
  },
  {
    question: "Battaniye getirmeli miyim?",
    answer:
      "Etkinlik açık havada yapılacağı için ince bir battaniye veya hırka getirmeni öneririz. Özel Alan biletine battaniye dahildir.",
  },
  {
    question: "Rezervasyonumu nasıl iptal edebilirim?",
    answer:
      "Biletlerim sayfasına girerek ilgili biletin altındaki Rezervasyonu iptal et butonunu kullanabilirsin.",
  },
  {
    question: "Biletimi başka birine devredebilir miyim?",
    answer:
      "Rezervasyonlar isimle oluşturulur. Değişiklik talebini etkinlikten en az 24 saat önce iletişim formuyla ekibe gönderebilirsin.",
  },
]

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <header className="text-center">
          <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
            MERAK ETTİKLERİN
          </span>

          <h1 className="mt-5 font-serif text-5xl sm:text-6xl">
            Sık Sorulan Sorular
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100/55">
            Gösterim, biletler ve açık hava sinemasıyla ilgili soruların
            yanıtlarını burada bulabilirsin.
          </p>
        </header>

        <section className="mt-12 grid gap-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-yellow-300/35 bg-yellow-300/5"
                    : "border-purple-300/10 bg-purple-950/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {item.question}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-purple-300/25 transition ${
                      isOpen ? "rotate-45 bg-yellow-300 text-[#05081d]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-purple-300/10 px-6 py-5">
                    <p className="max-w-3xl leading-7 text-purple-100/60">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </section>

        <section className="mt-12 rounded-[2rem] border border-purple-300/15 bg-purple-950/20 p-8 text-center">
          <h2 className="font-serif text-3xl">
            Aradığın cevabı bulamadın mı?
          </h2>

          <p className="mt-3 text-purple-100/55">
            Etkinlik ekibine iletişim sayfasından mesaj gönderebilirsin.
          </p>

          <Link
            to="/iletisim"
            className="mt-6 inline-flex rounded-full bg-yellow-300 px-7 py-3 font-bold text-[#05081d]"
          >
            Bize ulaş
          </Link>
        </section>
      </main>
    </div>
  )
}

export default FaqPage