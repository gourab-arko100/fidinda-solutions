import DivisionCard from "./DivisionCard";
import Reveal from "./Reveal";
import { divisions } from "@/data/divisions";

export default function DivisionGrid({ compact }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {divisions.map((d, i) => (
        <Reveal key={d.slug} delay={i * 90} className="h-full">
          <DivisionCard division={d} compact={compact} />
        </Reveal>
      ))}
    </div>
  );
}
