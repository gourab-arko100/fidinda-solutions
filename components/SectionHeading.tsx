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
    <Reveal className={`mb-10 max-w-3xl sm:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${center ? "eyebrow-center" : ""} ${light ? "!text-white/85" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`h-section mt-4 ${light ? "!text-white" : ""}`}>
        {heading}
      </h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg ${light ? "text-white/75" : "text-fg/70"}`}>{intro}</p>}
    </Reveal>
  );
}
