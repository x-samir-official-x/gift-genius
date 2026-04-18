import { Phone, MessageCircle } from "lucide-react";

export const PHONE = "01285063400";
export const WHATSAPP_URL = `https://wa.me/2${PHONE}?text=${encodeURIComponent("مرحباً كيكي 🎁 حابب أعرف أكتر عن الهدايا")}`;
export const FACEBOOK_URL = "https://facebook.com";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Kiki+Giftshop+Reda+Street+Ismailia";

export function StickyContacts() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3" dir="ltr">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant animate-pulse-soft transition-bounce hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 fill-white" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="اتصل"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-bounce hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
