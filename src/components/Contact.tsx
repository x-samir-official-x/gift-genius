import { MapPin, Phone, Facebook, Navigation } from "lucide-react";
import { PHONE, WHATSAPP_URL, FACEBOOK_URL, MAPS_URL } from "./StickyContacts";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            📍 تعالى لنا
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            مكاننا <span className="text-gradient-primary">قريب منك</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-elegant min-h-[400px] border border-border/60">
            <iframe
              title="موقع كيكي للهدايا"
              src="https://www.google.com/maps?q=Ismailia,Egypt&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-secondary/85 p-8 md:p-10 text-white shadow-elegant relative overflow-hidden">
            <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />

            <div className="relative space-y-6">
              <h3 className="font-display text-3xl font-bold">Kiki Giftshop 🎁</h3>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/20">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">العنوان</p>
                  <p className="font-medium leading-relaxed">شارع رضا، الرئيسي بعد الاستاد<br />الإسماعيلية، مصر</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/20">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">رقم التليفون</p>
                  <a href={`tel:${PHONE}`} dir="ltr" className="font-bold text-lg hover:text-gold transition-smooth">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-bounce hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  اتصل الآن
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-secondary shadow-soft transition-bounce hover:scale-105"
                >
                  <Navigation className="h-4 w-4" />
                  Google Maps
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-5 py-3 text-sm font-bold text-white transition-bounce hover:bg-white/20"
                >
                  <Facebook className="h-4 w-4" />
                  فيسبوك
                </a>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-whatsapp px-6 py-4 font-bold text-white shadow-soft transition-bounce hover:scale-[1.02]"
              >
                💬 راسلنا على واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
