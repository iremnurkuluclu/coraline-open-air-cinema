import { supabase } from "./supabaseClient.js"
import { useState } from "react"
import SiteHeader from "./SiteHeader.jsx"

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Bilet ve rezervasyon",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }
const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus("")

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus("error")
      return
    }
const { error: messageError } = await supabase
  .from("coraline_messages")
  .insert({
    name: form.name.trim(),
    email: form.email.trim(),
    subject: form.subject,
    message: form.message.trim(),
  })

if (messageError) {
  console.error("Message error:", messageError)
  setStatus("error")
  return
}
    const previousMessages = JSON.parse(
      localStorage.getItem("coraline-messages") || "[]"
    )

    const newMessage = {
      id: Date.now(),
      ...form,
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem(
      "coraline-messages",
      JSON.stringify([newMessage, ...previousMessages])
    )

    setForm({
      name: "",
      email: "",
      subject: "Bilet ve rezervasyon",
      message: "",
    })

    setStatus("success")
  }

  return (
    <div className="min-h-screen bg-[#05081d] text-purple-100">
      <SiteHeader />

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <section>
          <span className="text-xs font-bold tracking-[0.35em] text-yellow-300">
            BİZE ULAŞ
          </span>

          <h1 className="mt-5 max-w-xl font-serif text-5xl leading-tight sm:text-6xl">
            Diğer dünyanın kapısını birlikte aralayalım
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-purple-100/55">
            Biletler, ulaşım, gösterim koşulları veya rezervasyon değişiklikleri
            hakkında etkinlik ekibine mesaj gönderebilirsin.
          </p>

          <div className="mt-10 grid gap-4">
            <article className="rounded-2xl border border-purple-300/10 bg-purple-950/15 p-6">
              <span className="text-xs font-bold tracking-wider text-yellow-300">
                E-POSTA
              </span>
              <p className="mt-2 text-lg font-semibold">
                hello@coralinecinema.com
              </p>
            </article>

            <article className="rounded-2xl border border-purple-300/10 bg-purple-950/15 p-6">
              <span className="text-xs font-bold tracking-wider text-yellow-300">
                TELEFON
              </span>
              <p className="mt-2 text-lg font-semibold">
                +90 212 000 30 30
              </p>
            </article>

            <article className="rounded-2xl border border-purple-300/10 bg-purple-950/15 p-6">
              <span className="text-xs font-bold tracking-wider text-yellow-300">
                INSTAGRAM
              </span>
              <p className="mt-2 text-lg font-semibold">
                @coralineopenair
              </p>
            </article>

            <article className="rounded-2xl border border-purple-300/10 bg-purple-950/15 p-6">
              <span className="text-xs font-bold tracking-wider text-yellow-300">
                MEKÂN
              </span>
              <p className="mt-2 text-lg font-semibold">
                Fişekhane Açık Hava Sineması
              </p>
            </article>
          </div>
        </section>

        <section className="h-fit rounded-[2rem] border border-purple-300/15 bg-purple-950/20 p-7 shadow-2xl sm:p-9">
          <h2 className="font-serif text-3xl">Mesaj gönder</h2>

          <p className="mt-2 text-sm text-purple-100/45">
            Formdaki bütün alanları doldur. Ekibimiz en kısa sürede dönüş
            yapacaktır.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Ad Soyad</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/25 focus:border-yellow-300"
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
                  className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/25 focus:border-yellow-300"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Konu</span>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none focus:border-yellow-300"
              >
                <option>Bilet ve rezervasyon</option>
                <option>Etkinlik ve program</option>
                <option>Ulaşım ve mekân</option>
                <option>Rezervasyon değişikliği</option>
                <option>Diğer</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Mesaj</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="7"
                placeholder="Mesajınızı yazın..."
                className="resize-none rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/25 focus:border-yellow-300"
              />
            </label>

            {status === "error" && (
              <p className="rounded-xl border border-red-300/25 bg-red-300/10 p-4 text-sm text-red-200">
                Lütfen ad, e-posta ve mesaj alanlarını doldur.
              </p>
            )}

            {status === "success" && (
              <p className="rounded-xl border border-green-300/25 bg-green-300/10 p-4 text-sm text-green-200">
                Mesajın başarıyla gönderildi. En kısa sürede sana dönüş
                yapacağız.
              </p>
            )}

            <button
              type="submit"
              className="rounded-full bg-yellow-300 px-7 py-4 font-bold text-[#05081d] transition hover:-translate-y-1 hover:bg-yellow-200"
            >
              Mesajı gönder
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default ContactPage