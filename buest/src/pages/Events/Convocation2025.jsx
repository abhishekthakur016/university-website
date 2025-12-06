import { Calendar, MapPin, Users, Clock, GraduationCap, Award } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Convocation2025 = () => {
  const eventDetails = {
    title: "Convocation Ceremony 2025",
    subtitle: "Celebrating New Beginnings",
    description: "The 75th Annual Convocation Ceremony honoring the graduating class of 2025. Join us as we celebrate the achievements of our students and welcome them into the alumni community.",
    date: "2025-02-15",
    time: "10:00 AM",
    location: "University Grand Auditorium",
    chiefGuest: "Dr. Emma Wilson",
    chiefGuestTitle: "NASA Chief Scientist",
    totalGraduates: "1250",
    goldMedals: "45",
    honoraryDoctorates: "3"
  }

  const schedule = [
    { time: "9:00 AM", event: "Graduates Assembly", venue: "Graduation Hall" },
    { time: "9:30 AM", event: "Academic Procession", venue: "Main Corridor" },
    { time: "10:00 AM", event: "Ceremony Begins", venue: "Main Stage" },
    { time: "10:15 AM", event: "Chief Guest Address", venue: "Main Stage" },
    { time: "11:00 AM", event: "Degree Conferment", venue: "Main Stage" },
    { time: "12:30 PM", event: "Award Distribution", venue: "Main Stage" },
    { time: "1:30 PM", event: "Vote of Thanks", venue: "Main Stage" },
    { time: "2:00 PM", event: "Group Photographs", venue: "Lawn Area" }
  ]

  const awards = [
    { category: "Academic Excellence", recipients: 25, prize: "Gold Medal" },
    { category: "Research Innovation", recipients: 8, prize: "Research Trophy" },
    { category: "Community Service", recipients: 12, prize: "Service Award" },
    { category: "Sports Achievement", recipients: 15, prize: "Sports Trophy" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Date</div>
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
                <Clock className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Time</div>
                  <div className="font-semibold">{eventDetails.time}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Venue</div>
                  <div className="font-semibold">{eventDetails.location}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Graduates</div>
                  <div className="font-semibold">{eventDetails.totalGraduates}</div>
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
            {/* Event Description */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">About the Ceremony</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">Chief Guest</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">{eventDetails.chiefGuest}</div>
                    <div className="text-gray-700">{eventDetails.chiefGuestTitle}</div>
                    <p className="text-gray-600 mt-2">
                      Renowned scientist and space exploration pioneer will deliver the convocation address.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{eventDetails.totalGraduates}</div>
                  <div className="text-gray-700">Graduating Students</div>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{eventDetails.goldMedals}</div>
                  <div className="text-gray-700">Gold Medalists</div>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{eventDetails.honoraryDoctorates}</div>
                  <div className="text-gray-700">Honorary Doctorates</div>
                </div>
              </div>
            </Card>

            {/* Schedule */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Ceremony Schedule</h2>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="w-24 flex-shrink-0">
                      <div className="font-bold text-primary">{item.time}</div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-900">{item.event}</div>
                      <div className="text-sm text-gray-600">{item.venue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Graduate Registration</h3>
              <p className="text-primary-light mb-6">
                All graduating students must register for the convocation ceremony.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Registration Deadline</div>
                  <div className="font-semibold">January 31, 2025</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Gown Collection</div>
                  <div className="font-semibold">February 10-14, 2025</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-white text-primary hover:bg-gray-100"
              >
                Register Now
              </Button>
            </Card>

            {/* Awards */}
            <Card title="Awards & Honors" padding="p-6">
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{award.category}</h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {award.recipients} recipients
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{award.prize}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Live Streaming */}
            <Card title="Live Streaming" padding="p-6">
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  Can't attend in person? Watch the ceremony live online.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="font-semibold text-primary">Live Stream Available</div>
                  </div>
                </div>
                <Button variant="outline" size="small" className="w-full">
                  Watch Live
                </Button>
              </div>
            </Card>

            {/* Contact */}
            <Card title="Convocation Office" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For registration queries and ceremony details:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:convocation2025@university.edu" className="hover:text-accent">
                      convocation2025@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567 Ext. 602</span>
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

export default Convocation2025;