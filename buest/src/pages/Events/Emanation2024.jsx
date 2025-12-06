import React from 'react';

const Emanation2024 = () => {
  const keynoteSpeakers = [
    {
      name: "Dr. Maya Sharma",
      designation: "Chief AI Officer, NeuroSync Technologies",
      topic: "The Human-AI Symbiosis: Next Frontier of Intelligence",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
      time: "March 15, 10:00 AM"
    },
    {
      name: "Prof. Alex Chen",
      designation: "Director, MIT Media Lab",
      topic: "Spatial Computing & the Future of Digital Interaction",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      time: "March 15, 2:30 PM"
    },
    {
      name: "Dr. Fatima Al-Jaber",
      designation: "CEO, GreenTech Innovations",
      topic: "Sustainable Tech Solutions for Climate Resilience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400",
      time: "March 16, 11:00 AM"
    }
  ];

  const workshops = [
    {
      title: "Generative AI for Creative Professionals",
      instructor: "OpenAI Research Team",
      duration: "3 Hours",
      level: "Intermediate",
      seats: "45/60 Filled"
    },
    {
      title: "Quantum Computing Fundamentals",
      instructor: "IBM Quantum Network",
      duration: "4 Hours",
      level: "Beginner",
      seats: "38/50 Filled"
    },
    {
      title: "AR/VR Development with Unity",
      instructor: "Meta Reality Labs",
      duration: "5 Hours",
      level: "Advanced",
      seats: "52/60 Filled"
    },
    {
      title: "Blockchain & Web3 Security",
      instructor: "Ethereum Foundation",
      duration: "3 Hours",
      level: "Intermediate",
      seats: "40/50 Filled"
    }
  ];

  const innovationsShowcase = [
    {
      project: "AI-Powered Early Disease Detection",
      team: "MediScan AI",
      category: "Healthcare",
      status: "Prototype Ready"
    },
    {
      project: "Autonomous Agricultural Drones",
      team: "AgriTech Robotics",
      category: "Agriculture",
      status: "Field Testing"
    },
    {
      project: "Ocean Plastic Collection System",
      team: "CleanSea Innovations",
      category: "Environment",
      status: "Pilot Deployed"
    },
    {
      project: "Sign Language Translation Gloves",
      team: "Accessibility Tech Labs",
      category: "Assistive Tech",
      status: "Beta Testing"
    }
  ];

  const stats = [
    { number: "1,850+", label: "Total Participants", icon: "👥" },
    { number: "68", label: "Countries Represented", icon: "🌍" },
    { number: "145", label: "Startups Showcased", icon: "🚀" },
    { number: "₹42L", label: "Prize Money Awarded", icon: "🏆" },
    { number: "320", label: "Research Papers", icon: "📄" },
    { number: "85%", label: "Participant Satisfaction", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#10296b] via-[#1e3a8a] to-[#3b4f9c] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff7900] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-6 py-3 bg-[#ff7900] text-white font-bold rounded-full shadow-lg">
                  29th Edition
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full">
                  Hybrid Format
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full">
                  Global Conference
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Emanation
                <span className="block text-[#ff7900] mt-2">2024</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-light mb-8 max-w-3xl mx-auto opacity-90">
                "Convergence of Intelligence: Human, Artificial, Quantum"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">March 14-16</div>
                  <div className="text-gray-300">2024</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">International</div>
                  <div className="text-gray-300">Convention Center</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1850+</div>
                  <div className="text-gray-300">Delegates</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-[#ff7900] text-white font-bold rounded-xl hover:bg-[#e56b00] transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                  View Event Recap
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                  Download Proceedings
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold flex items-center justify-center gap-2">
                    <span>{stat.icon}</span>
                    <span>{stat.number}</span>
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Summary */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#10296b] mb-6">Event Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Emanation 2024 marked a pivotal moment in the convergence of human intelligence, 
                    artificial intelligence, and quantum computing. The 29th edition brought together 
                    pioneers from academia, industry, and research to explore the symbiotic relationship 
                    between different forms of intelligence and their collective impact on society.
                  </p>
                  <p className="text-gray-700 mb-6">
                    This year's focus was on practical applications and ethical considerations of 
                    emerging technologies, with special emphasis on responsible AI development, 
                    quantum readiness, and inclusive technological advancement.
                  </p>
                  <div className="bg-[#10296b]/5 rounded-xl p-6 my-8">
                    <h3 className="text-xl font-bold text-[#10296b] mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Launched the "AI for Social Good" initiative with 25 pilot projects</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Established Quantum Computing Research Consortium with 15 universities</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Signed 8 international research collaboration agreements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-b from-[#10296b] to-[#1e3a8a] p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">48%</div>
                    <p className="text-gray-300">Female Participation (Highest Ever)</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-4xl font-bold mb-2">35+</div>
                    <p className="text-gray-300">Industry Partners</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-4xl font-bold mb-2">₹2.1Cr</div>
                    <p className="text-gray-300">Investment Interest Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#10296b] mb-4">Keynote Speakers</h2>
            <p className="text-xl text-gray-600">Visionaries who shaped the conversations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keynoteSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#ff7900] text-white text-sm font-bold rounded-full">
                      Keynote
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{speaker.name}</h3>
                    <p className="text-gray-600 text-sm">{speaker.designation}</p>
                  </div>
                  <p className="text-gray-800 font-medium mb-4">{speaker.topic}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {speaker.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-[#10296b] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Hands-On Workshops</h2>
                <p className="text-gray-300">Interactive sessions with industry experts</p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-[#10296b] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                View All Workshops
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshops.map((workshop, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{workshop.title}</h3>
                      <p className="text-gray-300 text-sm">By {workshop.instructor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      workshop.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {workshop.level}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm">
                      <span className="text-gray-300">Duration: </span>
                      <span className="font-semibold">{workshop.duration}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">{workshop.seats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#10296b] mb-4">Innovation Showcase</h2>
            <p className="text-xl text-gray-600">Groundbreaking projects from startups & students</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#10296b] mb-6">Award-Winning Projects</h3>
                <div className="space-y-6">
                  {innovationsShowcase.map((project, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#10296b]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#10296b]/20 transition-colors">
                        <span className="text-2xl">
                          {project.category === 'Healthcare' ? '🏥' :
                           project.category === 'Agriculture' ? '🌾' :
                           project.category === 'Environment' ? '🌍' : '🤝'}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-800 mb-1">{project.project}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-gray-600">Team: {project.team}</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {project.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            project.status === 'Prototype Ready' ? 'bg-green-100 text-green-800' :
                            project.status === 'Field Testing' ? 'bg-yellow-100 text-yellow-800' :
                            project.status === 'Pilot Deployed' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#ff7900] to-orange-500 p-8 md:p-12 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold mb-2">Grand Innovation Award 2024</h3>
                    <p className="text-orange-100">Winning Project</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🥇</div>
                      <h4 className="text-xl font-bold mb-2">Quantum-Enhanced Drug Discovery Platform</h4>
                      <p className="text-orange-100">PharmaQuant AI Research</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Prize Money</span>
                        <span className="font-bold">₹10,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Incubation Offer</span>
                        <span className="font-bold">Yes (6 Months)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Patent Support</span>
                        <span className="font-bold">Full Sponsorship</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 py-3 bg-white text-[#ff7900] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#10296b] mb-4">Event Gallery</h2>
            <p className="text-xl text-gray-600">Moments from Emanation 2024</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1492681290082-e932832941e6?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600",
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600"
            ].map((img, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Emanation 2024 ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white text-sm font-medium">Emanation 2024</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-[#10296b] text-white font-bold rounded-xl hover:bg-[#0d1f52] transition-colors inline-flex items-center">
              View Full Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emanation2024;