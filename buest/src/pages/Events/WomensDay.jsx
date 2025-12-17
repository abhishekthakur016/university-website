import { Calendar, MapPin, Users, Heart, Award, Star } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const WomensDay = () => {
  const eventDetails = {
    title: "International Women's Day Celebration",
    subtitle: "Empower Her: Breaking Barriers, Building Futures",
    description: "Join us in celebrating International Women's Day with a series of events honoring the achievements of women and promoting gender equality. A day dedicated to inspiration, empowerment, and creating meaningful change.",
    date: "2025-03-08",
    time: "10:00 AM - 4:00 PM",
    location: "University Cultural Center",
    organizer: "Women's Development Cell",
    theme: "Invest in Women: Accelerate Progress"
  }

  const activities = [
    { name: "Inspiring Women Panel", time: "10:30 AM", speakers: 4, icon: "💬" },
    { name: "Leadership Workshop", time: "11:45 AM", speakers: 2, icon: "👩‍💼" },
    { name: "Career Fair", time: "1:30 PM", companies: 15, icon: "💼" },
    { name: "Art Exhibition", time: "2:45 PM", artists: 8, icon: "🎨" },
    { name: "Networking Lunch", time: "12:30 PM", participants: "All", icon: "🍽️" },
    { name: "Award Ceremony", time: "3:30 PM", awards: 12, icon: "🏆" }
  ]

  const featuredSpeakers = [
    { name: "Dr. Sarah Chen", role: "Tech Entrepreneur", achievement: "Founded AI startup at age 25" },
    { name: "Judge Maria Garcia", role: "High Court Judge", achievement: "First woman to head State Judiciary" },
    { name: "Prof. Priya Patel", role: "University President", achievement: "Youngest university president in country" },
    { name: "Captain Lisa Wang", role: "Airline Pilot", achievement: "First woman to command international flights" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-100 text-white py-[15rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-pink-200 mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-pink-300">Date</div>
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
                <Heart className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-pink-300">Theme</div>
                  <div className="font-semibold">{eventDetails.theme}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-pink-300">Venue</div>
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
            {/* About the Celebration */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-pink-700 mb-6">Celebrating Women's Achievements</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-pink-800 mb-4">Event Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Empowerment Goals</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        Recognize women's contributions
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        Promote gender equality
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        Create networking opportunities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Inspire next generation leaders
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Foster supportive community
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Encourage career advancement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Activities Schedule */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-pink-700 mb-6">Day's Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-pink-500 transition-colors">
                    <div className="text-3xl mb-3">{activity.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{activity.name}</h3>
                    <div className="flex items-center text-pink-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">{activity.time}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {activity.speakers && `${activity.speakers} speakers`}
                      {activity.companies && `${activity.companies} companies`}
                      {activity.artists && `${activity.artists} artists`}
                      {activity.awards && `${activity.awards} awards`}
                      {activity.participants && `Open to all`}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration */}
            <Card className="bg-gradient-to-b from-pink-600 to-purple-700 text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Join the Celebration</h3>
              <p className="text-white mb-6">
                Open to all students, faculty, staff, and community members.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Event Fee</div>
                  <div className="text-2xl font-bold">Free<span className="text-lg"> admission</span></div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Registration</div>
                  <div className="font-semibold">Recommended for planning</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-white text-pink-700 hover:bg-gray-100"
              >
                Register Now
              </Button>
            </Card>

            {/* Featured Speakers */}
            <Card title="Inspiring Speakers" padding="p-6">
              <div className="space-y-4">
                {featuredSpeakers.map((speaker, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-pink-500 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{speaker.name}</div>
                        <div className="text-sm text-gray-600">{speaker.role}</div>
                        <div className="text-xs text-gray-500 mt-1">{speaker.achievement}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Support Initiatives */}
            <Card title="Support & Initiatives" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600 mb-3">
                  Ongoing initiatives by Women's Development Cell:
                </div>
                {[
                  "Mentorship Program for Women Students",
                  "Career Counseling Services",
                  "Leadership Training Workshops",
                  "Safety and Support Helpline",
                  "Scholarship Opportunities"
                ].map((initiative, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span className="text-sm">{initiative}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                Get Involved
              </Button>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Women at Our University</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "45%", label: "Women Students", description: "Of total student population" },
              { number: "38%", label: "Women Faculty", description: "Across all departments" },
              { number: "52%", label: "Leadership Roles", description: "Held by women in student bodies" },
              { number: "60+", label: "Women-focused", description: "Scholarships available" }
            ].map((stat, index) => (
              <Card key={index} className="text-center" padding="p-6">
                <div className="text-4xl font-bold text-pink-700 mb-2">{stat.number}</div>
                <div className="font-bold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomensDay