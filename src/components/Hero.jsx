const Hero = ({
    title = 'Get things done.',
    subtitle = 'Manage your tasks effortlessly and boost your productivity — one ticket at a time.',
  }) => {
    return (
      <div>
        <section className='border-b border-indigo-900 bg-indigo-200 py-20 mb-4'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <div className='text-center'>
              <h1 className='text-4xl font-extrabold text-indigo-950 sm:text-5xl md:text-6xl'>
                {title}
              </h1>
              <p className='my-4 text-xl text-indigo-950'>{subtitle}</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  export default Hero;