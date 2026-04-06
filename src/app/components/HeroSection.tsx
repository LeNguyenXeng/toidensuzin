import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#1a1410] to-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544858696-b911703da78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdhcmxpYyUyMGJ1bGIlMjBzdHVkaW8lMjBsaWdodGluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzUzOTI2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tỏi đen cao cấp"
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      {/* Golden Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white tracking-tight">
            Tỏi Đen SuZin
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-[#D4AF37] tracking-wide">
            Tinh Hoa Sức Khỏe Từ Thiên Nhiên
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Nâng cao đề kháng tự nhiên • Hỗ trợ tim mạch khỏe mạnh • Chống oxy
            hóa mạnh mẽ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-black rounded-full flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/30"
            >
              <span className="tracking-wide">Mua Ngay</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full tracking-wide transition-all hover:bg-white/10"
            >
              Khám Phá Ngay
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
