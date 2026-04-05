import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-gradient-to-b from-black to-[#0a0a0a] text-white"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="mb-6">
              <h3 className="text-3xl text-[#D4AF37] mb-2">SuZin</h3>
              <p className="text-gray-400">Tỏi Đen Cao Cấp</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Mang đến những sản phẩm tỏi đen chất lượng cao, được lên men tự
              nhiên, giúp nâng cao sức khỏe và chất lượng cuộc sống.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063706399352"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063706399352"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063706399352"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-[#D4AF37]" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full lg:pl-8"
          >
            <h4 className="text-xl text-white mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {["Giới thiệu", "Sản phẩm", "Lợi ích", "Tin tức", "Liên hệ"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <h4 className="text-xl text-white mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Khu phố Ba Chè, Thị trấn Thiệu Hoá, huyện Thiệu Hoá, tỉnh
                  Thanh Hóa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:0984741986"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  098 474 19 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:toidensuzin68@gmail.com"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  toidensuzin68@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </footer>
  );
}
