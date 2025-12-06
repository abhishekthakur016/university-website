import { Calendar, MapPin, Users, Trophy, Award, Activity, Clock } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const InterDepartmentSports = () => {
  const eventDetails = {
    title: "Inter-Department Sports Competition",
    subtitle: "Unity in Diversity, Excellence in Sports",
    description: "Annual inter-department sports competition bringing together students from all academic departments to compete in various sports and athletic events. A week-long celebration of sportsmanship, teamwork, and physical excellence.",
    dates: "December 18-25, 2024",
    location: "University Sports Complex",
    organizer: "Sports Council",
    participatingDepartments: 12,
    totalEvents: 15
  }

  const sportsEvents = [
    { name: "Cricket", type: "Team", venue: "Main Ground", date: "Dec 18-19" },
    { name: "Football", type: "Team", venue: "Football Field", date: "Dec 20-21" },
    { name: "Basketball", type: "Team", venue: "Indoor Stadium", date: "Dec 22" },
    { name: "Badminton", type: "Individual & Doubles", venue: "Badminton Court", date: "Dec 23" },
    { name: "Table Tennis", type: "Individual", venue: "TT Hall", date: "Dec 23" },
    { name: "Athletics", type: "Individual", venue: "Track Field", date: "Dec 24" },
    { name: "Volleyball", type: "Team", venue: "Volleyball Court", date: "Dec 24" },
    { name: "Chess", type: "Individual", venue: "Library Hall", date: "Dec 25" }
  ]

  const leaderboard = [
    { department: "Engineering", gold: 5, silver: 3, bronze: 2, points: 42 },
    { department: "Science", gold: 4, silver: 4, bronze: 3, points: 38 },
    { department: "Commerce", gold: 3, silver: 3, bronze: 2, points: 29 },
    { department: "Arts", gold: 2, silver: 4, bronze: 3, points: 25 },
    { department: "Law", gold: 2, silver: 2, bronze: 3, points: 21 }
  ]

  const schedule = [
    { day: "Day 1 - Dec 18", events: ["Cricket - Quarter Finals", "Opening Ceremony"] },
    { day: "Day 2 - Dec 19", events: ["Cricket - Semi Finals", "Football - Prelims"] },
    { day: "Day 3 - Dec 20", events: ["Football - Quarter Finals", "Basketball - Prelims"] },
    { day: "Day 4 - Dec 21", events: ["Football - Semi Finals", "Volleyball - Prelims"] },
    { day: "Day 5 - Dec 22", events: ["Basketball Finals", "Badminton - Early Rounds"] },
    { day: "Day 6 - Dec 23", events: ["Table Tennis", "Badminton Finals"] },
    { day: "Day 7 - Dec 24", events: ["Athletics Meet", "Volleyball Finals"] },
    { day: "Day 8 - Dec 25", events: ["Chess Tournament", "Closing Ceremony & Prize Distribution"] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-blue-200 mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-300">Dates</div>
                  <div className="font-semibold">{eventDetails.dates}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-300">Venue</div>
                  <div className="font-semibold">{eventDetails.location}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-300">Departments</div>
                  <div className="font-semibold">{eventDetails.participatingDepartments}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Activity className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-blue-300">Events</div>
                  <div className="font-semibold">{eventDetails.totalEvents}</div>
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
            {/* About Competition */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">About the Competition</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
                  <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-700 mb-2">8</div>
                  <div className="text-gray-700">Sports Categories</div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-700">Athletes Competing</div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-700 mb-2">45</div>
                  <div className="text-gray-700">Trophies & Medals</div>
                </div>
              </div>
            </Card>

            {/* Sports Events */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Sports Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sportsEvents.map((sport, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{sport.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        {sport.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{sport.venue}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{sport.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="small" className="w-full mt-4">
                      View Schedule
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leaderboard */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Current Leaderboard</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="text-left p-4 font-semibold text-blue-700">Department</th>
                      <th className="text-center p-4 font-semibold text-blue-700">🥇 Gold</th>
                      <th className="text-center p-4 font-semibold text-blue-700">🥈 Silver</th>
                      <th className="text-center p-4 font-semibold text-blue-700">🥉 Bronze</th>
                      <th className="text-center p-4 font-semibold text-blue-700">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-blue-50">
                        <td className="p-4 font-medium text-gray-900">{dept.department}</td>
                        <td className="p-4 text-center">
                          <span className="inline-block w-8 h-8 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center mx-auto">
                            {dept.gold}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-block w-8 h-8 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mx-auto">
                            {dept.silver}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-block w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center mx-auto">
                            {dept.bronze}
                          </span>
                        </td>
                        <td className="p-4 text-center font-bold text-blue-700">{dept.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration */}
            <Card className="bg-gradient-to-b from-blue-700 to-blue-900 text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Team Registration</h3>
              <p className="text-blue-200 mb-6">
                Form your department team and register for the competition!
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-blue-300">Last Date</div>
                  <div className="font-semibold">December 10, 2024</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-blue-300">Team Size</div>
                  <div className="font-semibold">Minimum 15 players/department</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-white text-blue-700 hover:bg-gray-100"
              >
                Register Your Team
              </Button>
            </Card>

            {/* Daily Schedule */}
            <Card title="Daily Schedule" padding="p-6">
              <div className="space-y-4">
                {schedule.map((day, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                    <h4 className="font-bold text-blue-700 mb-2">{day.day}</h4>
                    <ul className="space-y-1">
                      {day.events.map((event, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Clock className="w-3 h-3 mr-2" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Rules */}
            <Card title="Competition Rules" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600 mb-3">
                  Important rules for all participants:
                </div>
                {[
                  "All participants must be current university students",
                  "Department identity cards required",
                  "Sports kits as per event requirements",
                  "Fair play and sportsmanship mandatory",
                  "Medical fitness certificate required for contact sports"
                ].map((rule, index) => (
                  <div key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    {rule}
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact */}
            <Card title="Contact Sports Council" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For team registration, schedule queries, or sponsorship:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:sports@university.edu" className="hover:text-blue-600">
                      sports@university.edu
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567 Ext. 501</span>
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

export default InterDepartmentSports;