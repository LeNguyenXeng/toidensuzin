import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Minh Anh',
    age: '35 tuổi',
    avatar: 'https://images.unsplash.com/photo-1569925444984-9e2e5fc3d1fb?crop=entropy&cs=tinysrgb&fit=crop&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwaGVhbHRoeSUyMHdlbGxuZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MzkyNjY2fDA&ixlib=rb-4.1.0&q=80&w=112&h=112&utm_source=figma&utm_medium=referral',
    role: 'Nhân viên văn phòng',
    feedback: 'Sử dụng tỏi đen SuZin được 2 tháng, tôi cảm thấy sức khỏe tốt hơn hẳn. Không còn mệt mỏi và đề kháng được cải thiện rõ rệt.',
    rating: 5,
  },
  {
    name: 'Trần Văn Nam',
    age: '42 tuổi',
    avatar: 'https://images.unsplash.com/photo-1744579528653-7aa1180fa436?crop=entropy&cs=tinysrgb&fit=crop&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMGZpdG5lc3MlMjBoZWFsdGglMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUzOTI2Njd8MA&ixlib=rb-4.1.0&q=80&w=112&h=112&utm_source=figma&utm_medium=referral',
    role: 'Doanh nhân',
    feedback: 'Chất lượng tuyệt vời! Tỏi đen SuZin giúp tôi giảm cholesterol và cải thiện sức khỏe tim mạch. Rất đáng tin cậy.',
    rating: 5,
  },
  {
    name: 'Lê Thị Hương',
    age: '58 tuổi',
    avatar: 'https://images.unsplash.com/photo-1774094135149-bbeeb1767bfa?crop=entropy&cs=tinysrgb&fit=crop&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGVsZGVybHklMjB3b21hbiUyMHNtaWxpbmclMjBoZWFsdGh8ZW58MXx8fHwxNzc1MzkyNjY3fDA&ixlib=rb-4.1.0&q=80&w=112&h=112&utm_source=figma&utm_medium=referral',
    role: 'Giáo viên nghỉ hưu',
    feedback: 'Sản phẩm rất tốt cho người cao tuổi như tôi. Dùng được 1 tháng, giấc ngủ sâu hơn và tinh thần thoải mái hơn nhiều.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-14 lg:py-20 bg-gradient-to-b from-white to-[#faf9f7] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[#D4AF37] text-9xl">❝</div>
        <div className="absolute bottom-20 right-10 text-[#D4AF37] text-9xl rotate-180">❝</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] tracking-widest mb-6">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Phản Hồi Từ Khách Hàng
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hàng ngàn khách hàng đã tin tưởng và hài lòng với sản phẩm
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.feedback}"
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] rounded-full mb-6"></div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#D4AF37]/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.age}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 text-[#D4AF37]/20 text-4xl leading-none">❝</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-[#8B7355]/10 px-5 py-5 sm:max-w-none sm:inline-flex sm:w-auto sm:flex-row sm:gap-8 sm:rounded-full sm:px-8 sm:py-4">
            <div className="text-center">
              <div className="text-3xl text-[#D4AF37] mb-1">5,000+</div>
              <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="h-px w-20 bg-[#D4AF37]/30 sm:hidden"></div>
            <div className="hidden h-12 w-px bg-[#D4AF37]/30 sm:block"></div>
            <div className="text-center">
              <div className="text-3xl text-[#D4AF37] mb-1">4.9★</div>
              <div className="text-sm text-gray-600">Đánh giá trung bình</div>
            </div>
            <div className="h-px w-20 bg-[#D4AF37]/30 sm:hidden"></div>
            <div className="hidden h-12 w-px bg-[#D4AF37]/30 sm:block"></div>
            <div className="text-center">
              <div className="text-3xl text-[#D4AF37] mb-1">98%</div>
              <div className="text-sm text-gray-600">Tỷ lệ quay lại</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
