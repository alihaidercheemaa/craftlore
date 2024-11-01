import { title } from 'process';
import { FaUser, FaMapMarkerAlt, FaLink, FaSeedling } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';

export const SERVICES = [
  {
    icon: <FaUser />,
    title: "CRAFT PROFILE",
    description: "Historical, Artistic, & Scientific Exploration of Kashmir Craft"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "GEOGRAPHICAL INDICATION",
    description: "Geo Certification Protocols of Kashmir Craft"
  },
  {
    icon: <FaLink />,
    title: "BLOCK-CHAIN TRACEABILITY",
    description: "Verified Craft Journey  Blocking Counterfeits"
  },
  {
    icon: <FaSeedling />,
    title: "CARBON FOOTPRINT",
    description: "Eco-Friendly Crafts, Measured & Endorsed"
  },
  {
    icon: <FaDollarSign/>,
    title:"CRAFT-PRICE VALUATION",
    description:"Self Estimator – Your Kashmir Craft,Your Price, Your Value"
  }
];

export const ServiceCard = () => {

  return (
    <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 hover:cursor-pointer">
          {SERVICES.map((service, index) => (
            <div
              className="group flex flex-col gap-2 bg-white transition-all duration-300  hover:shadow-2xl p-2 hover:bg-secondary rounded-lg"
              key={index}
            >
              <div className="container flex flex-col justify-center items-center py-5 gap-2">
                <div className="text-center text-4xl mb-4 text-secondary group-hover:text-white">{service.icon}</div>
                <div className="grid text-gray-900 text-lg font-extrabold group-hover:text-white">
                  {service.title.split(" ").map(((text, index) => (<p key={index} className='text-center'>{text}</p>)))}
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