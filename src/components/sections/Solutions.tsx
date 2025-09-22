import { Button } from '../ui/Button';

export const Solutions = () => {
  const solutions = [
    {
      title: 'Small Business',
      description: 'Perfect for growing companies with 1-50 employees',
      features: ['Basic Payroll', 'Time Tracking', 'Employee Portal', 'Email Support'],
      price: '$4',
      period: 'per employee/month',
      popular: false
    },
    {
      title: 'Professional',
      description: 'Ideal for established businesses with 51-500 employees',
      features: ['Advanced Payroll', 'HR Analytics', 'Benefits Management', 'Phone Support', 'API Access'],
      price: '$8',
      period: 'per employee/month',
      popular: true
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive solution for large organizations 500+',
      features: ['Custom Integrations', 'Dedicated Manager', 'Advanced Security', 'White-label Options', 'SLA Support'],
      price: 'Custom',
      period: 'pricing',
      popular: false
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Choose the Right Solution for Your Business
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your organization, 
            from startups to enterprise-level implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                solution.popular 
                  ? 'border-primary-200 shadow-lg scale-105' 
                  : 'border-gray-100 hover:border-primary-100'
              }`}
            >
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-600">
                    {solution.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-neutral-900">
                      {solution.price}
                    </span>
                    <span className="text-neutral-600 ml-2">
                      {solution.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={solution.popular ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {solution.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
};
