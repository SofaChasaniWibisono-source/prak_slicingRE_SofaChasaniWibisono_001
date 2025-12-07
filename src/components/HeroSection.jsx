import React from "react";
import ReFT1 from "../assets/ReFT1.png";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-700">RUANG EKSPRESI :</span>{" "}
                <span className="text-gray-800">Wadah Kreatif & Kompetitif Mahasiswa</span>
            </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Ideation</span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Creation</span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Collaboration</span>
            <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Guidance & Support</span>
          </div>
          <p className="text-gray-600 mb-8">
            Kolaboratif yang dirancang untuk mengembangkan potensi 
            kreativitas dan kompetensi mahasiswa Sistem Informasi. 
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-end">
          <img 
            src={ReFT1}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
