"use client";

import { useState } from "react";
import { Card, CardContent } from "/components/ui/card";
import Image from "next/image";

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Hackathon 1st Runner-Up",
      description:
        "Won 1st runner-up at Hackcelestial Tech Algeria, showcasing innovative solutions.",
      image: "/images/Certificate/IMG-20241118-WA0038.jpg",
    },
    {
      id: 2,
      title: "Code bug 2nd Runner-Up",
      description:
        "Completed advanced certification in web development and design.",
      image: "/images/Certificate/IMG-20241118-WA0037.jpg",
    },
    {
      id: 3,
      title: "Hackathon Top 10 Winner",
      description:
        "Recognized for exceptional performance during the Android Development Internship.",
      image: "/images/Certificate/Screenshot 2024-11-17 130857.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="bg-zinc-800 border-zinc-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div
                  className="flex justify-center mb-6 cursor-pointer"
                  onClick={() => handleImageClick(achievement.image)}
                >
                  <div className="w-24 h-24 relative">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative w-auto max-w-4xl">
              <Image
                src={selectedImage}
                alt="Full Image"
                width={800}
                height={800}
                className="rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
