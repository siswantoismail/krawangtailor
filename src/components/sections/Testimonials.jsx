import { Star } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "../../data/dummyData";

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimoni"
          title="Apa Kata Pelanggan Kami"
          subtitle="Kepercayaan pelanggan menjadi prioritas utama dalam setiap jahitan yang kami kerjakan."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="leading-7 text-slate-200">“{item.review}”</p>
              <p className="mt-5 font-semibold text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
