import { useMemo, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { portfolio } from "../../data/dummyData";

const Portfolio = () => {
  const [filter, setFilter] = useState("Semua");

  const filteredPortfolio = useMemo(() => {
    if (filter === "Semua") return portfolio;
    return portfolio.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Portfolio"
          title="Contoh Hasil Jahitan dan Permak"
          subtitle="Beberapa contoh pengerjaan untuk menunjukkan kualitas, kerapian, dan variasi layanan kami."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {["Semua", "Custom", "Seragam", "Permak"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === item
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:text-amber-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPortfolio.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {item.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
