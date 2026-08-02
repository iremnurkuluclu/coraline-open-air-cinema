import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import SiteHeader from "./SiteHeader.jsx"

function MyTicketsPage() {
  const location = useLocation()
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const savedReservations = JSON.parse(
      localStorage.getItem("coraline-reservations") || "[]"
    )

    setReservations(savedReservations)
  }, [])

  const cancelReservation = (reservationId) => {
    const confirmed = window.confirm(
      "Bu rezervasyonu iptal etmek istediğine emin misin?"
    )

    if (!confirmed) return

    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== reservationId
    )

    setReservations(updatedReservations)

    localStorage.setItem(
      "coraline-reservations",
      JSON.stringify(updatedReservations)
    )
  }

  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        {location.state?.newReservation && (
          <div className="mb-8 rounded-2xl border border-green-300/25 bg-green-300/10 p-5 text-green-100">
            Rezervasyonun başarıyla oluşturuldu. Bilet bilgilerin aşağıda
            gösteriliyor.
          </div>
        )}

        <div className="flex flex-col gap-6 border-b border-purple-300/10 pb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
              REZERVASYONLAR
            </span>

            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Biletlerim
            </h1>

            <p className="mt-4 text-purple-100/55">
              Oluşturduğun açık hava sineması rezervasyonlarını buradan
              görüntüleyebilirsin.
            </p>
          </div>

          <Link
            to="/biletler"
            className="inline-flex w-fit rounded-full bg-yellow-300 px-6 py-3 font-bold text-[#05081d]"
          >
            Yeni bilet al
          </Link>
        </div>

        {reservations.length === 0 ? (
          <section className="mt-12 rounded-[2rem] border border-dashed border-purple-300/25 bg-purple-950/10 px-6 py-16 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-purple-300/25 text-2xl text-yellow-300">
              ●
            </span>

            <h2 className="mt-6 font-serif text-3xl">
              Henüz bir biletin bulunmuyor
            </h2>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-purple-100/50">
              30 Ekim’de gerçekleşecek Coraline gösterimi için biletini
              oluşturabilirsin.
            </p>

            <Link
              to="/biletler"
              className="mt-7 inline-flex rounded-full border border-purple-300/40 px-6 py-3 font-semibold transition hover:bg-purple-200 hover:text-[#05081d]"
            >
              Bilet seçeneklerini incele
            </Link>
          </section>
        ) : (
          <section className="mt-10 grid gap-6">
            {reservations.map((reservation) => (
              <article
                key={reservation.id}
                className="overflow-hidden rounded-[2rem] border border-purple-300/15 bg-purple-950/15"
              >
                <div className="grid lg:grid-cols-[1fr_260px]">
                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold tracking-[0.25em] text-yellow-300">
                          CORALINE AÇIK HAVA SİNEMASI
                        </span>

                        <h2 className="mt-3 font-serif text-3xl">
                          {reservation.ticketName}
                        </h2>
                      </div>

                      <span className="rounded-full border border-green-300/25 bg-green-300/10 px-4 py-2 text-sm font-semibold text-green-200">
                        {reservation.status}
                      </span>
                    </div>

                    <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-purple-100/40">
                          Tarih
                        </dt>
                        <dd className="mt-1 font-semibold">
                          {reservation.eventDate}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs uppercase tracking-wider text-purple-100/40">
                          Saat
                        </dt>
                        <dd className="mt-1 font-semibold">
                          {reservation.eventTime}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs uppercase tracking-wider text-purple-100/40">
                          Bilet
                        </dt>
                        <dd className="mt-1 font-semibold">
                          {reservation.quantity} adet
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs uppercase tracking-wider text-purple-100/40">
                          Toplam
                        </dt>
                        <dd className="mt-1 font-semibold text-yellow-300">
                          ₺{reservation.total}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-8 border-t border-purple-300/10 pt-6">
                      <p className="font-semibold">
                        {reservation.customer.fullName}
                      </p>

                      <p className="mt-1 text-sm text-purple-100/45">
                        {reservation.customer.email} ·{" "}
                        {reservation.customer.phone}
                      </p>

                      <p className="mt-3 text-sm text-purple-100/55">
                        {reservation.venue}
                      </p>
                    </div>
                  </div>

                  <aside className="flex flex-col justify-between border-t border-purple-300/10 bg-[#090d29] p-7 lg:border-l lg:border-t-0">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-purple-100/40">
                        Rezervasyon kodu
                      </span>

                      <strong className="mt-2 block font-mono text-2xl text-yellow-300">
                        {reservation.id}
                      </strong>

                      <div className="mt-7 grid aspect-square place-items-center rounded-2xl border border-purple-300/15 bg-purple-100 text-center text-[#05081d]">
                        <div>
                          <span className="text-5xl">▦</span>
                          <p className="mt-2 text-xs font-bold">
                            GİRİŞ KODU
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => cancelReservation(reservation.id)}
                      className="mt-6 w-full rounded-full border border-red-300/30 px-5 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-300 hover:text-[#05081d]"
                    >
                      Rezervasyonu iptal et
                    </button>
                  </aside>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  )
}

export default MyTicketsPage