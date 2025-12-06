import { Calendar, MapPin, Users, Clock, GraduationCap, Award, Download } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Convocation2024 = () => {
  const eventDetails = {
    title: "Convocation Ceremony 2024",
    subtitle: "A Legacy of Excellence",
    description: "The 74th Annual Convocation Ceremony was held on March 15, 2024, celebrating the graduating class of 2024. Relive the memorable moments of this grand ceremony.",
    date: "2024-03-15",
    location: "University Grand Auditorium",
    chiefGuest: "Dr. Michael Chen",
    chiefGuestTitle: "Nobel Laureate in Physics",
    totalGraduates: "1180",
    highlights: [
      "1250 students graduated across 25 disciplines",
      "42 Gold Medals awarded for academic excellence",
      "3 Honorary Doctorates conferred",
      "Record attendance of 3000+ guests"
    ]
  }

  const photoGallery = [
    { id: 1, caption: "Academic Procession", category: "Ceremony" },
    { id: 2, caption: "Chief Guest Address", category: "Speeches" },
    { id: 3, caption: "Degree Conferment", category: "Ceremony" },
    { id: 4, caption: "Award Distribution", category: "Awards" },
    { id: 5, caption: "Group Photographs", category: "Memories" },
    { id: 6, caption: "Celebration Moment", category: "Memories" }
  ]

  const awardWinners = [
    { name: "Sarah Johnson", program: "Computer Science", award: "University Gold Medal" },
    { name: "Raj Patel", program: "Mechanical Engineering", award: "Academic Excellence" },
    { name: "Lisa Wang", program: "Business Administration", award: "Best Overall Student" },
    { name: "David Kim", program: "Biotechnology", award: "Research Innovation" }
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
            {/* Event Recap */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Ceremony Recap</h2>
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
                      Delivered an inspiring address on "The Future of Science and Technology"
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-4">Ceremony Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventDetails.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Photo Gallery */}
            <Card padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Photo Gallery</h2>
                <Button variant="outline" size="small">
                  View All Photos
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photoGallery.map((photo) => (
                  <div key={photo.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <div className="text-sm font-semibold">{photo.caption}</div>
                        <div className="text-xs">{photo.category}</div>
                      </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="text-sm">{photo.caption}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Award Winners */}
            <Card title="Top Award Winners" padding="p-6">
              <div className="space-y-4">
                {awardWinners.map((winner, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{winner.name}</div>
                        <div className="text-sm text-gray-600 mb-1">{winner.program}</div>
                        <div className="text-sm text-accent font-semibold">{winner.award}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Downloads */}
            <Card title="Download Resources" padding="p-6">
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-3" />
                    <span>Convocation Brochure 2024</span>
                  </div>
                  <span className="text-sm text-gray-500">PDF, 2.4 MB</span>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-3" />
                    <span>Award Winners List</span>
                  </div>
                  <span className="text-sm text-gray-500">PDF, 1.1 MB</span>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-3" />
                    <span>Chief Guest Speech</span>
                  </div>
                  <span className="text-sm text-gray-500">PDF, 850 KB</span>
                </a>
              </div>
            </Card>

            {/* Statistics */}
            <Card title="Ceremony Statistics" padding="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Total Graduates</span>
                  <span className="font-bold text-primary">1,180</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Gold Medals</span>
                  <span className="font-bold text-primary">42</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Guest Attendance</span>
                  <span className="font-bold text-primary">3,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Live Stream Views</span>
                  <span className="font-bold text-primary">15,000</span>
                </div>
              </div>
            </Card>

            {/* Video Recording */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-6">
              <h3 className="text-lg font-bold mb-3">Watch Recording</h3>
              <p className="text-primary-light mb-4">
                Missed the live ceremony? Watch the full recording.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                Watch Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Convocation2024;