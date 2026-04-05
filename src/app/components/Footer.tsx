import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-3xl text-[#D4AF37] mb-2">SuZin</h3>
              <p className="text-gray-400">Tỏi Đen Cao Cấp</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Mang đến những sản phẩm tỏi đen chất lượng cao, được lên men tự nhiên, giúp nâng cao sức khỏe và chất lượng cuộc sống.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a
                href="#"
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
          >
            <h4 className="text-xl text-white mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {['Giới thiệu', 'Sản phẩm', 'Lợi ích', 'Tin tức', 'Liên hệ'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl text-white mb-6">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-3">
              {['Chính sách bảo hành', 'Hướng dẫn sử dụng', 'Câu hỏi thường gặp', 'Chính sách đổi trả', 'Điều khoản dịch vụ'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl text-white mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:0901234567" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  0901 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:contact@suzin.vn" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  contact@suzin.vn
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-gray-400 mb-3 text-sm">Nhận ưu đãi đặc biệt qua email</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-black rounded-lg hover:shadow-lg transition-all">
                  Gửi
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 SuZin. Bản quyền thuộc về Công ty TNHH SuZin Việt Nam.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </footer>
  );
}
