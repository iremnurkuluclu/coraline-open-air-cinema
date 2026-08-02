import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import SiteHeader from "./SiteHeader.jsx"
import PaymentFields from "./PaymentFields.jsx"
import { supabase } from "./supabaseClient.js"

const ticketTypes = [
  {
    id: "standard",
    name: "Standart Bilet",
    description: "Açık hava gösterim alanına tek kişilik giriş.",
    price: 150,
    features: ["1 kişilik giriş", "Standart oturma alanı", "Film kitapçığı"],
  },
  {
    id: "duo",
    name: "İki Kişilik Bilet",
    description: "Gösterime iki kişi birlikte katılmak isteyenler için.",
    price: 250,
    features: ["2 kişilik giriş", "Yan yana oturma", "2 sıcak içecek"],
    featured: true,
  },
  {
    id: "special",
    name: "Özel Alan",
    description: "Perdeye yakın, minderli özel gösterim alanı.",
    price: 400,
    features: ["2 kişilik giriş", "Minderli özel alan", "Battaniye ve ikram"],
  },
]

function TicketsPage() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState("duo")
  const [quantity, setQuantity] = useState(1)
  const [form, setForm] = useState({
    fullName: "",
    guestName: "",
    email: "",
    phone: "",
  })
  const [cardForm, setCardForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const selectedTicket = ticketTypes.find((ticket) => ticket.id === selectedType)
  const total = useMemo(
    () => selectedTicket.price * quantity,
    [selectedTicket, quantity],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleCardChange = (event) => {
    const { name, value } = event.target
    let formattedValue = value

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(\d{4})(?=\d)/g, "$1 ")
    }

    if (name === "expiry") {
      const digits = value.replace(/\D/g, "").slice(0, 4)
      formattedValue =
        digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits
    }

    if (name === "cvc") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3)
    }

    setCardForm((current) => ({ ...current, [name]: formattedValue }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")

    const requiresSecondGuest = selectedType === "duo" || selectedType === "special"

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Lütfen bütün iletişim bilgilerini doldur.")
      return
    }

    if (requiresSecondGuest && !form.guestName.trim()) {
      setError("İki kişilik bilet için ikinci katılımcının adını yaz.")
      return
    }

    const cardDigits = cardForm.cardNumber.replace(/\s/g, "")
    if (
      !cardForm.cardName.trim() ||
      cardDigits.length !== 16 ||
      cardForm.expiry.length !== 5 ||
      cardForm.cvc.length !== 3
    ) {
      setError("Lütfen kart bilgilerini eksiksiz ve doğru biçimde doldur.")
      return
    }

    setSubmitting(true)
    const reservationCode = `CRL-${Date.now().toString().slice(-6)}`
    const reservation = {
      id: reservationCode,
      ticketId: selectedTicket.id,
      ticketName: selectedTicket.name,
      quantity,
      total,
      customer: form,
      paymentLastFour: cardDigits.slice(-4),
      eventDate: "30 Ekim 2026",
      eventTime: "20.30",
      venue: "Fişekhane Açık Hava Sineması",
      status: "Onaylandı",
      createdAt: new Date().toISOString(),
    }

    const { error: supabaseError } = await supabase
      .from("coraline_reservations")
      .insert({
        reservation_code: reservationCode,
        ticket_type: selectedTicket.id,
        ticket_name: selectedTicket.name,
        quantity,
        total,
        full_name: form.fullName.trim(),
        guest_name: requiresSecondGuest ? form.guestName.trim() : null,
        email: form.email.trim(),
        phone: form.phone.trim(),
        event_date: reservation.eventDate,
        event_time: reservation.eventTime,
        venue: reservation.venue,
        payment_last_four: cardDigits.slice(-4),
        status: "confirmed",
      })

    setSubmitting(false)
    if (supabaseError) {
      console.error("Reservation error:", supabaseError)
      setError(`Rezervasyon kaydedilemedi: ${supabaseError.message}`)
      return
    }

    const previousReservations = JSON.parse(
      localStorage.getItem("coraline-reservations") || "[]",
    )
    localStorage.setItem(
      "coraline-reservations",
      JSON.stringify([reservation, ...previousReservations]),
    )
    navigate("/biletlerim", { state: { newReservation: true } })
  }

  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />
      <main>
        <section className="border-b border-purple-300/10">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:py-20">
            <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
              30 EKİM 2026 · 20.30
            </span>
            <h1 className="mt-5 font-serif text-5xl sm:text-6xl">
              Gecedeki yerini ayır
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100/60">
              Bilet türünü seç, katılımcı ve demo ödeme bilgilerini doldur.
            </p>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_380px]"
        >
          <div>
            <h2 className="font-serif text-3xl">1. Bilet türünü seç</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {ticketTypes.map((ticket) => {
                const selected = selectedType === ticket.id
                return (
                  <button
                    key={ticket.id}
                    type="button"
                    onClick={() => setSelectedType(ticket.id)}
                    className={`relative rounded-3xl border p-6 text-left transition ${
                      selected
                        ? "border-yellow-300 bg-yellow-300/10"
                        : "border-purple-300/10 bg-purple-950/15 hover:border-purple-300/30"
                    }`}
                  >
                    {ticket.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-purple-300 px-3 py-1 text-xs font-bold text-[#05081d]">
                        Önerilen
                      </span>
                    )}
                    <h3 className="pr-16 text-xl font-semibold">{ticket.name}</h3>
                    <p className="mt-3 min-h-14 text-sm leading-6 text-purple-100/55">
                      {ticket.description}
                    </p>
                    <strong className="mt-5 block font-serif text-3xl text-yellow-300">
                      ₺{ticket.price}
                    </strong>
                    <ul className="mt-5 grid gap-2 text-sm text-purple-100/65">
                      {ticket.features.map((feature) => (
                        <li key={feature}>✓ {feature}</li>
                      ))}
                    </ul>
                  </button>
                )
              })}
            </div>

            <section className="mt-12">
              <h2 className="font-serif text-3xl">2. Katılımcı bilgileri</h2>
              <div className="mt-7 grid gap-5 rounded-3xl border border-purple-300/10 bg-purple-950/15 p-6 sm:grid-cols-2">
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm font-semibold">Ad Soyad</span>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">E-posta</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ornek@mail.com"
                    className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Telefon</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="05xx xxx xx xx"
                    className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
                  />
                </label>
                {(selectedType === "duo" || selectedType === "special") && (
                  <label className="grid gap-2 sm:col-span-2">
                    <span className="text-sm font-semibold">
                      İkinci katılımcının adı soyadı
                    </span>
                    <input
                      name="guestName"
                      value={form.guestName}
                      onChange={handleChange}
                      placeholder="İkinci kişinin adı ve soyadı"
                      className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
                    />
                  </label>
                )}
              </div>
            </section>

            <PaymentFields cardForm={cardForm} onCardChange={handleCardChange} />
          </div>

          <aside className="h-fit rounded-[2rem] border border-purple-300/15 bg-[#090d29] p-7 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-[0.3em] text-yellow-300">
              REZERVASYON ÖZETİ
            </span>
            <h2 className="mt-5 font-serif text-3xl">{selectedTicket.name}</h2>
            <dl className="mt-7 grid gap-5 text-sm">
              <div className="flex justify-between border-b border-purple-300/10 pb-4">
                <dt className="text-purple-100/45">Tarih</dt>
                <dd>30 Ekim 2026</dd>
              </div>
              <div className="flex justify-between border-b border-purple-300/10 pb-4">
                <dt className="text-purple-100/45">Saat</dt>
                <dd>20.30</dd>
              </div>
              <div className="flex items-center justify-between border-b border-purple-300/10 pb-4">
                <dt className="text-purple-100/45">Adet</dt>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="grid h-8 w-8 place-items-center rounded-full border border-purple-300/30"
                  >
                    −
                  </button>
                  <strong>{quantity}</strong>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.min(6, current + 1))}
                    className="grid h-8 w-8 place-items-center rounded-full border border-purple-300/30"
                  >
                    +
                  </button>
                </div>
              </div>
            </dl>
            <div className="mt-7 flex items-end justify-between">
              <span className="text-purple-100/45">Toplam</span>
              <strong className="font-serif text-4xl text-yellow-300">₺{total}</strong>
            </div>
            {error && (
              <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-7 w-full rounded-full bg-yellow-300 px-6 py-4 font-bold text-[#05081d] transition hover:bg-yellow-200 disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "Kaydediliyor..." : "Rezervasyonu tamamla"}
            </button>
           
          </aside>
        </form>
      </main>
    </div>
  )
}

export default TicketsPage