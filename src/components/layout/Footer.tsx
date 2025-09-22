export const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Payroll Management',
        'Time & Attendance',
        'Benefits Administration',
        'Talent Management',
        'HR Analytics'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'Small Business',
        'Mid-Market',
        'Enterprise',
        'Industry Solutions',
        'Integrations'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'API Reference',
        'Help Center',
        'Webinars',
        'Case Studies'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Partners',
        'Contact'
      ]
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                Fortune<span className="text-primary-400">Technologies</span>
              </span>
            </div>
            
            <p className="text-neutral-300 text-lg leading-relaxed">
              Empowering businesses worldwide with intelligent HR solutions 
              that drive growth, efficiency, and employee satisfaction.
            </p>
            
            <div className="space-y-2">
              <p className="text-neutral-400">📧 hello@fortunetechnologies.com</p>
              <p className="text-neutral-400">📞 +1 (555) 123-4567</p>
              <p className="text-neutral-400">📍 San Francisco, CA</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-neutral-300">
                Get the latest HR insights and product updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-neutral-400 text-sm">
            © 2025 Fortune Technologies. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
          
          <div className="flex space-x-4">
            {['LinkedIn', 'Twitter', 'Facebook', 'YouTube'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
