import { motion } from 'motion/react';
import { Shield, Heart, Sparkles, Activity } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Tăng Miễn Dịch',
    description: 'Củng cố hệ miễn dịch tự nhiên, giúp cơ thể chống lại bệnh tật hiệu quả',
  },
  {
    icon: Heart,
    title: 'Hỗ Trợ Tim Mạch',
    description: 'Cải thiện tuần hoàn máu, giảm nguy cơ các bệnh về tim mạch',
  },
  {
    icon: Sparkles,
    title: 'Chống Lão Hóa',
    description: 'Chống oxy hóa mạnh mẽ, giúp làm chậm quá trình lão hóa tế bào',
  },
  {
    icon: Activity,
    title: 'Giảm Cholesterol',
    description: 'Hỗ trợ giảm cholesterol xấu, cân bằng mỡ máu tự nhiên',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#faf9f7]">
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
            Lợi Ích Vượt Trội
          </span>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Vì Sao Chọn Tỏi Đen SuZin?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những lợi ích tuyệt vời mà tỏi đen mang lại cho sức khỏe của bạn
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37]/10 rounded-full -z-10"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-1 max-w-md mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
