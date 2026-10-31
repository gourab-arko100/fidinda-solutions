import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "center",
  light,
  id,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
  id?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${center ? "eyebrow-center" : ""} ${light ? "!text-white/85" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`h-section mt-4 ${light ? "!text-white" : ""}`}>
        {heading}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-fg/70"}`}>{intro}</p>}
    </Reveal>
  );
}
