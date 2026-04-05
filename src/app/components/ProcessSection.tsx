import { motion } from 'motion/react';
import { Leaf, Timer, ThermometerSun, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Leaf,
    title: 'Chọn Lọc Nghiêm Ngặt',
    description: 'Tỏi tươi nguyên liệu được chọn lọc kỹ càng từ vùng trồng sạch',
  },
  {
    icon: ThermometerSun,
    title: 'Kiểm Soát Nhiệt Độ',
    description: 'Lên men trong môi trường kiểm soát nhiệt độ và độ ẩm tối ưu',
  },
  {
    icon: Timer,
    title: 'Lên Men 30 Ngày',
    description: 'Quy trình lên men tự nhiên kéo dài 30 ngày để tạo hương vị độc đáo',
  },
  {
    icon: CheckCircle,
    title: 'Kiểm Tra Chất Lượng',
    description: 'Kiểm tra nghiêm ngặt đảm bảo chất lượng và an toàn thực phẩm',
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#faf9f7] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#8B7355]/10 border border-[#8B7355]/30 rounded-full text-[#8B7355] tracking-widest mb-6">
            Quy Trình Sản Xuất
          </span>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Lên Men Tự Nhiên, Giữ Trọn Dinh Dưỡng
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quy trình lên men truyền thống kết hợp công nghệ hiện đại
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1760368104784-79f5f757f66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJtZW50YXRpb24lMjBwcm9jZXNzJTIwbmF0dXJhbCUyMG9yZ2FuaWN8ZW58MXx8fHwxNzc1MzkyNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quy trình lên men"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <span className="text-[#D4AF37]">100% Tự Nhiên</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8B7355] rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7 text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                      <span className="text-xs text-[#D4AF37]">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#8B7355]/10 border border-[#D4AF37]/20 rounded-2xl"
            >
              <p className="text-gray-700 leading-relaxed">
                <span className="text-[#D4AF37]">✓</span> Được chứng nhận an toàn thực phẩm và đạt tiêu chuẩn quốc tế
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
