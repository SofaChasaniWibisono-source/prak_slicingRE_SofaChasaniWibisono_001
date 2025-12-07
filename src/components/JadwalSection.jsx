import React from "react";
import { Calendar } from "lucide-react";
import morningImg from "../assets/jam.png";   
import eveningImg from "../assets/jam.png";   
import careerImg from "../assets/career.png";     
import extraImg from "../assets/extra.png";       
import projectImg from "../assets/project.png";   
import mentorImg from "../assets/mentor.png";     

export default function JadwalSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center">
          Jadwal & <span className="text-blue-500">Program Kegiatan</span>
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Program terstruktur yang dirancang untuk mengoptimalkan <br />
          pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        {/* CARD BESAR */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-14">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold text-blue-600">Setiap Sabtu</h3>
          </div>

          {/* 2 SESI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sesi Pagi */}
            <div className="p-6 rounded-xl bg-linear-to-r from-blue-100 to-green-100 shadow-md">
              <div className="flex items-center mb-3">
                <img src={morningImg} alt="morning" className="w-10 h-10 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Sesi Pagi</h4>
                  <p className="font-medium text-blue-800">09.00 – 12.00 WIB</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Workshop, Career Talks, dan Extra Classes intensif
              </p>
            </div>

            {/* Sesi Sore */}
            <div className="p-6 rounded-xl bg-linear-to-r from-yellow-100 to-green-100 shadow-md">
              <div className="flex items-center mb-3">
                <img src={eveningImg} alt="evening" className="w-10 h-10 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Sesi Sore</h4>
                  <p className="font-medium text-blue-800">16.00 – 19.00 WIB</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>

          </div>
        </div>

        {/* GRID PROGRAM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Career Talks */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md text-center">
            <img src={careerImg} className="w-14 h-16 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Career Talks</h4>
            <p className="text-gray-600">
              Sesi sharing dari praktisi industri dan alumni sukses
            </p>
          </div>

          {/* Extra Classes */}
          <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
            <img src={extraImg} className=" w-14 h-16 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Extra Classes</h4>
            <p className="text-gray-600">
              Kelas tambahan skill development dan workshop teknis
            </p>
          </div>

          {/* Project Work */}
          <div className="bg-blue-100 p-6 rounded-xl shadow-md text-center">
            <img src={projectImg} className="w-14 h-16 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Project Work</h4>
            <p className="text-gray-600">
              Mengerjakan project nyata dengan bimbingan mentor
            </p>
          </div>

          {/* Mentoring */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-md text-center">
            <img src={mentorImg} className="w-14 h-16 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Mentoring</h4>
            <p className="text-gray-600">
              Sesi konsultasi personal dengan mentor berpengalaman
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
