interface Props {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-[24px] leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}