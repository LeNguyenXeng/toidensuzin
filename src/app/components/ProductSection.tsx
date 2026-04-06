import { motion } from "motion/react";
import { ShoppingCart, Check } from "lucide-react";
import toicodonImage from "../../images/toicodon.webp";
import toidenVip from "../../images/toidenvip.webp";
import combo from "../../images/combo.png";

const products = [
  {
    name: "Tỏi Đen cô đơn",
    image: toicodonImage,
    weight: "500g",
    originalPrice: "400.000đ",
    price: "299.000đ",
    features: [
      "Tỏi đen lên men tự nhiên",
      "Không chất bảo quản",
      "Đóng gói chân không",
      "Hạn sử dụng 24 tháng",
    ],
    badge: "Bán chạy nhất",
    badgeColor: "from-[#D4AF37] to-[#C9A961]",
  },
  {
    name: "Hộp Tỏi Đen SuZin Premium",
    image: toidenVip,
    weight: "500g",
    originalPrice: "450.000đ",
    price: "399.000đ",
    features: [
      "Tỏi đen cao cấp chọn lọc",
      "Đóng gói hộp quà tặng sang trọng",
      "Đóng gói chân không",
      "Hạn sử dụng 24 tháng",
    ],
    badge: "Cao cấp nhất",
    badgeColor: "from-black to-gray-700",
  },
  {
    name: "Combo Gia Đình SuZin",
    image: combo,
    weight: "1kg",
    originalPrice: "900.000đ",
    price: "699.000đ",
    features: [
      "2 hộp tỏi đen tiêu chuẩn",
      "Tiết kiệm 200.000đ",
      "Hạn sử dụng 24 tháng",
      "Ưu tiên giao hàng nhanh",
    ],
    badge: "Tiết kiệm nhất",
    badgeColor: "from-green-600 to-green-700",
  },
];

export function ProductSection() {
  return (
    <section
      id="products"
      className="scroll-mt-24 py-14 lg:py-20 bg-gradient-to-b from-[#faf9f7] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] tracking-widest mb-6">
            Sản Phẩm
          </span>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Chọn Gói Phù Hợp Với Bạn
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đầu tư cho sức khỏe là đầu tư cho tương lai
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`bg-gradient-to-r ${product.badgeColor} text-white px-4 py-2 rounded-full shadow-lg`}
                  >
                    <span className="text-sm tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Weight Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-gray-900">{product.weight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl text-gray-900 mb-4">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl text-[#D4AF37]">
                        {product.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">Đã bao gồm VAT</p>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100063706399352"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-black rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all group/btn"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <span className="tracking-wide">Đặt Hàng Ngay</span>
                  </motion.a>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#D4AF37]/10 to-[#8B7355]/10 border border-[#D4AF37]/20 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl text-gray-900 mb-4">
              Cam Kết Chất Lượng 100%
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hoàn tiền 100% nếu sản phẩm không đúng chất lượng cam kết. Hỗ trợ
              đổi trả trong vòng 7 ngày.
            </p>
            <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                Thanh toán COD
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                Bảo hành chất lượng
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
