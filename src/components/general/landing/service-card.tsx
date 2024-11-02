
import Image from 'next/image';
import { SERVICES } from '~/constants';


export const ServiceCard = () => {
  return (
    // Remove absolute positioning and use negative margin instead
    <div className="col-span-12 relative -mt-16 "> {/* Negative margin to overlap */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 hover:cursor-pointer">
          {SERVICES.map((service, index) => (
            <div
              className="group flex flex-col gap-2 bg-white transition-all duration-300 hover:shadow-2xl p-2 hover:bg-secondary rounded-lg border"
              key={index}
            >
              <div className="container flex flex-col justify-center items-center py-5 gap-2">
                <Image 
                  className='transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]' 
                  src={service.icon} 
                  alt='service icon' 
                  width={36} 
                  height={36} 
                />
                <div className="grid text-gray-900 text-lg font-extrabold group-hover:text-white">
                  {service.title.split(" ").map(((text, index) => (
                    <p key={index} className='text-center'>{text}</p>
                  )))}
                </div>
                <div className="grid text-gray-900 text-sm group-hover:text-white w-[15rem]">
                  <p className='text-center'>{service.description.split(' ').slice(0, 3).join(' ')}</p>
                  <p className='text-center'>{service.description.split(' ').slice(3).join(' ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}