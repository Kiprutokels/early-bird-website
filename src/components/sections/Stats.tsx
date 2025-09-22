export const Stats = () => {
  const stats = [
    { number: '5,000+', label: 'Companies Trust Us', suffix: '' },
    { number: '1M+', label: 'Employees Managed', suffix: '' },
    { number: '99.9%', label: 'Uptime Guarantee', suffix: '' },
    { number: '24/7', label: 'Customer Support', suffix: '' }
  ];

  return (
    <section className="py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-primary-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
