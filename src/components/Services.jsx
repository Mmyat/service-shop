import services from '../../public/services.js';

const Services = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center my-8 gap-10 bg-white md:px-10 px-12 mt-[20px] py-10"
      id="services"
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-10"
        >
          {/* Text Content */}
          <div className="w-full md:w-[500px] flex flex-col gap-4">
            <h6 className="text-[24px] font-semibold text-dark mb-4">{service.name}</h6>
            <p className="text-base text-gray-700">{service.description}</p>
            {service.link && (
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[180px] outline outline-dark text-dark p-1 rounded-md text-center"
              >
                View More
              </a>
            )}
          </div>

          {/* Image Carousel */}
          <div className="flex gap-4 overflow-x-auto">
            {service.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${service.name} - ${index + 1}`}
                className="w-[200px] h-[150px] object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;