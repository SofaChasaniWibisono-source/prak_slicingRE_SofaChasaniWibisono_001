import React from "react";
import fttt from "../assets/fttt.png";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-gray-800">Kata </span>
          <span className="text-blue-500">Mereka</span></h2>
          <p className="text-center text-gray-600 mb-8">
          Dengarka pengalaman dari mahasiswa yang telah <br />
          bergabung dalam program Ruang Ekspresi
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
