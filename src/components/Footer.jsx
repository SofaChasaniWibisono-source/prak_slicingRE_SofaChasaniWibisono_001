import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">RUANG EKSPRESI</h3>
            <p className="text-blue-200 mb-4">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin 
              mengembangkan potensi melalui ideation, creation, collaboration, 
              dan guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a className="text-blue-200 hover:text-white">Home</a></li>
              <li><a className="text-blue-200 hover:text-white">About</a></li>
              <li><a className="text-blue-200 hover:text-white">Program</a></li>
              <li><a className="text-blue-200 hover:text-white">News</a></li>
              <li><a className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a className="text-blue-200 hover:text-white">Innovation Lab</a></li>
              <li><a className="text-blue-200 hover:text-white">Creative Workshops</a></li>
              <li><a className="text-blue-200 hover:text-white">Business Incubator</a></li>
              <li><a className="text-blue-200 hover:text-white">Mentorship Program</a></li>
              <li><a className="text-blue-200 hover:text-white">Community Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-200">Email: info@ruangekspresi.com</p>
            <p className="text-blue-200">Phone: +62 812 3456 7890</p>
            <p className="text-blue-200">Address: Jl. Kampus No. 1, Jakarta</p>
          </div>

        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-blue-200">
          © 2025 Ruang Ekspresi. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
