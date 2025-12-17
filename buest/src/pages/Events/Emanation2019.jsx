import React from 'react';

const Emanation2019 = () => {
  const speakers = [
    {
      name: "Dr. Anjali Sharma",
      role: "Keynote Speaker",
      topic: "The Future of Computational Neuroscience",
      institution: "MIT Cognitive Science Department",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400"
    },
    {
      name: "Prof. Rajiv Mehta",
      role: "Panel Moderator",
      topic: "AI Ethics in Modern Research",
      institution: "Stanford University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400"
    },
    {
      name: "Dr. Sunita Verma",
      role: "Workshop Lead",
      topic: "Biomedical Innovations",
      institution: "Johns Hopkins University",
      image: "https://images.unsplash.com/photo-1551836026-d5c2c0b4b3a0?auto=format&fit=crop&w=400"
    }
  ];

  const highlights = [
    "500+ participants from 45 institutions",
    "25 research paper presentations",
    "12 hands-on workshops",
    "First interdisciplinary hackathon",
    "Launch of University Research Grant program"
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w-600",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-200 to-[#1e3a8a] text-white py-[6rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#ff7900] rounded-full mb-6">
              <span className="font-semibold">25th Annual</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emanation 2019
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8">
              "Innovation Through Convergence: Bridging Disciplines"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">Nov 14-16</div>
                <div className="text-gray-200">2019</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">Main Auditorium</div>
                <div className="text-gray-200">University Campus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">3 Days</div>
                <div className="text-gray-200">Of Knowledge Exchange</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[#10296b] mb-6">About Emanation 2019</h2>
            <p className="text-gray-700 text-lg mb-6">
              The 25th edition of Emanation marked a quarter-century of fostering academic excellence and 
              interdisciplinary collaboration. With the theme "Innovation Through Convergence," the event 
              focused on breaking down silos between scientific disciplines to address complex global challenges.
            </p>
            <p className="text-gray-700 text-lg">
              This year's symposium introduced the inaugural "Young Innovators Challenge," encouraging 
              undergraduate researchers to present their work alongside established academics. The event 
              also launched our university's first dedicated research grant program for interdisciplinary projects.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#10296b] mb-10">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#ff7900] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-sm font-semibold text-[#10296b] mb-2">Highlight {index + 1}</div>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#10296b] mb-10">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#10296b]">{speaker.name}</h3>
                      <p className="text-[#ff7900] font-medium">{speaker.role}</p>
                    </div>
                    <span className="bg-[#10296b] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Speaker
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium mb-2">{speaker.topic}</p>
                  <p className="text-gray-600 text-sm">{speaker.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#10296b] mb-10">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={img} 
                  alt={`Emanation 2019 ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Emanation 2019</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Impact */}
        <div className="bg-gradient-to-r from-[#10296b] to-[#2d4a9c] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-white">Legacy & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <p className="text-gray-200">Research collaborations initiated</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹25L</div>
              <p className="text-gray-200">Research grants awarded</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-gray-200">Papers published from proceedings</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg">
              Emanation 2019 established the foundation for our university's current interdisciplinary 
              research initiatives and strengthened our international academic partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emanation2019;