"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { menuProducts, type Category } from "@/data/products";
import { cn } from "@/lib/utils";

const categories: Category[] = [
  "All",
  "Customized",
  "Birthday",
  "Congrats",
  "Graduation",
  "Get Well Soon",
  "Bride to Be",
  "Gender Reveal",
];

const categoryBadge: Record<Exclude<Category, "All">, string> = {
  Customized:      "bg-gold-light text-gold-dark",
  Birthday:        "bg-burgundy-light text-burgundy-dark",
  Congrats:        "bg-[#D6F0E8] text-[#2D7A5C]",
  Graduation:      "bg-[#DAE4F5] text-[#2D4A7A]",
  "Get Well Soon": "bg-[#D6F0EC] text-[#2D7A6A]",
  "Bride to Be":   "bg-[#F5E4F0] text-[#7A2D6A]",
  "Gender Reveal": "bg-[#EDE4F5] text-[#6B3FA0]",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menuProducts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        query === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, query]);

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* ─── Page header ────────────────────────────── */}
      <section className="bg-white border-b border-[rgba(26,10,10,0.06)] px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-gold" />
            <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">
              Handcrafted for You
            </p>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A0A0A]">
            Our Menu
          </h1>
        </div>
      </section>

      {/* ─── Sticky filters ─────────────────────────── */}
      <section className="sticky top-16 md:top-20 z-30 bg-[#FDF6F0]/97 backdrop-blur-sm border-b border-[rgba(26,10,10,0.06)] px-6 md:px-12 py-3">
        <div className="max-w-5xl mx-auto space-y-2.5">
          {/* Search */}
          <div className="relative">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9E7B7B]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brownies & treats…"
              className="w-full pl-10 pr-10 py-2.5 bg-cream-dark border border-[rgba(26,10,10,0.08)] rounded-xl text-sm text-[#1A0A0A] placeholder:text-[#9E7B7B] outline-none focus:border-burgundy transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E7B7B] hover:text-burgundy text-xs font-semibold transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 active:scale-[0.97]",
                  activeCategory === cat
                    ? "bg-burgundy text-white shadow-warm-sm"
                    : "bg-white text-[#4A3728] hover:bg-burgundy-light border border-[rgba(26,10,10,0.07)]"
                )}
              >
                {cat}
              </button>
            ))}
            <button className="shrink-0 ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#9E7B7B] bg-white border border-[rgba(26,10,10,0.07)] hover:bg-cream-dark transition-colors">
              <SlidersHorizontal size={12} /> Filter
            </button>
          </div>
        </div>
      </section>

      {/* ─── Grid ───────────────────────────────────── */}
      <section className="px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-playfair text-2xl font-semibold text-[#9E7B7B] mb-2">
                No results found
              </p>
              <p className="text-[#9E7B7B] text-sm">Try a different search or category</p>
            </div>
          ) : (
            <>
              <p className="text-[#9E7B7B] text-xs font-medium mb-5 uppercase tracking-wider">
                {filtered.length} item{filtered.length !== 1 ? "s" : ""}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    href={product.category === "Customized" ? `/customize/${product.id}` : `/product/${product.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-[rgba(26,10,10,0.06)] shadow-warm-xs hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/3.5] overflow-hidden bg-cream-dark">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/68 via-[#1A0A0A]/8 to-burgundy-dark/10" />

                      {product.tag && (
                        <span className="absolute top-2.5 left-2.5 bg-burgundy text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
                          {product.tag}
                        </span>
                      )}

                      <span
                        className={cn(
                          "absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full",
                          categoryBadge[product.category]
                        )}
                      >
                        {product.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-3 md:p-4">
                      <h3 className="font-playfair font-bold text-[#1A0A0A] text-base md:text-lg leading-tight mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#9E7B7B] text-xs leading-snug mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-playfair font-bold text-burgundy text-lg">
                          QAR {product.price}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-[#9E7B7B] group-hover:text-burgundy transition-colors">
                          {product.category === "Customized" ? "Customize" : "Order"} <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
