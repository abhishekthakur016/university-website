import React from 'react';

const ScienceDay = () => {
  const activities = [
    {
      title: "Science Exhibition & Innovation Fair",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Campus Ground",
      description: "Student projects showcasing innovative solutions to real-world problems",
      participants: "150+ Projects"
    },
    {
      title: "Science Quiz Competition",
      time: "11:30 AM - 1:30 PM",
      venue: "Auditorium Hall",
      description: "Inter-college science quiz with teams from 25 institutions",
      participants: "50 Teams"
    },
    {
      title: "Young Scientist Awards",
      time: "2:00 PM - 3:30 PM",
      venue: "Convocation Hall",
      description: "Recognition of outstanding student research and innovation",
      participants: "20 Awardees"
    },
    {
      title: "Science Film Festival",
      time: "4:00 PM - 6:00 PM",
      venue: "Media Center",
      description: "Documentaries and films on scientific discoveries",
      participants: "Open to All"
    }
  ];

  const scienceClubs = [
    {
      name: "Astronomy Club",
      display: "🔭",
      activities: ["Night Sky Observation", "Telescope Workshop", "Space Tech Talks"]
    },
    {
      name: "Robotics Club",
      display: "🤖",
      activities: ["Drone Demo", "Robot Soccer", "AI Programming"]
    },
    {
      name: "Biotech Society",
      display: "🧬",
      activities: ["DNA Extraction Demo", "Microscope Lab", "Bioinformatics"]
    },
    {
      name: "Environmental Club",
      display: "🌿",
      activities: ["Water Testing", "Soil Analysis", "Climate Change Expo"]
    }
  ];

  const guestSpeakers = [
    {
      name: "Dr. Vikram Patel",
      role: "Chief Scientist, ISRO",
      topic: "Chandrayaan-3: India's Lunar Exploration Journey"
    },
    {
      name: "Prof. Anjali Deshpande",
      role: "Director, National Science Centre",
      topic: "Women in STEM: Breaking Barriers"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Quantum Computing Researcher",
      topic: "Quantum Revolution: From Theory to Application"
    }
  ];

  const studentProjects = [
    {
      title: "Low-Cost Water Purification System",
      team: "Chemical Engineering Dept",
      innovation: "Uses solar energy and natural filtration"
    },
    {
      title: "AI-Based Crop Disease Detection",
      team: "Computer Science Dept",
      innovation: "Mobile app with 95% accuracy rate"
    },
    {
      title: "Waste Plastic to Fuel Conversion",
      team: "Mechanical Engineering Dept",
      innovation: "Portable pyrolysis unit prototype"
    },
    {
      title: "Sign Language Translation Glove",
      team: "Electronics & Communication",
      innovation: "Real-time translation to speech/text"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#10296b] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-[#ff7900] rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              National Science Day
              <span className="block text-3xl md:text-4xl font-light mt-4 text-blue-200">
                Celebrating the Spirit of Discovery
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
              <div className="text-3xl font-bold">February 28, 2024</div>
              <div className="text-blue-200">Commemorating Raman Effect Discovery</div>
            </div>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100">
              "Science for a Sustainable Future: Innovations Driving Environmental Resilience"
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm">Theme 2024</div>
                <div className="text-lg font-bold">Indigenous Technologies for Viksit Bharat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm">Chief Guest</div>
                <div className="text-lg font-bold">Dr. R. Chidambaram</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Overview */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#10296b] mb-6">About National Science Day</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    National Science Day commemorates the discovery of the Raman Effect by Indian physicist 
                    Sir C.V. Raman, for which he was awarded the Nobel Prize in Physics in 1930. The day is 
                    celebrated to spread awareness about the importance of science in daily life.
                  </p>
                  <p className="text-lg">
                    This year's celebration focuses on indigenous technologies and sustainable development, 
                    aligning with India's vision for self-reliance in scientific innovation and technological 
                    advancement.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 mt-6">
                    <h3 className="text-xl font-bold text-[#10296b] mb-3">This Year's Focus</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff7900] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Promoting scientific temper among youth</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff7900] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Showcasing student innovations</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff7900] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Industry-academia collaboration</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff7900] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Science outreach programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-b from-[#10296b] to-blue-800 p-8 md:p-12 text-white">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="text-2xl font-bold">Sir C.V. Raman</h3>
                  <p className="text-blue-200">Nobel Laureate 1930</p>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">94th</div>
                    <p className="text-blue-200">Anniversary of Discovery</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <p className="italic text-center">
                      "The essence of science is independent thinking, hard work, and not equipment."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#10296b] mb-4">Day's Schedule</h2>
            <p className="text-xl text-gray-600">A day filled with scientific exploration and discovery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#ff7900] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">{activity.time}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                  <div className="text-gray-700 font-medium">{activity.venue}</div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Participants:</span>
                    <span className="font-bold text-[#10296b]">{activity.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science Clubs Showcase */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-[#10296b] to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Science Clubs & Societies</h2>
              <p className="text-blue-200">Student-led initiatives driving scientific curiosity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scienceClubs.map((club, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{club.display}</div>
                    <h3 className="text-xl font-bold">{club.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {club.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-[#ff7900] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guest Speakers */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#10296b] mb-4">Distinguished Speakers</h2>
            <p className="text-xl text-gray-600">Leading scientists sharing their insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guestSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {speaker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{speaker.name}</h3>
                    <p className="text-gray-600">{speaker.role}</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-[#10296b] mb-2">Topic</h4>
                  <p className="text-gray-700">{speaker.topic}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">Session Time</div>
                  <div className="font-bold text-[#10296b]">
                    {index === 0 ? "10:30 AM" : index === 1 ? "2:00 PM" : "4:30 PM"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Innovations */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#10296b] to-blue-800 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Student Innovation Projects</h2>
              <p className="text-blue-200">Showcasing the brightest ideas from our students</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studentProjects.map((project, index) => (
                  <div 
                    key={index}
                    className="group border border-gray-200 rounded-xl p-6 hover:border-[#ff7900] transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Project #{index + 1}</div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#10296b] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-[#10296b] text-sm font-bold rounded-full">
                        {project.team}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.innovation}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Exhibition Stall</span>
                      <span className="font-bold text-[#10296b]">A-{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold text-[#10296b] mb-4">Join the Scientific Revolution</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of our journey to foster scientific temper and innovation among the next generation of scientists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#10296b] text-white font-bold rounded-xl hover:bg-[#0d1f52] transition-colors">
                Register for Events
              </button>
              <button className="px-8 py-3 bg-white text-[#10296b] font-bold rounded-xl border-2 border-[#10296b] hover:bg-gray-50 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceDay;