import { Clock3, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-700">
            Hubungi Kami
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Siap Menjahit Sesuai Model dan Ukuran Anda
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 leading-7">
            Konsultasikan kebutuhan jahit, permak, atau reparasi pakaian Anda.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4">
              <Phone className="mt-1 text-amber-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">
                  Telepon / WhatsApp
                </p>
                <p className="text-slate-600">0812-3456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4">
              <MapPin className="mt-1 text-amber-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">Alamat</p>
                <p className="text-slate-600">Jl. Contoh No. 123, Kota Anda</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4">
              <Clock3 className="mt-1 text-amber-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">Jam Operasional</p>
                <p className="text-slate-600">Senin - Sabtu, 08.00 - 17.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 md:p-8">
          <h3 className="text-2xl font-bold text-slate-900">Form Pemesanan</h3>
          <p className="mt-2 text-slate-600">
            Isi data di bawah ini untuk konsultasi atau pemesanan jahit.
          </p>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
              />
              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
              />
            </div>

            <input
              type="text"
              placeholder="Jenis Layanan"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
            />

            <textarea
              rows="5"
              placeholder="Tuliskan kebutuhan jahit Anda..."
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
            />

            <button
              type="button"
              className="w-full rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Kirim Permintaan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
