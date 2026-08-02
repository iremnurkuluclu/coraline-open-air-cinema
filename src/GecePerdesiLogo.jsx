function GecePerdesiLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid shrink-0 place-items-center rounded-full border border-yellow-300/35 bg-[#111735] shadow-[0_0_22px_rgba(250,204,21,0.12)] ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className={compact ? "h-7 w-7" : "h-8 w-8"}
        >
          {/* Dış çerçeve */}
          <circle
            cx="32"
            cy="32"
            r="27"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2"
          />

          {/* Sol perde */}
          <path
            d="M14 18 C23 22 24 29 24 42 C20 38 17 36 13 35 C17 30 17 24 14 18Z"
            fill="#8b5cf6"
          />

          {/* Sağ perde */}
          <path
            d="M50 18 C41 22 40 29 40 42 C44 38 47 36 51 35 C47 30 47 24 50 18Z"
            fill="#8b5cf6"
          />

          {/* Perde üst çizgisi */}
          <path
            d="M15 17 Q32 10 49 17"
            fill="none"
            stroke="#f5d76e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Yıldız */}
          <path
            d="M32 21 L34.5 27.5 L41 30 L34.5 32.5 L32 39 L29.5 32.5 L23 30 L29.5 27.5Z"
            fill="#f5d76e"
          />

          {/* Film şeridi */}
          <path
            d="M20 46 Q32 51 44 46"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <circle cx="24" cy="47" r="1.5" fill="#f5d76e" />
          <circle cx="32" cy="49" r="1.5" fill="#f5d76e" />
          <circle cx="40" cy="47" r="1.5" fill="#f5d76e" />
        </svg>
      </span>

      <span className="leading-tight">
        <strong
          className={`block font-serif font-semibold tracking-wide text-purple-100 ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          Gece Perdesi
        </strong>

        {!compact && (
          <small className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-300/70">
            Açık Hava Sineması
          </small>
        )}
      </span>
    </div>
  )
}

export default GecePerdesiLogo