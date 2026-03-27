import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/dummyData";

const Services = () => {
  return (
    <section
      id="layanan"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionTitle
        badge="Layanan Kami"
        title="Solusi Jahit Lengkap untuk Berbagai Kebutuhan"
        subtitle="Mulai dari jahit pakaian baru, permak, hingga reparasi detail kecil dengan hasil yang rapi dan profesional."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
