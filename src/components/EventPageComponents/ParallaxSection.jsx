import React, { useState } from 'react'
import about1 from "../../assets/about-3.webp"
import about2 from "../../assets/about-4.webp"
import about3 from "../../assets/about-7.webp"
import about4 from "../../assets/about-8.webp"
import about5 from "../../assets/about-2.webp"
import { X } from 'lucide-react'

const events = [
  { id: 1, title: "Summer Music Festival", date: "2023-07-15", imageUrl: about1, height: 300 },
  { id: 2, title: "Tech Conference", date: "2023-08-22", imageUrl: about2, height: 400 },
  { id: 3, title: "Art Exhibition", date: "2023-09-10", imageUrl: about3, height: 350 },
  { id: 4, title: "Food Tasting", date: "2023-10-05", imageUrl: about4, height: 300 },
  { id: 5, title: "Marathon", date: "2023-11-12", imageUrl: about5, height: 350 },
  { id: 6, title: "Winter Wonderland", date: "2023-12-20", imageUrl: about1, height: 300 },
  { id: 7, title: "Charity Run", date: "2024-01-15", imageUrl: about2, height: 400 },
  { id: 8, title: "Film Festival", date: "2024-02-25", imageUrl: about3, height: 400 },
  { id: 9, title: "Startup Expo", date: "2024-03-12", imageUrl: about4, height: 400 },
  { id: 10, title: "Music Gala", date: "2024-04-05", imageUrl: about5, height: 400 },
  { id: 11, title: "Procom 2024", date: "2024-04-05", imageUrl: about1, height: 400 },
  { id: 12, title: "Developer Day 2024", date: "2024-04-05", imageUrl: about2, height: 300 },
]

const Modal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col animate-scaleIn">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 flex-grow overflow-auto">
          <img src={imageUrl} alt={title} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default function ParallaxSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 pl-20">
      <h1 className="mainh1 font-extrabold text-5xl text-center lg:text-7xl text-[#006984] pl-6 pb-8">Past Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            style={{
              gridRow: `span ${Math.ceil(event.height / 100)}`,
              backgroundImage: `url(${event.imageUrl})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
            }}
            onDoubleClick={() => openModal(event)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
              <h2 className="text-white text-xl font-semibold">{event.title}</h2>
              <p className="text-white text-sm">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedEvent?.imageUrl}
        title={selectedEvent?.title}
      />
    </div>
  )
}