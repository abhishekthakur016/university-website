import { Calendar, MapPin, Users, Clock, Trophy, Award, Mail , Phone} from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Lakshya = () => {
  const eventDetails = {
    title: "Lakshya - Annual Technical Fest",
    date: "2024-12-10",
    time: "9:00 AM - 8:00 PM",
    location: "Main Campus Ground",
    organizer: "Student Technical Committee",
    description: "Lakshya is our premier annual technical festival that brings together the brightest minds from across the nation. This three-day extravaganza features cutting-edge workshops, innovative competitions, and inspiring talks from industry leaders.",
    theme: "Innovate. Create. Transform.",
    participants: "1500+",
    competitions: 12,
    workshops: 8
  }

  const highlights = [
    "Robotics Competition with autonomous challenges",
    "Hackathon - 48 hours of non-stop coding",
    "AI & ML Workshops by industry experts",
    "Startup Pitch Competition with venture capital opportunities",
    "Tech Exhibition showcasing student projects",
    "Career Fair with top tech companies"
  ]

  const schedule = [
    { time: "9:00 AM", event: "Inauguration Ceremony", venue: "Main Auditorium" },
    { time: "10:30 AM", event: "Robotics Competition", venue: "Tech Center" },
    { time: "1:00 PM", event: "Hackathon Begins", venue: "Computer Lab" },
    { time: "2:30 PM", event: "AI Workshop", venue: "Seminar Hall 1" },
    { time: "4:00 PM", event: "Startup Pitch", venue: "Business Center" },
    { time: "6:00 PM", event: "Tech Exhibition", venue: "Exhibition Hall" },
    { time: "7:30 PM", event: "Prize Distribution", venue: "Main Auditorium" }
  ]

  const sponsors = [
    { name: "TechCorp", tier: "Platinum" },
    { name: "InnovateLabs", tier: "Gold" },
    { name: "FutureTech", tier: "Silver" },
    { name: "CodeMasters", tier: "Bronze" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" text-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{eventDetails.title}</h1>
            <p className="text-xl text-gray`-200 mb-8">{eventDetails.theme}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-800">Date</div>
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
                  <div className="text-sm text-blue-800">Time</div>
                  <div className="font-semibold">{eventDetails.time}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-800">Venue</div>
                  <div className="font-semibold">{eventDetails.location}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-800">Organizer</div>
                  <div className="font-semibold">{eventDetails.organizer}</div>
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
            <Card className="mb-8"  padding="p-8">
              <h2 className="text-4xl  font-bold text-primary mb-6">About Lakshya</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{eventDetails.participants}</div>
                  <div className="text-gray-700">Expected Participants</div>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-xl text-center">
                  <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">{eventDetails.competitions}</div>
                  <div className="text-gray-700">Competitions</div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{eventDetails.workshops}</div>
                  <div className="text-gray-700">Workshops</div>
                </div>
              </div>
            </Card>

            {/* Event Highlights */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Event Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Schedule */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Event Schedule</h2>
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
                    <Button variant="outline" size="small">
                      Details
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Card */}
            <Card className="bg-orange-500 text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Register Now!</h3>
              <p className="text-primary-light- mb-6">
                Don't miss this opportunity to showcase your skills and learn from the best.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Registration Fee</div>
                  <div className="text-2xl font-bold">$25<span className="text-lg">/person</span></div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Last Date</div>
                  <div className="font-semibold">December 5, 2024</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-blue-500 text-primary hover:bg-gray-100"
              >
                Register Online
              </Button>
            </Card>

            {/* Sponsors */}
            <Card title="Event Sponsors" padding="p-6">
              <div className="space-y-4">
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{sponsor.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sponsor.tier === 'Platinum' ? 'bg-gray-800 text-white' :
                      sponsor.tier === 'Gold' ? 'bg-yellow-500 text-white' :
                      sponsor.tier === 'Silver' ? 'bg-gray-400 text-white' :
                      'bg-orange-800 text-white'
                    }`}>
                      {sponsor.tier} Sponsor
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Organizers */}
            <Card title="Contact Organizers" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For queries regarding registrations, schedule, or sponsorship:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:lakshya@university.edu" className="hover:text-accent">
                      lakshya@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567 Ext. 201</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Share Event */}
            <Card title="Share This Event" padding="p-6">
              <div className="flex space-x-3">
                {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((platform) => (
                  <button
                    key={platform}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lakshya;