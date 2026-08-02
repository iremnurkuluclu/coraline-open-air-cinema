function PaymentFields({ cardForm, onCardChange }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl">3. Kart bilgileri</h2>

      <p className="mt-3 text-sm text-purple-100/45">
        Bu bir demo ödeme ekranıdır. Gerçek ödeme alınmaz ve kart bilgileriniz
        saklanmaz.
      </p>

      <div className="mt-7 grid gap-5 rounded-3xl border border-purple-300/10 bg-purple-950/15 p-6 sm:grid-cols-2">
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-semibold">
            Kart üzerindeki isim
          </span>

          <input
            name="cardName"
            value={cardForm.cardName}
            onChange={onCardChange}
            placeholder="AD SOYAD"
            autoComplete="cc-name"
            className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 uppercase text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
          />
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-semibold">Kart numarası</span>

          <input
            name="cardNumber"
            value={cardForm.cardNumber}
            onChange={onCardChange}
            placeholder="0000 0000 0000 0000"
            inputMode="numeric"
            autoComplete="cc-number"
            className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">
            Son kullanma tarihi
          </span>

          <input
            name="expiry"
            value={cardForm.expiry}
            onChange={onCardChange}
            placeholder="AA/YY"
            inputMode="numeric"
            autoComplete="cc-exp"
            className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">CVC</span>

          <input
            name="cvc"
            value={cardForm.cvc}
            onChange={onCardChange}
            placeholder="000"
            inputMode="numeric"
            autoComplete="cc-csc"
            className="rounded-2xl border border-purple-300/20 bg-[#090d29] px-4 py-3 text-purple-100 outline-none placeholder:text-purple-100/30 focus:border-yellow-300"
          />
        </label>
      </div>
    </section>
  )
}

export default PaymentFields