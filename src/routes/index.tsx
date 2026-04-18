import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyContacts } from "@/components/StickyContacts";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kiki Giftshop | محل كيكي للهدايا - الإسماعيلية" },
      {
        name: "description",
        content: "محل كيكي للهدايا في الإسماعيلية - هدايا رومانسية، باكدج أعياد ميلاد، ورود، وهدايا مخصصة بتغليف فخم. اطلب الآن 01285063400",
      },
      { property: "og:title", content: "Kiki Giftshop | أفضل محل هدايا في الإسماعيلية 🎁" },
      { property: "og:description", content: "هديتك الجاية تبدأ من هنا - اختيارات مميزة لكل المناسبات" },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <StickyContacts />
    </div>
  );
}
