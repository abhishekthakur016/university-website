import { Calendar, MapPin, Users, Clock, Microscope, Award } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Emanation2025 = () => {
  const eventDetails = {
    title: "Emanation 2025 - Annual Research Symposium",
    subtitle: "AI for Social Good",
    description: "The 8th edition of our premier research symposium focusing on Artificial Intelligence applications for social betterment. Join researchers, innovators, and industry leaders exploring how AI can address pressing social challenges.",
    date: "2025-11-10",
    time: "9:00 AM - 6:00 PM",
    location: "University Research Center",
    organizer: "Research & Development Cell",
    theme: "Artificial Intelligence for Social Good",
    registrationDeadline: "2025-10-31"
  }

  const tracks = [
    { name: "Healthcare AI", sessions: 8, chair: "Dr. Sarah Chen" },
    { name: "Education Technology", sessions: 6, chair: "Prof. James" },
    { name: "Nature and AI", sessions: 7, chair: "Dr. Maria Garcia" },
    { name: "Social & Ethics", sessions: 5, chair: "Prof. David Kim" },
    { name: "Economic Dev.", sessions: 6, chair: "Dr. Priya Patel" },
    { name: "Public Policy", sessions: 4, chair: "Prof. Robert " }
  ]

  const keynoteSpeakers = [
    { name: "Dr. Emma Wilson", title: "AI Ethics Researcher", organization: "MIT Media Lab" },
    { name: "Alex Johnson", title: "Tech Entrepreneur", organization: "AI for Good Foundation" },
    { name: "Dr. Kenji Tanaka", title: "Healthcare AI Pioneer", organization: "Tokyo University Hospital" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-primary-light text-white py-[12rem]">
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
                <Microscope className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Theme</div>
                  <div className="font-semibold">{eventDetails.theme}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Venue</div>
                  <div className="font-semibold">{eventDetails.location}</div>
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
            {/* About Symposium */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">About Emanation 2025</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">Symposium Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Goals</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Showcase AI research with social impact
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Foster interdisciplinary collaboration
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Bridge academia and industry
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Research papers and publications
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Industry-academia partnerships
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Policy recommendations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Research Tracks */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Research Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((track,index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">{track.name}</h3>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {track.sessions}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Track Chair: {track.chair}
                    </div>
                    <Button variant="outline" size="small" className="w-full">
                      View Sessions
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Submit Your Research</h3>
              <p className="text-white mb-6">
                Present your research at Emanation 2025. Submit abstracts by October 31, 2025.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Registration Types</div>
                  <div className="font-bold text-white">Student: $50 | Academic: $100 | Industry: $200</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Abstract Deadline</div>
                  <div className="font-bold text-white">
                    {new Date(eventDetails.registrationDeadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <Button
                  variant="secondary"
                  className="w-full bg-blue text-primary hover:bg-gray-100"
                >
                  Submit Abstract
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10"
                >
                  Register as Attendee
                </Button>
              </div>
            </Card>

            {/* Keynote Speakers */}
            <Card title="Keynote Speakers" padding="p-6">
              <div className="space-y-4">
                {keynoteSpeakers.map((speaker, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{speaker.name}</div>
                        <div className="text-sm text-gray-600">{speaker.title}</div>
                        <div className="text-xs text-gray-500">{speaker.organization}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Important Dates */}
            <Card title="Important Dates" padding="p-6">
              <div className="space-y-3">
                {[
                  { date: "2025-09-15", event: "Abstract Submission Opens", status: "Open" },
                  { date: "2025-10-31", event: "Abstract Submission Deadline", status: "Upcoming" },
                  { date: "2025-11-05", event: "Acceptance Notification", status: "Future" },
                  { date: "2025-11-10", event: "Symposium Date", status: "Future" }
                ].map((item, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center text-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.status === 'Open' ? 'bg-green-100 text-green-800' :
                        item.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-900">{item.event}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emanation2025;