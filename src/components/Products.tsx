import romantic from "@/assets/gift-romantic.jpg";
import birthday from "@/assets/gift-birthday.jpg";
import custom from "@/assets/gift-custom.jpg";
import flowers from "@/assets/gift-flowers.jpg";
import accessories from "@/assets/gift-accessories.jpg";
import surprise from "@/assets/gift-surprise.jpg";
import { ArrowLeft } from "lucide-react";
import { WHATSAPP_URL } from "./StickyContacts";

const products = [
  { img: romantic, emoji: "💝", title: "هدايا رومانسية", desc: "علب راقية بالورد والشيكولاتة لإنسان مميز في حياتك." },
  { img: birthday, emoji: "🎂", title: "باكدج أعياد ميلاد", desc: "مفاجأة كاملة: تورتة، بالونات وهدايا مرتبة بشكل فخم." },
  { img: custom, emoji: "✨", title: "هدايا مخصصة", desc: "اطبع اسمك أو رسالتك على الهدية، لمسة شخصية لا تُنسى." },
  { img: flowers, emoji: "🌹", title: "ورود و بوكيهات", desc: "ورود طازة كل يوم بأشكال وتنسيقات رومانسية تجنن." },
  { img: accessories, emoji: "🎀", title: "إكسسوارات وكيوت", desc: "تشكيلة واسعة من الإكسسوارات اللطيفة والهدايا الصغيرة." },
  { img: surprise, emoji: "🎉", title: "صناديق المفاجأة", desc: "Surprise Box مليان فرحة، مفاجآت وألوان لكل مناسبة." },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-soft" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            🎁 تشكيلتنا
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            هدايا لكل <span className="text-gradient-primary">مناسبة وذوق</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            اختار من تشكيلة كبيرة من الهدايا، وكل واحدة معمولة بحب وتغليف فخم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-bounce hover:-translate-y-2 hover:shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-bounce group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-2xl shadow-soft backdrop-blur-sm">
                {p.emoji}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-secondary mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-bold transition-smooth hover:gap-3"
                >
                  اعرف أكثر
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
