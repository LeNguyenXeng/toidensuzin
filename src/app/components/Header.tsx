import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Lợi ích", href: "#benefits" },
  { label: "Quy trình", href: "#process" },
  { label: "Đánh giá", href: "#testimonials" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Liên hệ", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-[#D4AF37] tracking-widest">
          SuZin Premium
        </a>

        <nav aria-label="Điều hướng chính" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-200 transition-colors hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-gray-200 transition-colors hover:text-[#D4AF37] md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Điều hướng nhanh trên di động"
        className={`${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-white/10 bg-black/90 px-4 transition-all duration-300 md:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-3 text-gray-200 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
