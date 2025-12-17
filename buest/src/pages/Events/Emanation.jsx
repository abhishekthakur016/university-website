import { Calendar, MapPin, Users, Microscope, Lightbulb, Award } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Emanation = () => {
  const eventDetails = {
    title: "Emanation - Annual Research Symposium",
    subtitle: "Where Ideas Take Flight",
    description: "Emanation is the premier research symposium showcasing groundbreaking work from students and faculty across all disciplines. A platform for innovation, collaboration, and academic excellence.",
    theme: "Innovation for Sustainable Future",
    organizer: "Research & Development Cell"
  }

  const editions = [
    { year: "2025", theme: "AI for Social Good", date: "2025-11-10", status: "upcoming" },
    { year: "2024", theme: "Sustainable Technologies", date: "2024-11-12", status: "completed" },
    { year: "2023", theme: "Healthcare Innovations", date: "2023-11-15", status: "completed" },
    { year: "2022", theme: "Digital Transformation", date: "2022-11-08", status: "completed" },
    { year: "2021", theme: "Post-Pandemic World", date: "2021-11-10", status: "completed" },
    { year: "2020", theme: "Remote Revolution", date: "2020-11-05", status: "completed" },
    { year: "2019", theme: "Industry 4.0", date: "2019-11-14", status: "completed" }
  ]

  const researchCategories = [
    { name: "Science & Technology", projects: 45, icon: <Microscope className="w-6 h-6" /> },
    { name: "Engineering", projects: 38, icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Medical Research", projects: 32, icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: "Social Sciences", projects: 28, icon: <Users className="w-6 h-6" /> },
    { name: "Business & Economics", projects: 25, icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: "Arts & Humanities", projects: 22, icon: <Award className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Theme</div>
                  <div className="font-semibold">{eventDetails.theme}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-gray-300">Organizer</div>
                  <div className="font-semibold">{eventDetails.organizer}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* About Emanation */}
        <Card className="mb-12" padding="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">About Emanation</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-primary mb-3">Symposium Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Showcase innovative research across disciplines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Foster interdisciplinary collaboration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Connect researchers with industry partners
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Recognize and reward research excellence
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Research Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                {researchCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                      <div className="font-bold text-gray-900">{category.name}</div>
                    </div>
                    <div className="text-sm text-gray-600">{category.projects} projects</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Previous Editions */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Previous Editions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left p-4 font-semibold text-primary">Year</th>
                      <th className="text-left p-4 font-semibold text-primary">Theme</th>
                      <th className="text-left p-4 font-semibold text-primary">Date</th>
                      <th className="text-left p-4 font-semibold text-primary">Status</th>
                      <th className="text-left p-4 font-semibold text-primary">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editions.map((edition, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">{edition.year}</td>
                        <td className="p-4 text-gray-700">{edition.theme}</td>
                        <td className="p-4 text-gray-600">
                          {new Date(edition.date).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            edition.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {edition.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </span>
                        </td>
                        <td className="p-4">
                          {edition.year === "2025" ? (
                            <Button variant="outline" size="small">
                              Register
                            </Button>
                          ) : (
                            <Link to={`/events/emanation-${edition.year.toLowerCase()}`}>
                              <Button variant="outline" size="small">
                                View Details
                              </Button>
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Emanation 2025 */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Emanation 2025</h3>
              <p className="text-white mb-6">
                Join us for the next edition of our premier research symposium.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Theme</div>
                  <div className="font-semibold text-white">AI for Social Good</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Dates</div>
                  <div className="font-semibold text-white">November 10-12, 2025</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-blue text-primary hover:bg-gray-100"
              >
                Submit Abstract
              </Button>
            </Card>

            {/* Quick Links */}
            <Card title="Quick Links" padding="p-6">
              <div className="space-y-3">
                <Link to="/events/emanation-2025" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Emanation 2025 Details</span>
                </Link>
                <Link to="/events/emanation-2024" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Emanation 2024 Archive</span>
                </Link>
                <Link to="/events/emanation-2019" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Emanation 2019 Archive</span>
                </Link>
              </div>
            </Card>

            {/* Statistics */}
            <Card title="Symposium Statistics" padding="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Total Projects (2024)</span>
                  <span className="font-bold text-primary">190</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Participating Countries</span>
                  <span className="font-bold text-primary">25</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Industry Partners</span>
                  <span className="font-bold text-primary">45</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Research Papers</span>
                  <span className="font-bold text-primary">85</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Showcase Your Research?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of researchers presenting their work at Emanation 2025. Submit your abstract today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large">
              Submit Abstract
            </Button>
            <Button variant="outline" size="large">
              Download Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emanation;