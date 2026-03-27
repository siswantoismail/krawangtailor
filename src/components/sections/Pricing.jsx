import SectionTitle from "../ui/SectionTitle";
import { pricing } from "../../data/dummyData";

const Pricing = () => {
  return (
    <section
      id="harga"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionTitle
        badge="Harga"
        title="Estimasi Biaya Layanan Jahit"
        subtitle="Harga dapat menyesuaikan model, bahan, tingkat kesulitan, dan detail permintaan pelanggan."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pricing.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">Layanan</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {item.item}
            </h3>
            <p className="mt-4 text-2xl font-extrabold text-amber-600">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
