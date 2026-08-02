import { Link } from "react-router-dom"

function SiteFooter() {
  return (
    <footer className="border-t border-purple-300/10 bg-[#030516] px-5 py-10 text-purple-100 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
        <div>
          <Link
            to="/"
            className="font-['Henny_Penny'] text-4xl text-purple-200 transition hover:text-yellow-300"
          >
            Coraline
          </Link>

          <p className="mt-3 text-sm text-slate-500">
            Yıldızların altında özel gösterim
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-purple-300">
            DÜZENLEYEN
          </p>

          <p className="mt-4 text-lg font-semibold text-purple-100">
            Gece Perdesi
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Açık hava film gösterimleri
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-purple-300">
            BİZİ TAKİP ET
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 font-semibold text-purple-100 transition hover:text-yellow-300"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>

            @geceperdesi
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-purple-300/10 pt-7 text-center text-xs text-slate-600 sm:flex-row sm:justify-between sm:text-left">
        <p>30 Ekim 2026 · Fişekhane Açık Hava Sineması</p>
        <p>© 2026 Gece Perdesi</p>
      </div>
    </footer>
  )
}

export default SiteFooter