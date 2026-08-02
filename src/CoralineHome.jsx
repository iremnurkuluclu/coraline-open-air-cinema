import GecePerdesiLogo from "./GecePerdesiLogo.jsx"
function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05081d] text-white">
      {/* Ana tanıtım bölümü */}
      <section className="relative min-h-screen px-4 py-6 sm:px-6 md:px-12 lg:px-20">
 {/* Coraline kedisi */}
<img
  src="/coraline-cat-transparent.png"
  alt="Coraline'ın siyah kedisi"
 className="pointer-events-none absolute bottom-2 -left-2 z-[5] w-16 opacity-60 sm:w-20 md:w-24 lg:-bottom-4 lg:-left-4 lg:w-36 lg:opacity-90 xl:w-48"
/>
        {/* Arka plan ışıkları */}
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />

        {/* Menü */}
        <nav className="relative z-10 flex items-center justify-between">
          <a
  href="/"
  className="transition hover:opacity-85"
  aria-label="Gece Perdesi ana sayfa"
>
  <GecePerdesiLogo compact />
</a>
         

          <div className="hidden items-center gap-8 text-sm text-purple-100 md:flex">
            <a
              href="/film"
              className="transition hover:text-yellow-300"
            >
              Film Hakkında
            </a>

            <a
              href="/etkinlik"
              className="transition hover:text-yellow-300"
            >
              Etkinlik
            </a>

            <a
              href="/biletler"
              className="rounded-full border border-purple-400 px-5 py-2 transition hover:bg-purple-400 hover:text-[#05081d]"
            >
              Bilet Al
            </a>
          </div>
        </nav>

        {/* Ana içerik */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center text-center">
          {/* Açık hava sineması etiketi */}
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 backdrop-blur-sm">
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-yellow-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />
    <path d="m17 4 .4 1.1 1.1.4-1.1.4L17 7l-.4-1.1-1.1-.4 1.1-.4L17 4Z" />
  </svg>

  Açık Hava Sineması
</div>
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs sm:tracking-[0.4em] md:text-sm">
            Yıldızların Altında Özel Gösterim
          </p>

          {/* Coraline başlığı */}
          <div className="relative mb-8">
            <h1
              aria-label="Coraline"
              className="flex items-center justify-center gap-[0.01em] font-['Henny_Penny'] text-[clamp(2.35rem,12vw,5.5rem)] font-normal leading-none text-purple-200 drop-shadow-[0_0_16px_rgba(192,132,252,0.45)]"
            >
              {/* Ağlı C görseli */}
              <img
                src="/coraline-c-v3.png"
                alt=""
                className="h-[1.28em] w-auto shrink-0 object-contain"
              />

              
              {/* Düğme biçimindeki dönen O */}
<span className="relative mx-[0.03em] h-[0.72em] w-[0.72em] shrink-0">
  <span className="absolute inset-0 grid animate-[spin_12s_linear_infinite] grid-cols-2 place-items-center rounded-full border-[0.045em] border-purple-200 bg-purple-950/70 p-[0.12em] shadow-[inset_0_0_12px_rgba(216,180,254,0.35),0_0_14px_rgba(168,85,247,0.3)] motion-reduce:animate-none">
    <span className="h-[0.1em] w-[0.1em] rounded-full bg-[#05081d]" />
    <span className="h-[0.1em] w-[0.1em] rounded-full bg-[#05081d]" />
    <span className="h-[0.1em] w-[0.1em] rounded-full bg-[#05081d]" />
    <span className="h-[0.1em] w-[0.1em] rounded-full bg-[#05081d]" />
  </span>
</span>

              {/* Ortadaki harfler */}
              <span className="inline-block translate-y-1 rotate-2">R</span>
              <span className="inline-block -translate-y-1 -rotate-3">A</span>
              <span className="inline-block translate-y-1 rotate-2">L</span>
              <span className="inline-block -rotate-2">I</span>
              <span className="inline-block translate-y-1 rotate-3">N</span>

              {/* Ağlı E görseli */}
              <img
                src="/coraline-e.png"
                alt=""
                className="h-[1.08em] w-auto shrink-0 -rotate-2 object-contain"
              />
            </h1>
          </div>

          {/* Kısa tanıtım */}
          <p className="max-w-xl px-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">
            Diğer dünyanın kapısını aralamaya ve yıldızların altında
            unutulmaz bir geceye hazır mısın?
          </p>

          {/* Tarih ve konum */}
          <div className="mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm font-medium text-purple-100 md:gap-x-6 md:text-base">
            <span>30 Ekim 2026</span>

            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />

            <span className="flex items-center gap-2">
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-yellow-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>

  20.30
</span>

            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />

            <span>Fişekhane Açık Hava Sineması</span>
          </div>

          {/* Butonlar */}
          <div className="mt-10 flex w-full max-w-md flex-col gap-4 px-5 sm:flex-row sm:justify-center">
            <a
              href="/biletler"
              className="group flex items-center justify-center gap-3 rounded-full border-2 border-yellow-200 bg-yellow-300 px-7 py-3.5 font-bold text-[#05081d] shadow-[0_0_30px_rgba(253,224,71,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200"
            >
              {/* Küçük düğme simgesi */}
              <span className="grid h-8 w-8 shrink-0 grid-cols-2 place-items-center rounded-full border-2 border-[#05081d]/70 p-1.5 transition duration-300 group-hover:rotate-45">
                <span className="h-1 w-1 rounded-full bg-[#05081d]/70" />
                <span className="h-1 w-1 rounded-full bg-[#05081d]/70" />
                <span className="h-1 w-1 rounded-full bg-[#05081d]/70" />
                <span className="h-1 w-1 rounded-full bg-[#05081d]/70" />
              </span>

              Bilet Al
            </a>

            <a
              href="/film"
              className="rounded-full border border-purple-400/70 bg-purple-950/20 px-7 py-3.5 font-semibold text-purple-100 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-purple-400/10"
            >
              Filmi Keşfet
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </section>
            {/* Film hakkında bölümü */}
      <section
        id="film"
        className="relative border-t border-purple-300/10 bg-[#080b25] px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28"
      >
        {/* Arka plan ışığı */}
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-700/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Film afişi */}
          <div className="relative mx-auto w-full max-w-xs">
            {/* Arkadaki dekoratif çerçeve */}
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-purple-300/30 bg-purple-500/10" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-purple-200/30 bg-purple-950 shadow-[0_25px_80px_rgba(88,28,135,0.35)]">
              <img
                src="/coraline-poster.jpg"
                alt="Coraline film afişi"
                className="aspect-[2/3] h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Afiş üzerindeki küçük etiket */}
            <div className="absolute -bottom-5 -right-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-4 border-[#080b25] bg-yellow-300 text-center text-xs font-bold leading-tight text-[#05081d] shadow-xl sm:h-24 sm:w-24">
              30
              <br />
              EKİM
            </div>
          </div>

          {/* Film bilgileri */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Gecenin Filmi
            </p>

            <h2 className="font-['Henny_Penny'] text-5xl font-normal text-purple-200 sm:text-6xl">
              Film Hakkında
            </h2>

            {/* Film özellikleri */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-purple-300/20 bg-purple-950/50 px-4 py-2 text-sm text-purple-100">
                2009
              </span>

              <span className="rounded-full border border-purple-300/20 bg-purple-950/50 px-4 py-2 text-sm text-purple-100">
                1 saat 40 dakika
              </span>

              <span className="rounded-full border border-purple-300/20 bg-purple-950/50 px-4 py-2 text-sm text-purple-100">
                Stop-motion
              </span>

              <span className="rounded-full border border-purple-300/20 bg-purple-950/50 px-4 py-2 text-sm text-purple-100">
                Fantastik
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Meraklı ve cesur Coraline, yeni evinde keşfettiği gizli bir
              kapının ardında kendi dünyasının büyüleyici bir benzeriyle
              karşılaşır. Ancak kusursuz görünen bu dünya, düşündüğünden çok
              daha karanlık sırlar saklamaktadır.
            </p>

            <div className="mt-8 border-l-2 border-yellow-300 pl-5">
              <p className="text-sm leading-6 text-purple-100">
                Henry Selick’in yönettiği film, Neil Gaiman’ın aynı adlı
                eserinden uyarlanmıştır.
              </p>
            </div>

            <a
              href="/etkinlik"
              className="mt-9 inline-flex items-center gap-3 font-semibold text-yellow-300 transition hover:gap-5 hover:text-yellow-200"
            >
              Etkinlik detaylarını gör
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
            {/* Etkinlik bilgileri */}
      <section
        id="etkinlik"
        className="relative bg-[#05081d] px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Bölüm başlığı */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Yıldızların Altında
            </p>

            <h2 className="mt-4 font-['Henny_Penny'] text-5xl font-normal text-purple-200 sm:text-6xl">
              Etkinlik Bilgileri
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Şehrin ortasında, açık havada ve yıldızların altında özel bir
              Coraline gösterimine davetlisin.
            </p>
          </div>

          {/* Bilgi kartları */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {/* Tarih */}
            <article className="group rounded-3xl border border-purple-300/15 bg-purple-950/20 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300/40 hover:bg-purple-950/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/15 text-yellow-300">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M8 3v4M16 3v4M3 10h18" />
                </svg>
              </div>

              <p className="mt-6 text-sm text-purple-300">Tarih</p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                30 Ekim 2026
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Cuma akşamı özel gösterim
              </p>
            </article>

            {/* Saat */}
            <article className="group rounded-3xl border border-purple-300/15 bg-purple-950/20 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300/40 hover:bg-purple-950/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/15 text-yellow-300">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <p className="mt-6 text-sm text-purple-300">Gösterim saati</p>
              <h3 className="mt-1 text-2xl font-bold text-white">20.30</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Kapılar 19.30’da açılır
              </p>
            </article>

            {/* Mekân */}
            <article className="group rounded-3xl border border-purple-300/15 bg-purple-950/20 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300/40 hover:bg-purple-950/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/15 text-yellow-300">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <p className="mt-6 text-sm text-purple-300">Mekân</p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Fişekhane
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Açık Hava Sineması, İstanbul
              </p>
            </article>
          </div>

          {/* Küçük bilgilendirme alanı */}
          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-yellow-300/20 bg-yellow-300/5 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <h3 className="text-lg font-bold text-yellow-300">
                Gösterim öncesi küçük bir hatırlatma
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Etkinlik açık havada gerçekleşecektir. Serin hava ihtimaline
                karşı yanına ince bir battaniye veya hırka almanı öneririz.
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-yellow-300/30 px-4 py-2 text-sm text-yellow-200">
              Açık hava etkinliği
            </span>
          </div>
        </div>
      </section>
            {/* Bilet ve rezervasyon bölümü */}
      <section
        id="bilet"
        className="relative overflow-hidden bg-purple-950 px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28"
      >
        {/* Dekoratif ışıklar */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-purple-200/20 bg-[#080b25]/80 p-7 shadow-2xl backdrop-blur-md sm:p-10 md:grid-cols-[1fr_auto] lg:p-14">
          {/* Rezervasyon metni */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Sınırlı Kontenjan
            </p>

            <h2 className="mt-4 max-w-3xl font-['Henny_Penny'] text-4xl font-normal leading-tight text-purple-200 sm:text-5xl lg:text-6xl">
              Diğer dünyanın kapısını aralamaya hazır mısın?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              30 Ekim gecesi yıldızların altında yerini ayır ve Coraline’ın
              gizemli dünyasına bizimle birlikte adım at.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-purple-100">
              <span className="rounded-full bg-purple-400/10 px-4 py-2">
                Tek kişilik bilet
              </span>

              <span className="rounded-full bg-purple-400/10 px-4 py-2">
                Numarasız oturma düzeni
              </span>
            </div>
          </div>

          {/* Fiyat ve buton */}
          <div className="min-w-56 rounded-3xl border border-yellow-300/25 bg-yellow-300/5 p-6 text-center">
            <p className="text-sm text-purple-200">Bilet fiyatı</p>

            <p className="mt-2 text-4xl font-bold text-yellow-300">
              350 ₺
            </p>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-yellow-300 px-7 py-4 font-bold text-[#05081d] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-[0_0_25px_rgba(253,224,71,0.3)]"
            >
              Yerini Ayır
            </button>

            <p className="mt-3 text-xs text-slate-400">
              Güvenli ödeme ile satın al
            </p>
          </div>
        </div>
      </section>
           {/* Footer */}
<footer className="border-t border-purple-300/10 bg-[#030516] px-5 py-10 sm:px-8 md:px-12 lg:px-20">
  <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
    {/* Etkinlik */}
    <div>
      <p className="font-['Henny_Penny'] text-3xl text-purple-200">
        Coraline
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Yıldızların altında özel gösterim
      </p>
    </div>

    {/* Organizatör */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
        Düzenleyen
      </p>

      <p className="mt-3 text-lg font-semibold text-white">
        Gece Perdesi
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Açık hava film gösterimleri
      </p>
    </div>

    {/* Instagram */}
    <div className="sm:col-span-2 lg:col-span-1">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
        Bizi Takip Et
      </p>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-3 text-sm font-semibold text-purple-100 transition hover:text-yellow-300"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>

        @geceperdesi
      </a>
    </div>
  </div>

  <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-purple-300/10 pt-6 text-center text-xs text-slate-600 sm:flex-row">
    <p>30 Ekim 2026 · Fişekhane Açık Hava Sineması</p>
    <p>© 2026 Gece Perdesi</p>
  </div>
</footer>
    </main>
  )
}

export default App