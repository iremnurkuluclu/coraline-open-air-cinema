import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import GecePerdesiLogo from "./GecePerdesiLogo.jsx"

const links = [
  { to: "/film", label: "Film" },
  { to: "/etkinlik", label: "Etkinlik" },
  { to: "/biletler", label: "Biletler" },
  { to: "/biletlerim", label: "Biletlerim" },
  { to: "/sss", label: "SSS" },
  { to: "/iletisim", label: "İletişim" },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-purple-300/10 bg-[#05081d]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link
  to="/"
  className="transition hover:opacity-85"
  aria-label="Gece Perdesi ana sayfa"
>
  <GecePerdesiLogo compact />
</Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-yellow-300"
                    : "text-purple-100/70 hover:text-purple-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-xl border border-purple-300/30 px-4 py-2 text-sm text-purple-100 md:hidden"
          aria-label="Menüyü aç"
        >
          Menü
        </button>
      </div>

      {menuOpen && (
        <nav className="grid gap-2 border-t border-purple-300/10 px-5 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-purple-300 text-[#05081d]"
                    : "text-purple-100/75 hover:bg-purple-950/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default SiteHeader