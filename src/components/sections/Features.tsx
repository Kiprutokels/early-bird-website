import { Users, Shield, TrendingUp, Clock } from '../icons';

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Comprehensive recruiting, onboarding, and performance management tools to build exceptional teams.',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: Shield,
      title: 'Payroll & Compliance',
      description: 'Automated payroll processing with built-in compliance management for all regulations.',
      color: 'bg-accent-100 text-accent-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Real-time HR analytics and predictive insights to make data-driven decisions.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Time & Attendance',
      description: 'Smart time tracking with automated scheduling and attendance management.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Everything You Need to Manage Your Workforce
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From hiring to retirement, our integrated platform covers every aspect of 
            human resource management with cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-pointer">
            Explore All Features
          </div>
        </div>
      </div>
    </section>
  );
};
