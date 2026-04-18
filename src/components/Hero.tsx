import heroImg from "@/assets/hero-gifts.jpg";
import { Star, Sparkles, MessageCircle, ShoppingBag } from "lucide-react";
import { WHATSAPP_URL } from "./StickyContacts";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="هدايا كيكي - علب هدايا وردية وذهبية مع ورود"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/85 via-secondary/70 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl animate-float" />
      <div className="absolute bottom-32 left-10 h-32 w-32 rounded-full bg-gold/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4 py-20" dir="rtl">
        <div className="max-w-3xl space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-white">محل هدايا · شارع رضا، الإسماعيلية</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            أفضل الهدايا
            <br />
            <span className="text-gradient-gold">لكل مناسبة</span>
            <span className="inline-block animate-float mr-2">🎁</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed">
            هديتك الجاية تبدأ من هنا — اختيارات مميزة، تغليف فخم، ولمسة حب في كل تفصيلة.
          </p>

          {/* Trust badge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-gold/95 px-4 py-2 shadow-elegant">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-bold text-secondary">5.0 تقييم ممتاز</span>
            </div>
            <span className="text-sm text-white/80">
              ❤️ محبوبين عند عملاء الإسماعيلية
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-elegant transition-bounce hover:scale-105 hover:shadow-glow"
            >
              <ShoppingBag className="h-5 w-5 transition-bounce group-hover:rotate-12" />
              اطلب الآن
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-bounce hover:bg-white hover:text-secondary"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
