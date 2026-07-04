import { Clock3, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logoKT.png"
                alt="Atelier Jahit"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="text-xl font-bold">Atelier Jahit</h2>
                <p className="text-sm text-slate-400">
                  Custom, Permak & Reparasi
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Kami melayani jasa jahit, permak, dan reparasi pakaian dengan
              hasil yang rapi, presisi, dan sesuai kebutuhan pelanggan.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Kontak</h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex gap-3">
                <Phone className="mt-1 text-amber-400" size={20} />
                <span>0812-3456-7890</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-amber-400" size={20} />
                <span>
                  Jl. Contoh No.123
                  <br />
                  Kota Gorontalo
                </span>
              </div>

              <div className="flex gap-3">
                <Clock3 className="mt-1 text-amber-400" size={20} />
                <span>
                  Senin - Sabtu
                  <br />
                  08.00 - 17.00 WITA
                </span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Layanan</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Jahit Pakaian Pria</li>
              <li>Jahit Pakaian Wanita</li>
              <li>Permak Pakaian</li>
              <li>Reparasi Pakaian</li>
              <li>Jahit Seragam</li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Jam Operasional</h3>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="font-medium">Senin - Sabtu</p>
              <p className="mt-2 text-slate-400">08.00 - 17.00 WITA</p>

              <div className="my-4 h-px bg-slate-700"></div>

              <p className="font-medium">Minggu</p>
              <p className="mt-2 text-red-400">Tutup</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Atelier Jahit. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
