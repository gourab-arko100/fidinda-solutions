import { Telegram, WhatsApp } from "./Icons";
import { site } from "@/data/site";

/** Telegram + WhatsApp buttons, stacked bottom-right (same as the division sites). */
export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3 print:hidden">
      <a
        href={site.chat.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on Telegram (opens in a new tab)"
        className="flex h-11 w-11 items-center sm:h-[52px] sm:w-[52px] justify-center rounded-full bg-[#229ED9] text-white shadow-lift transition-transform duration-200 hover:scale-110"
      >
        <Telegram size={22} />
      </a>
      <a
        href={site.chat.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        className="relative flex h-12 w-12 items-center sm:h-14 sm:w-14 justify-center rounded-full bg-[#25D366] text-white shadow-lift ring-4 ring-[#25D366]/25 transition-transform duration-200 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 motion-reduce:hidden" aria-hidden />
        <WhatsApp size={26} className="relative" />
      </a>
    </div>
  );
}
