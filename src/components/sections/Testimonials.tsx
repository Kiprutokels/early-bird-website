import { Star } from '../icons';
import { Button } from '../ui/Button';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director',
      company: 'TechCorp Inc.',
      content: 'Fortune Technologies transformed our HR operations. The automation saved us 15 hours per week, and employee satisfaction increased by 40%.',
      rating: 5,
      image: '🔵' // Using emoji as placeholder
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthLabs',
      content: 'The payroll accuracy and compliance features are outstanding. We\'ve had zero compliance issues since switching to Fortune Technologies.',
      rating: 5,
      image: '🟠' // Using emoji as placeholder
    },
    {
      name: 'Emma Davis',
      role: 'Operations Manager',
      company: 'InnovateCo',
      content: 'Best HR platform we\'ve used. The analytics dashboard provides incredible insights into our workforce trends and helps us make better decisions.',
      rating: 5,
      image: '🟣' // Using emoji as placeholder
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Loved by HR Teams Worldwide
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join thousands of companies that have revolutionized their HR operations with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-neutral-700 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-primary-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Transform Your HR Operations?
          </h3>
          <p className="text-neutral-600 mb-6">
            Join over 50,000 companies already using Fortune Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
