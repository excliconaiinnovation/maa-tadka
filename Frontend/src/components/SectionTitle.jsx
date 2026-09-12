function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">

      {eyebrow && (
        <div
          className={`mb-3 text-[10px] font-bold uppercase tracking-[4px] ${
            light ? "text-[#E7BD42]" : "text-[#9D211D]"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`font-serif text-4xl font-bold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-[#103F2C]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            light ? "text-white/65" : "text-[#6d776f]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;