import { Gift } from "lucide-react";
import { PHONE } from "./StickyContacts";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2 group">
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          <div className="leading-tight">
            <p className="font-display text-lg font-bold text-secondary">Kiki</p>
            <p className="text-[10px] text-muted-foreground -mt-1">Giftshop · الإسماعيلية</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-secondary/80">
          <a href="#products" className="hover:text-primary transition-smooth">الهدايا</a>
          <a href="#gallery" className="hover:text-primary transition-smooth">المعرض</a>
          <a href="#testimonials" className="hover:text-primary transition-smooth">آراء العملاء</a>
          <a href="#contact" className="hover:text-primary transition-smooth">تواصل معنا</a>
        </nav>

        <a
          href={`tel:${PHONE}`}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-bounce hover:scale-105 hover:shadow-elegant"
        >
          اتصل بنا
        </a>
      </div>
    </header>
  );
}
