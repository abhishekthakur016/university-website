import { Calendar, MapPin, Users, Music, Camera, Mic, Award } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { Mail, Phone } from "lucide-react";


const Prabandhotsav = () => {
  const eventDetails = {
    title: "Prabandhotsav - Annual Cultural Festival",
    subtitle: "Where Talent Meets Tradition",
    description: "Prabandhotsav is the most awaited cultural extravaganza of the year, celebrating art, music, dance, and creativity. A three-day festival that transforms our campus into a vibrant hub of cultural activities.",
    theme: "Rhythms of Diversity",
    date: "2024-12-15",
    time: "10:00 AM - 10:00 PM",
    location: "University Cultural Center",
    organizer: "Cultural Committee"
  }

  const competitions = [
    { name: "Dance Competition", category: "Solo & Group", prize: "$1000", icon: <Music /> },
    { name: "Music Battle", category: "Band & Solo", prize: "$800", icon: <Mic /> },
    { name: "Drama Festival", category: "Street Play", prize: "$1200", icon: <Camera /> },
    { name: "Art Exhibition", category: "Fine Arts", prize: "$600", icon: <Award /> },
    { name: "Fashion Show", category: "Traditional Wear", prize: "$900", icon: <Users /> },
    { name: "Poetry Slam", category: "Multilingual", prize: "$500", icon: <Mic /> }
  ]

  const celebrityGuests = [
    { name: "Rahul Sharma", profession: "Classical Musician", time: "3:00 PM" },
    { name: "Priya Patel", profession: "Contemporary Dancer", time: "5:30 PM" },
    { name: "Amit Verma", profession: "Theatre Director", time: "7:00 PM" },
    { name: "Sneha Kapoor", profession: "Visual Artist", time: "4:00 PM" }
  ]

  const schedule = {
    "Day 1 - Dec 15": [
      { time: "10:00 AM", event: "Inauguration & Lamp Lighting", venue: "Main Stage" },
      { time: "11:30 AM", event: "Classical Music Competition", venue: "Music Hall" },
      { time: "2:00 PM", event: "Street Play Performances", venue: "Open Auditorium" },
      { time: "4:30 PM", event: "Art Exhibition Opens", venue: "Gallery Hall" },
      { time: "7:00 PM", event: "Folk Dance Performances", venue: "Main Stage" }
    ],
    "Day 2 - Dec 16": [
      { time: "10:00 AM", event: "Western Dance Competition", venue: "Main Stage" },
      { time: "1:30 PM", event: "Battle of Bands - Prelims", venue: "Amphitheater" },
      { time: "4:00 PM", event: "Celebrity Guest Session", venue: "Main Auditorium" },
      { time: "6:30 PM", event: "Fashion Show", venue: "Main Stage" },
      { time: "8:30 PM", event: "DJ Night", venue: "Sports Ground" }
    ],
    "Day 3 - Dec 17": [
      { time: "10:00 AM", event: "Drama Finals", venue: "Theatre Hall" },
      { time: "2:00 PM", event: "Battle of Bands - Finals", venue: "Amphitheater" },
      { time: "5:00 PM", event: "Poetry Slam", venue: "Literature Hall" },
      { time: "7:30 PM", event: "Prize Distribution", venue: "Main Stage" },
      { time: "9:00 PM", event: "Grand Finale Concert", venue: "Main Stage" }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className=" bg-gradient-to-r from-blue-100 to-primary-light text-white py-[12rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-black mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-white">Date</div>
                  <div className="font-semibold">
                    {new Date(eventDetails.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-white">Venue</div>
                  <div className="font-semibold">{eventDetails.location}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-white">Theme</div>
                  <div className="font-semibold">{eventDetails.theme}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Festival */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-6">About Prabandhotsav</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Festival Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      🎭
                    </div>
                    <span className="text-gray-700">50+ Cultural Performances</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      🎨
                    </div>
                    <span className="text-gray-700">Art Exhibition with 200+ Artworks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      🎵
                    </div>
                    <span className="text-gray-700">Live Music from 30+ Bands</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      💃
                    </div>
                    <span className="text-gray-700">Dance Workshops by Experts</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Competitions */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-6">Competitions & Prizes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitions.map((comp, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors text-center">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {comp.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{comp.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">{comp.category}</div>
                    <div className="text-lg font-bold text-purple-700">Prize: {comp.prize}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Schedule */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-6">Festival Schedule</h2>
              <div className="space-y-8">
                {Object.entries(schedule).map(([day, events]) => (
                  <div key={day}>
                    <h3 className="text-xl font-bold text-purple-800 mb-4">{day}</h3>
                    <div className="space-y-3">
                      {events.map((event, index) => (
                        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                          <div className="w-24 flex-shrink-0">
                            <div className="font-bold text-purple-700">{event.time}</div>
                          </div>
                          <div className="flex-grow">
                            <div className="font-semibold text-gray-900">{event.event}</div>
                            <div className="text-sm text-gray-600">{event.venue}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration */}
            <Card className="bg-gradient-to-b from-purple-300 to-pink-400 text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Participate Now!</h3>
              <p className="text-white mb-6">
                Register for competitions or get your visitor passes. Limited slots available!
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Competition Fee</div>
                  <div className="text-2xl font-bold">$15<span className="text-lg">/entry</span></div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Visitor Pass</div>
                  <div className="font-semibold">$5/Day or $12/3 Days</div>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <Button
                  variant="secondary"
                  className="w-full bg-blue  hover:bg-blue-700"
                >
                  Register for Competitions
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-blue border-blue text-black hover:bg-blue/10"
                >
                  Buy Visitor Pass
                </Button>
              </div>
            </Card>

            {/* Celebrity Guests */}
            <Card title="Celebrity Guests" padding="p-6">
              <div className="space-y-4">
                {celebrityGuests.map((guest, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-gray-900">{guest.name}</div>
                      <div className="text-sm text-purple-600 font-semibold">{guest.time}</div>
                    </div>
                    <div className="text-sm text-gray-600">{guest.profession}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Food Court */}
            <Card title="Food & Beverages" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600 mb-3">
                  Enjoy diverse cuisines at our food court:
                </div>
                {['International Cuisine', 'Street Food Corner', 'Healthy Eats', 'Dessert Zone', 'Beverage Station'].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact */}
            <Card title="Contact Cultural Committee" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For competition registration, sponsorship, or general queries:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:cultural@university.edu" className="hover:text-purple-600">
                      cultural@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567 Ext. 401</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prabandhotsav;