import React from 'react';
import team1 from '../assets/team-1.avif';
import team2 from '../assets/team-1.avif';
import team3 from '../assets/team-1.avif';
import team4 from '../assets/team-1.avif';
import { FaFacebookF, FaTwitter, FaInstagram, FaShare } from 'react-icons/fa';

const teamMembers = [
  { img: team1, name: 'Full Name', role: 'Designation' },
  { img: team2, name: 'Full Name', role: 'Designation' },
  { img: team3, name: 'Full Name', role: 'Designation' },
  { img: team4, name: 'Full Name', role: 'Designation' },
];

const TeamSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className=" mb-3 text-blue-400 uppercase font-bold">Our Team</h6>
          <h1 className="text-3xl md:text-4xl font-bold">Expert Team Members</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow p-4 text-center group hover:shadow-lg transition">
              <div className="overflow-hidden mb-4 rounded">
                <img src={member.img} alt={member.name} className="w-full h-64 object-cover transform group-hover:scale-105 transition" />
              </div>
              <h5 className="text-xl font-semibold mb-1">{member.name}</h5>
              <p className="text-gray-500 mb-3">{member.role}</p>
              <div className="flex justify-center items-center gap-3 text-gray-600">
                <FaShare className="text-primary" />
                <div className="flex gap-2 text-sm">
                  <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                  <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                  <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
