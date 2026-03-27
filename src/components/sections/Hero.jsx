import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-slate-50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
            <CheckCircle2 size={16} /> Rapi, cepat, dan sesuai ukuran
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Jasa Jahit Modern untuk Tampilan yang Lebih{" "}
            <span className="text-amber-600">Elegan</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Kami melayani jahit pakaian custom, permak, reparasi, hingga
            pembuatan seragam dengan hasil rapi dan nyaman dipakai.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Konsultasi Gratis <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-700"
            >
              Lihat Hasil Jahitan
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-slate-500">Pelanggan puas</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold">5 Tahun</p>
              <p className="text-sm text-slate-500">Pengalaman</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-slate-500">Custom ukuran</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -right-3 bottom-10 hidden rounded-2xl bg-slate-900 p-4 text-white shadow-xl md:block">
            <p className="text-sm text-slate-300">Rating pelanggan</p>
            <div className="mt-1 flex items-center gap-1 text-amber-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Jasa tempat jahit"
            className="h-[420px] w-full max-w-xl rounded-[32px] object-cover shadow-2xl shadow-slate-200 md:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
