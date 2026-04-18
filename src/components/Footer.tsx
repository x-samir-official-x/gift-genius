import { Gift, Facebook, Phone, MapPin, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP_URL, FACEBOOK_URL } from "./StickyContacts";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 px-4" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-soft">
                <Gift className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold">Kiki Giftshop</p>
                <p className="text-sm text-white/60">محل كيكي للهدايا</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              بنصنع لحظات سعيدة 💖 — هدايا مميزة لكل مناسبة، بتغليف فخم ولمسة حب.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold">تواصل معنا</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                <span>شارع رضا، الرئيسي بعد الاستاد، الإسماعيلية</span>
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-gold transition-smooth">
                  <Phone className="h-5 w-5 text-primary-glow" />
                  <span dir="ltr">{PHONE}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold">تابعنا</h4>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-primary transition-bounce hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-whatsapp transition-bounce hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                aria-label="Call"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-gold hover:text-secondary transition-bounce hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-5 text-sm text-white/60 italic">
              "هديتك الجاية تبدأ من هنا"
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Kiki Giftshop · جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
