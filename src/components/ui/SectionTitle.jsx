const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-700">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-3 text-slate-600 text-base md:text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
