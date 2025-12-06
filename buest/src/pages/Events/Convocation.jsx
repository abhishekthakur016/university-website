import { Calendar, MapPin, Users, GraduationCap, Award, Clock } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Convocation = () => {
  const convocationDetails = {
    title: "Annual Convocation Ceremony",
    description: "The most prestigious event in the academic calendar, celebrating the achievements of our graduating students. A solemn ceremony where degrees are conferred upon successful candidates.",
    nextConvocation: {
      year: "2025",
      date: "February 15, 2025",
      time: "10:00 AM",
      venue: "University Grand Auditorium"
    },
    chiefGuest: "Dr. Sarah Johnson",
    chiefGuestTitle: "Nobel Laureate in Physics"
  }

  const quickLinks = [
    { title: "Convocation 2025", link: "/events/convocation-2025", description: "Upcoming ceremony details" },
    { title: "Convocation 2024", link: "/events/convocation-2024", description: "Past ceremony archive" },
    { title: "Alumni Convocation", link: "/events/convocation-alumni", description: "Special alumni ceremony" }
  ]

  const procedures = [
    { step: 1, title: "Registration", description: "Online registration through student portal" },
    { step: 2, title: "Gown Collection", description: "Collect academic regalia from admin office" },
    { step: 3, title: "Rehearsal", description: "Mandatory practice session before ceremony" },
    { step: 4, title: "Ceremony", description: "Main convocation ceremony" },
    { step: 5, title: "Degree Collection", description: "Collect degree certificates after ceremony" }
  ]

  const faqs = [
    { question: "Who can attend the convocation?", answer: "All graduating students and two guests per student" },
    { question: "Is attendance mandatory?", answer: "Yes, for all graduating students" },
    { question: "What is the dress code?", answer: "Formal attire with academic regalia provided by university" },
    { question: "How to get convocation photos?", answer: "Professional photographers will be available at venue" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{convocationDetails.title}</h1>
            <p className="text-xl text-gray-200 mb-8">
              Celebrating Academic Excellence and Achievement
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Next Convocation */}
            <Card className="mb-8" padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Next Convocation - {convocationDetails.nextConvocation.year}</h2>
                <span className="px-4 py-2 bg-accent text-white font-semibold rounded-full">
                  Coming Soon
                </span>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Ceremony Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Date</div>
                          <div className="font-semibold">{convocationDetails.nextConvocation.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Time</div>
                          <div className="font-semibold">{convocationDetails.nextConvocation.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Venue</div>
                          <div className="font-semibold">{convocationDetails.nextConvocation.venue}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Chief Guest</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{convocationDetails.chiefGuest}</div>
                        <div className="text-gray-600">{convocationDetails.chiefGuestTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">
                  Register for Convocation
                </Button>
                <Button variant="outline">
                  Download Schedule
                </Button>
              </div>
            </Card>

            {/* Description */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">About the Convocation</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {convocationDetails.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">1200+</div>
                  <div className="text-gray-700">Graduating Students</div>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">85</div>
                  <div className="text-gray-700">Gold Medalists</div>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-gray-700">Expected Guests</div>
                </div>
              </div>
            </Card>

            {/* Procedures */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Convocation Procedures</h2>
              <div className="space-y-4">
                {procedures.map((proc) => (
                  <div key={proc.step} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {proc.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{proc.title}</h3>
                      <p className="text-gray-600">{proc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <Card title="Quick Links" padding="p-6">
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <div className="font-bold text-primary group-hover:text-primary-light mb-1">
                      {link.title}
                    </div>
                    <div className="text-sm text-gray-600">{link.description}</div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* FAQs */}
            <Card title="Frequently Asked Questions" padding="p-6">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">{faq.question}</div>
                    <div className="text-sm text-gray-600">{faq.answer}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                View All FAQs
              </Button>
            </Card>

            {/* Live Streaming */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-6">
              <h3 className="text-lg font-bold mb-3">Live Streaming</h3>
              <p className="text-primary-light mb-4">
                Can't attend in person? Watch the ceremony live online.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                Watch Live
              </Button>
            </Card>

            {/* Contact */}
            <Card title="Contact Convocation Office" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For registration queries and other convocation-related matters:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:convocation@university.edu" className="hover:text-accent">
                      convocation@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567 Ext. 601</span>
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

export default Convocation;