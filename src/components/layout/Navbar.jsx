import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-200">
            <Scissors size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Atelier Jahit</h1>
            <p className="text-xs text-slate-500">
              Custom, Permak, dan Reparasi
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-amber-600">
            Beranda
          </a>
          <a
            href="#layanan"
            className="text-sm font-medium hover:text-amber-600"
          >
            Layanan
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium hover:text-amber-600"
          >
            Portfolio
          </a>
          <a href="#harga" className="text-sm font-medium hover:text-amber-600">
            Harga
          </a>
          <a
            href="#kontak"
            className="text-sm font-medium hover:text-amber-600"
          >
            Kontak
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontak"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Pesan Sekarang
          </a>
        </div>

        <button
          className="rounded-xl border border-slate-200 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Beranda
            </a>
            <a href="#layanan" onClick={() => setMenuOpen(false)}>
              Layanan
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#harga" onClick={() => setMenuOpen(false)}>
              Harga
            </a>
            <a href="#kontak" onClick={() => setMenuOpen(false)}>
              Kontak
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
