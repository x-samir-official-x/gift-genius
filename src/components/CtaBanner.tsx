import { ShoppingBag, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./StickyContacts";

export function CtaBanner() {
  return (
    <section className="py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎁</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>💝</div>

          <div className="relative space-y-6">
            <span className="inline-block rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-semibold text-white border border-white/20">
              🎉 لا تفوّت اللحظة
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              مستني إيه؟<br />
              خلي هديتك <span className="text-gradient-gold">مميزة</span> النهاردة
            </h2>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              فاجئ اللي بتحبه بهدية تفضل في باله للأبد. إحنا هنا عشانك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-secondary shadow-elegant transition-bounce hover:scale-105 hover:shadow-glow"
              >
                <ShoppingBag className="h-5 w-5" />
                اطلب دلوقتي
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-elegant transition-bounce hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                كلمنا واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
