import { Calendar, MapPin, Users, GraduationCap, Award, Star, Trophy } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const ConvocationAlumni = () => {
  const eventDetails = {
    title: "Alumni Convocation Ceremony",
    subtitle: "Honoring Distinguished Alumni",
    description: "A special convocation ceremony dedicated to honoring our alumni community and recognizing their outstanding achievements and contributions to society. This biennial event brings together successful graduates from across generations.",
    date: "2025-03-20",
    time: "4:00 PM",
    location: "Alumni Hall & Convention Center",
    organizer: "Alumni Relations Office",
    theme: "Legacy of Excellence"
  }

  const awardCategories = [
    {
      name: "Distinguished Alumni Award",
      description: "For exceptional professional achievements",
      recipients: 5,
      icon: <Trophy className="w-6 h-6" />
    },
    {
      name: "Young Achiever Award",
      description: "For alumni under 40 making significant impact",
      recipients: 3,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Service to Society Award",
      description: "For outstanding community service",
      recipients: 4,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Entrepreneur of the Year",
      description: "For innovative business leadership",
      recipients: 2,
      icon: <Award className="w-6 h-6" />
    }
  ]

  const pastRecipients = [
    { name: "Dr. Sarah Chen", year: "2023", award: "Distinguished Alumni", achievement: "Pioneered AI diagnostics platform" },
    { name: "Michael Rodriguez", year: "2023", award: "Entrepreneur of the Year", achievement: "Founded unicorn tech startup" },
    { name: "Priya Patel", year: "2021", award: "Young Achiever", achievement: "Breakthrough research in quantum computing" },
    { name: "James Wilson", year: "2021", award: "Service to Society", achievement: "Established nationwide education nonprofit" }
  ]

  const schedule = [
    { time: "4:00 PM", event: "Alumni Registration & Networking", venue: "Lobby Area" },
    { time: "4:30 PM", event: "Welcome Address", venue: "Main Hall" },
    { time: "5:00 PM", event: "Keynote Speech by University President", venue: "Main Hall" },
    { time: "5:30 PM", event: "Award Ceremony", venue: "Main Stage" },
    { time: "6:30 PM", event: "Alumni Success Stories Panel", venue: "Conference Room" },
    { time: "7:30 PM", event: "Gala Dinner & Cultural Program", venue: "Banquet Hall" },
    { time: "9:00 PM", event: "Farewell & Group Photographs", venue: "Garden Area" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
                <GraduationCap className="w-5 h-5 mr-3" />
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
            {/* About the Event */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">About Alumni Convocation</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">Event Significance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Recognize alumni achievements
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Strengthen alumni-university bonds
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Inspire current students
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Award ceremony for distinguished alumni
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Networking with industry leaders
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Panel discussions and knowledge sharing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Award Categories */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Award Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awardCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {category.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                        <p className="text-gray-600 mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {category.recipients} recipients
                          </span>
                          <Button variant="outline" size="small">
                            Nominate
                          </Button>
                        </div>
                      </div>
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
              <h3 className="text-xl font-bold mb-4">Register Now</h3>
              <p className="text-primary-light mb-6">
                Join fellow alumni for this special celebration of success and achievement.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Alumni Registration</div>
                  <div className="text-2xl font-bold">$75<span className="text-lg">/person</span></div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Guest Pass</div>
                  <div className="font-semibold">$50/person (Max 2 guests)</div>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-gray-100"
                >
                  Register as Alumni
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10"
                >
                  Nominate for Awards
                </Button>
              </div>
            </Card>

            {/* Past Recipients */}
            <Card title="Past Award Recipients" padding="p-6">
              <div className="space-y-4">
                {pastRecipients.map((recipient, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-gray-900">{recipient.name}</div>
                      <span className="text-sm text-primary">Batch {recipient.year}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{recipient.award}</div>
                    <div className="text-sm text-gray-700">{recipient.achievement}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                View All Recipients
              </Button>
            </Card>

            {/* Event Schedule */}
            <Card title="Event Schedule" padding="p-6">
              <div className="space-y-3">
                {schedule.slice(0, 4).map((item, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold text-primary">{item.time}</div>
                      <div className="text-xs text-gray-500">{item.venue}</div>
                    </div>
                    <div className="text-sm text-gray-900">{item.event}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                View Full Schedule
              </Button>
            </Card>

            {/* Contact */}
            <Card title="Contact Alumni Office" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For registration, nomination, or sponsorship queries:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:alumniconvocation@university.edu" className="hover:text-accent">
                      alumniconvocation@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567 Ext. 603</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sponsorship Section */}
        <Card className="mt-12" padding="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Sponsorship Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Support the Alumni Convocation and gain visibility among our distinguished alumni network. 
                Various sponsorship packages are available for corporations and individual donors.
              </p>
              <Button variant="primary">
                Download Sponsorship Kit
              </Button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Sponsorship Tiers</h3>
              <div className="space-y-3">
                {[
                  { tier: "Platinum Sponsor", amount: "$10,000", benefits: "Keynote mention, premium branding, VIP table" },
                  { tier: "Gold Sponsor", amount: "$5,000", benefits: "Stage recognition, logo placement, 4 tickets" },
                  { tier: "Silver Sponsor", amount: "$2,500", benefits: "Program listing, 2 tickets" },
                  { tier: "Bronze Sponsor", amount: "$1,000", benefits: "Website listing, 1 ticket" }
                ].map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{sponsor.tier}</div>
                      <div className="text-sm text-gray-600">{sponsor.benefits}</div>
                    </div>
                    <div className="font-bold text-primary">{sponsor.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ConvocationAlumni;