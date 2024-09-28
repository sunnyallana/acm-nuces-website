import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users } from 'lucide-react'
import Logo1 from "../../assets/images/events/codersCup.png"
import Logo2 from "../../assets/images/events/developerDay.jpeg"

const events = [
  {
    id: 1,
    name: "Coders Cup 2024",
    description: "The Coders' Cup is an intra-FAST programming competition that stands as the epitome of where rising minds polish and develop their coding abilities while debugging their very own creations",
    date: "2024-11-15",
    location: "Fast NUCES, Karachi",
    attendees: 2000,
    logo: Logo1,
    registrationLink: "https://www.acmcoderscup.online/"
  },
  {
    id: 2,
    name: "Developers Day 2025",
    description: "E.ocean Developers' Day is a platform provided for innovative minds to come together in pursuit of a more technological tomorrow. Providing you the opportunity to work your passion, expand your horizon and skills.",
    date: "2025-02-22",
    location: "Fast NUCES, Karachi",
    attendees: 5000,
    logo: Logo2,
    registrationLink: "https://www.greenearth.com/register"
  }
]

const EventCard = ({ event }) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.03 }} // Added scale effect on hover
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative">
      <img src={event.logo} alt={`${event.name} logo`} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{event.name}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{event.description}</p>
      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center mr-4 mb-2">
          <MapPin className="w-4 h-4 mr-2 text-[#257fb5]" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center mb-2">
          <Users className="w-4 h-4 mr-2 text-[#257fb5]" />
          <span>Expected {event.attendees.toLocaleString()} attendees</span>
        </div>
      </div>
      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="block">
        <motion.button 
          className="w-full bg-[#0b466d] hover:bg-[#257fb5] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05, rotate: 2 }} // Added rotation effect on hover
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </a>
    </div>
  </motion.div>
)

export default function UpcomingEvents() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 pl-14">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="font-extrabold text-5xl text-center lg:text-7xl text-[#006984] mb-12 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
          <motion.span 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#257fb5]"
            initial={{ width: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
