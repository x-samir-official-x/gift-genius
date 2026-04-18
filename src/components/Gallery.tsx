import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import romantic from "@/assets/gift-romantic.jpg";
import surprise from "@/assets/gift-surprise.jpg";
import flowers from "@/assets/gift-flowers.jpg";

const images = [
  { src: g1, alt: "عميلة مبسوطة بهديتها", span: "md:row-span-2" },
  { src: g2, alt: "تغليف الهدية بشريط ذهبي", span: "" },
  { src: romantic, alt: "هدية رومانسية بالورد", span: "" },
  { src: g3, alt: "عرض أنيق لعلب الهدايا", span: "md:row-span-2" },
  { src: surprise, alt: "صندوق مفاجأة", span: "" },
  { src: flowers, alt: "بوكيه ورد", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-soft" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            📸 من معرضنا
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            لحظات <span className="text-gradient-primary">سعادة حقيقية</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            صور من تغليفنا، هدايانا، وفرحة عملائنا.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 max-w-6xl mx-auto auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card transition-bounce hover:shadow-elegant ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-bounce group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
