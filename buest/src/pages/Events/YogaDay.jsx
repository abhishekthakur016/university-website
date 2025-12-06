import React, { useState } from 'react';

const YogaDay = () => {
  const [activeSession, setActiveSession] = useState('beginner');

  const sessions = {
    beginner: [
      { time: '6:00 AM', type: 'Surya Namaskar', instructor: 'Yoga Master Ravi', duration: '45 min' },
      { time: '4:00 PM', type: 'Pranayama Basics', instructor: 'Dr. Anjali Sharma', duration: '60 min' },
      { time: '6:30 PM', type: 'Gentle Asanas', instructor: 'Yogi Priya', duration: '50 min' }
    ],
    intermediate: [
      { time: '7:00 AM', type: 'Hatha Yoga Flow', instructor: 'Yoga Guru Kumar', duration: '60 min' },
      { time: '5:00 PM', type: 'Meditation Workshop', instructor: 'Swami Niranjan', duration: '75 min' },
      { time: '7:00 PM', type: 'Balance Asanas', instructor: 'Master Deepak', duration: '55 min' }
    ],
    advanced: [
      { time: '5:30 AM', type: 'Ashtanga Series', instructor: 'Yoga Acharya Singh', duration: '90 min' },
      { time: '6:00 PM', type: 'Advanced Pranayama', instructor: 'Dr. Mehta', duration: '70 min' },
      { time: '8:00 PM', type: 'Yoga Nidra', instructor: 'Guru Bhavani', duration: '60 min' }
    ]
  };

  const benefits = [
    {
      icon: '🧘‍♀️',
      title: 'Physical Health',
      items: ['Improved flexibility', 'Better posture', 'Enhanced strength', 'Increased energy']
    },
    {
      icon: '😌',
      title: 'Mental Wellness',
      items: ['Stress reduction', 'Better focus', 'Emotional balance', 'Improved sleep']
    },
    {
      icon: '❤️',
      title: 'Spiritual Growth',
      items: ['Inner peace', 'Self-awareness', 'Mindfulness', 'Connection with self']
    },
    {
      icon: '🌿',
      title: 'Holistic Benefits',
      items: ['Disease prevention', 'Detoxification', 'Improved immunity', 'Longevity']
    }
  ];

  const yogaStyles = [
    {
      name: 'Hatha Yoga',
      description: 'Traditional yoga focusing on basic postures and breathing',
      difficulty: 'Beginner',
      duration: '60 min'
    },
    {
      name: 'Vinyasa Flow',
      description: 'Dynamic movement synchronized with breath',
      difficulty: 'Intermediate',
      duration: '75 min'
    },
    {
      name: 'Ashtanga Yoga',
      description: 'Rigorous sequence of postures with specific breathing',
      difficulty: 'Advanced',
      duration: '90 min'
    },
    {
      name: 'Yin Yoga',
      description: 'Slow-paced with long-held poses for deep tissue',
      difficulty: 'All Levels',
      duration: '60 min'
    },
    {
      name: 'Kundalini Yoga',
      description: 'Focus on breath, movement, and meditation',
      difficulty: 'Intermediate',
      duration: '70 min'
    },
    {
      name: 'Restorative Yoga',
      description: 'Relaxing poses using props for complete relaxation',
      difficulty: 'Beginner',
      duration: '50 min'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Anil Kumar',
      role: 'Faculty, Medical Department',
      quote: 'Regular yoga practice transformed my approach to work-life balance. The stress management techniques are invaluable.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Student, Computer Science',
      quote: 'As a student dealing with exam pressure, yoga has been my anchor. Improved my concentration and sleep quality.',
      rating: 5
    },
    {
      name: 'Prof. Rajesh Mehta',
      role: 'Department Head, Psychology',
      quote: 'The mindfulness practices from yoga sessions have enhanced my teaching methods and personal well-being.',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section - FIXED SVG BACKGROUND */}
      <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ff7900] rounded-full"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  International
                  <span className="block text-green-300">Yoga Day</span>
                </h1>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <div className="text-3xl font-bold">June 21, 2024</div>
                  <div className="text-green-200">10th International Yoga Day Celebration</div>
                </div>
                
                <p className="text-xl md:text-2xl mb-10 max-w-2xl">
                  "Yoga for Self and Society - Harmony for Humanity"
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-[#ff7900] text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                    Register for Sessions
                  </button>
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-colors border-2 border-white/30">
                    View Live Sessions
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#ff7900] to-emerald-500 rounded-3xl blur-xl opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🧘</div>
                      <h3 className="text-2xl font-bold">Mass Yoga Session</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: '6:00 AM', label: 'Morning Session' },
                        { value: '5000+', label: 'Participants' },
                        { value: 'Main Ground', label: 'Venue' },
                        { value: '90 min', label: 'Duration' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold">{item.value}</div>
                          <div className="text-sm text-green-300">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Theme */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Yoga Day 2024 Theme</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    The 10th International Yoga Day focuses on "Yoga for Self and Society," emphasizing 
                    how individual well-being contributes to societal harmony. This year's celebrations 
                    highlight yoga's role in creating balanced, peaceful communities.
                  </p>
                  <p className="text-lg">
                    With special emphasis on mental health in the post-pandemic world, our sessions 
                    incorporate therapeutic yoga practices, mindfulness meditation, and stress 
                    management techniques.
                  </p>
                  <div className="bg-green-50 rounded-xl p-6 mt-6">
                    <h3 className="text-xl font-bold text-green-800 mb-3">Special Initiatives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Yoga for Senior Citizens program</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Corporate Yoga Workshops</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Children's Yoga & Mindfulness</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#ff7900] rounded-full mr-3"></div>
                        <span>Therapeutic Yoga for Stress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-b from-green-700 to-emerald-800 p-8 md:p-12 text-white">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🕉️</div>
                  <h3 className="text-2xl font-bold">Unity in Diversity</h3>
                  <p className="text-green-200">One World, One Yoga</p>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">190+</div>
                    <p className="text-green-200">Countries Celebrating</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <p className="italic text-center text-green-100">
                      "Yoga is the journey of the self, through the self, to the self."
                    </p>
                    <p className="text-center mt-2 text-green-300">- The Bhagavad Gita</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yoga Benefits */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Holistic Benefits of Yoga</h2>
            <p className="text-xl text-gray-600">Transforming lives through ancient wisdom</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Session Schedule */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Daily Yoga Sessions</h2>
              <p className="text-green-200">Choose your practice level</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveSession(level)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    activeSession === level
                      ? 'bg-white text-green-700 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sessions[activeSession].map((session, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-2">{session.time}</div>
                    <h3 className="text-xl font-bold mb-2">{session.type}</h3>
                    <p className="text-green-200">Instructor: {session.instructor}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <span>Duration:</span>
                    <span className="font-bold">{session.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yoga Styles */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Yoga Styles & Practices</h2>
            <p className="text-xl text-gray-600">Find the practice that resonates with you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaStyles.map((style, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                    {style.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    style.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    style.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    style.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {style.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{style.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gray-500">Session:</span>
                  <span className="font-bold text-green-700">{style.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
              <p className="text-green-200">Hear from our yoga practitioners</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 pt-10">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="font-bold text-gray-800">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🌸</div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Begin Your Yoga Journey</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands in celebrating International Yoga Day. Experience the transformative power of yoga.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🧘‍♂️</div>
                <h4 className="font-bold text-green-800 mb-2">In-Person Sessions</h4>
                <p className="text-gray-600 text-sm mb-4">Join our mass yoga sessions on campus</p>
                <button className="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                  Register Now
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">💻</div>
                <h4 className="font-bold text-green-800 mb-2">Online Sessions</h4>
                <p className="text-gray-600 text-sm mb-4">Live streaming for remote participants</p>
                <button className="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                  Join Virtually
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📱</div>
                <h4 className="font-bold text-green-800 mb-2">Mobile App</h4>
                <p className="text-gray-600 text-sm mb-4">Download our yoga practice app</p>
                <button className="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                  Download App
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              All sessions are free and open to students, faculty, staff, and community members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaDay;