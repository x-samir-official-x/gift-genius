import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "سارة محمد", role: "عميلة", text: "بجد المكان تحفة والهدايا جميلة جدًا، اشتريت هدية لخطيبي وفرح بيها أوي ❤️", initial: "س", color: "bg-primary" },
  { name: "أحمد عبدالله", role: "عميل", text: "خدمة ممتازة وتعامل راقي، التغليف فخم جدًا والأسعار مناسبة. هرجعلهم تاني أكيد.", initial: "أ", color: "bg-secondary" },
  { name: "منة الله", role: "عميلة", text: "أحلى محل هدايا في الإسماعيلية! كل مرة بلاقي حاجة جديدة وحلوة. شكرًا كيكي 🎁", initial: "م", color: "bg-gold text-secondary" },
  { name: "كريم سامي", role: "عميل", text: "اشتريت باكدج عيد ميلاد لأختي وكان فوق التوقعات. تنظيم ممتاز وحب في كل تفصيلة.", initial: "ك", color: "bg-primary-glow" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-semibold text-secondary mb-4">
            ⭐ آراء عملائنا
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            عملاؤنا <span className="text-gradient-primary">بيحبونا</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-bold text-secondary">5.0</span>
            <span className="text-muted-foreground">· تقييم ممتاز</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-3xl bg-card p-7 shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant border border-border/50"
            >
              <Quote className="absolute top-5 left-5 h-8 w-8 text-primary/15 rotate-180" />
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${r.color} text-xl font-bold text-primary-foreground shadow-soft`}>
                  {r.initial}
                </div>
                <div>
                  <p className="font-bold text-secondary">{r.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
