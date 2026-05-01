import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import { menuProducts } from "@/data/products";

const categories = [
  {
    id: 1,
    name: "Birthday",
    count: "Celebrate in style",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Bride to Be",
    count: "Bridal elegance",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Congrats",
    count: "Mark the moment",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Customized",
    count: "Your vision, our craft",
    image: "https://images.unsplash.com/photo-1589375462213-0f5a6a76c2c8?w=600&h=600&fit=crop&q=80",
  },
];

const featuredProducts = menuProducts.slice(0, 6);

export default function HomePage() {
  return (
    <main>
      {/* ─── Hero — Luxury split layout ───────────────────── */}
      <section className="relative bg-cream overflow-hidden">
        {/* Ambient background gradient — right warm bloom */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-[#f0ddd6] pointer-events-none" />
        {/* Subtle top-left gold mist */}
        <div className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full bg-gold/[0.06] blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Mobile: image first (top), text below. Desktop: text left, image right. */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:min-h-screen gap-10 md:gap-16 lg:gap-24 py-24 md:py-0">

            {/* ── Left — Copy ─────────────────────────────── */}
            <div className="flex-1 md:max-w-[520px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7 animate-fade-up">
                <div className="w-7 h-px bg-gold" />
                <p className="text-gold font-semibold tracking-[0.28em] uppercase text-[11px]">
                  Handcrafted in Beirut
                </p>
              </div>

              {/* Headline */}
              <h1 className="font-playfair text-[3.25rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5.25rem] font-bold text-[#1A0A0A] leading-[1.04] mb-6 animate-fade-up-d1">
                Indulge in
                <br />
                <em className="not-italic text-burgundy italic">Every Bite.</em>
              </h1>

              {/* Subtext */}
              <p className="text-[#4A3728] text-lg font-light leading-relaxed mb-10 max-w-[36ch] animate-fade-up-d2">
                Premium brownies baked to order — crafted with Belgian chocolate
                and finished with love, for every occasion.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-14 animate-fade-up-d3">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Order Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 border-2 border-burgundy/25 hover:border-burgundy text-burgundy font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-burgundy/5 active:scale-[0.97]"
                >
                  Explore Menu
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-0 animate-fade-up-d3">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "24h",  label: "Fresh to Order" },
                  { value: "100%", label: "Handcrafted" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`pr-6 md:pr-8 ${i > 0 ? "pl-6 md:pl-8 border-l border-[rgba(26,10,10,0.08)]" : ""}`}
                  >
                    <p className="font-playfair text-2xl font-bold text-[#1A0A0A] leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[#9E7B7B] text-[10px] uppercase tracking-[0.18em] mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — Image ────────────────────────────── */}
            <div className="flex-1 flex items-center justify-center relative animate-fade-up-d2">
              {/* Organic burgundy blob behind the image */}
              <div
                className="absolute inset-4 md:-inset-2 bg-burgundy/[0.09]"
                style={{ borderRadius: "62% 38% 46% 54% / 44% 58% 42% 56%", transform: "rotate(-6deg)" }}
              />
              {/* Gold shimmer blob, slightly offset */}
              <div
                className="absolute inset-8 md:inset-4 bg-gold/[0.07]"
                style={{ borderRadius: "38% 62% 54% 46% / 56% 42% 58% 44%", transform: "rotate(10deg)" }}
              />

              {/* Brownie image — slightly organic clip */}
              <div
                className="relative z-10 w-full max-w-[360px] md:max-w-full overflow-hidden shadow-warm-xl"
                style={{ borderRadius: "44% 56% 52% 48% / 42% 46% 54% 58%" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1607920592519-bab2a80efd81?w=800&q=80"
                  alt="Artisan brownies by Biteez"
                  width={720}
                  height={860}
                  sizes="(max-width: 768px) 85vw, 45vw"
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Floating card — bottom-left */}
              <div className="absolute bottom-4 -left-2 md:bottom-12 md:-left-8 bg-white rounded-2xl shadow-warm-md px-5 py-3.5 z-20 animate-fade-up-d3 border border-[rgba(26,10,10,0.05)]">
                <p className="text-[10px] text-[#9E7B7B] uppercase tracking-[0.2em] mb-0.5">Ready in</p>
                <p className="font-playfair font-bold text-[#1A0A0A] text-xl leading-none">24 Hours</p>
              </div>

              {/* Pill badge — top-right */}
              <div className="absolute top-4 -right-2 md:top-14 md:-right-6 bg-burgundy text-white rounded-full shadow-warm-sm px-4 py-2 z-20 animate-fade-up-d1">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">Freshly Baked ✦</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
      </section>

      {/* ─── Categories ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-gold" />
              <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">
                Browse by Occasion
              </p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A0A0A]">
              What&apos;s the Occasion?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href="/menu"
                className="group relative rounded-2xl overflow-hidden aspect-square block"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/75 via-[#1A0A0A]/15 to-transparent" />
                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/15 transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-playfair text-white text-xl md:text-2xl font-semibold leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-white/55 text-xs mt-0.5 group-hover:text-gold transition-colors duration-300">
                    {cat.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ──────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 md:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-gold" />
                <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">
                  Chef&apos;s Selection
                </p>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A0A0A]">
                Featured Brownies
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 text-burgundy font-semibold hover:text-burgundy-dark transition-colors text-sm shrink-0"
            >
              See all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/85 via-[#1A0A0A]/20 to-[#1A0A0A]/5" />

                {product.tag && (
                  <span className="absolute top-3 left-3 bg-burgundy/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    {product.tag}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-playfair text-white text-base md:text-xl font-semibold leading-tight mb-0.5">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-playfair text-gold font-bold text-lg md:text-xl">
                      QAR {product.price}
                    </span>
                    <AddToCartButton
                      overlay
                      productId={product.id}
                      productName={product.name}
                      productImage={product.image}
                      unitPrice={product.price}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-burgundy relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-burgundy-medium/25 pointer-events-none" />
        <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-burgundy-dark/40 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/60" />
            <p className="text-gold/75 font-semibold tracking-[0.35em] uppercase text-xs">
              Made to Order
            </p>
            <div className="w-6 h-px bg-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Every Box, Baked Fresh for You
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 max-w-md mx-auto">
            Ready for pickup at our boutique within 24–48 hours. No rush —
            great brownies take time.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25 active:scale-[0.97]"
          >
            Order Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#1A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-5">
              <div className="flex items-center gap-1 mb-5">
                <span className="font-playfair text-3xl font-bold text-white">Biteez</span>
                <span className="w-2 h-2 rounded-full bg-gold mt-1.5" />
              </div>
              <p className="text-white/45 leading-relaxed text-sm max-w-xs">
                Premium handcrafted brownies made with love and the finest
                ingredients. Every bite tells a story of passion and craft.
              </p>
              <div className="flex gap-4 mt-6">
                {["Instagram", "Facebook", "TikTok"].map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-semibold tracking-widest text-white/30 uppercase hover:text-gold transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-white/35 mb-5">
                Navigate
              </h4>
              <ul className="space-y-3">
                {["Home", "Menu", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-white/45 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-white/35 mb-5">
                Visit Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-white/45 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gold/70" />
                  123 Dessert Lane, Beirut, Lebanon
                </li>
                <li className="flex items-center gap-2.5 text-white/45 text-sm">
                  <Mail size={14} className="shrink-0 text-gold/70" />
                  hello@biteez.com
                </li>
                <li className="flex items-center gap-2.5 text-white/45 text-sm">
                  <Phone size={14} className="shrink-0 text-gold/70" />
                  +961 1 234 567
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/25 text-xs">© 2024 Biteez. All rights reserved.</p>
            <p className="text-white/25 text-xs">Crafted with love ♥</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
