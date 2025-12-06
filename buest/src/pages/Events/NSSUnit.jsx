import { Calendar, MapPin, Users, Heart, Clock, Award } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const NSSUnit = () => {
  const eventDetails = {
    title: "NSS Unit - National Service Scheme",
    subtitle: "Not Me, But You",
    description: "The National Service Scheme (NSS) unit of our university is dedicated to community service and social responsibility. Our volunteers work on various social welfare projects throughout the year.",
    motto: "Education through Service",
    coordinator: "Prof. Rajesh Sharma",
    contact: "nss@university.edu",
    phone: "+1 (555) 123-4567 Ext. 301"
  }

  const ongoingProjects = [
    {
      title: "Blood Donation Camp",
      description: "Quarterly blood donation drives in collaboration with Red Cross",
      volunteers: 50,
      status: "Ongoing"
    },
    {
      title: "Adult Literacy Program",
      description: "Teaching basic literacy skills to adults in nearby villages",
      volunteers: 35,
      status: "Active"
    },
    {
      title: "Environmental Awareness",
      description: "Tree plantation drives and plastic-free campus initiatives",
      volunteers: 40,
      status: "Continuous"
    },
    {
      title: "Health Checkup Camps",
      description: "Free medical checkups in rural areas",
      volunteers: 25,
      status: "Monthly"
    }
  ]

  const upcomingEvents = [
    { date: "2024-12-05", event: "Winter Clothes Distribution", location: "Urban Slum Area" },
    { date: "2024-12-12", event: "Cleanliness Drive", location: "University Campus" },
    { date: "2024-12-19", event: "Elderly Care Visit", location: "Old Age Home" },
    { date: "2024-12-26", event: "New Year Celebration with Orphans", location: "Children's Home" }
  ]

  const achievements = [
    "Best NSS Unit Award - State Level 2023",
    "5000+ hours of community service completed",
    "1000+ units of blood collected in 2024",
    "Environmental Excellence Award 2024"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-green-200 mb-8">{eventDetails.subtitle}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-green-300">Motto</div>
                  <div className="font-semibold">{eventDetails.motto}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <div>
                  <div className="text-sm text-green-300">Program Coordinator</div>
                  <div className="font-semibold">{eventDetails.coordinator}</div>
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
            {/* About NSS */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-green-700 mb-6">About NSS</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {eventDetails.description}
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-700">Understand the community in which they work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-700">Identify the needs and problems of the community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-700">Develop among themselves a sense of social and civic responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-700">Utilize their knowledge in finding practical solutions</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Ongoing Projects */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Ongoing Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ongoingProjects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-700">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{project.volunteers} Volunteers</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                        project.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Join NSS */}
            <Card className="bg-gradient-to-b from-green-600 to-green-800 text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Join NSS</h3>
              <p className="text-green-200 mb-6">
                Become a volunteer and make a difference in society. Register now!
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-green-300">Eligibility</div>
                  <div className="font-semibold">All University Students</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-green-300">Volunteer Hours</div>
                  <div className="font-semibold">120 hours/year required</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-white text-green-700 hover:bg-gray-100"
              >
                Register as Volunteer
              </Button>
            </Card>

            {/* Upcoming Events */}
            <Card title="Upcoming Events" padding="p-6">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-green-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900">{event.event}</h4>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card title="Achievements" padding="p-6">
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact */}
            <Card title="Contact NSS Unit" padding="p-6">
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  For queries regarding volunteer registration, projects, or donations:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${eventDetails.contact}`} className="hover:text-green-600">
                      {eventDetails.contact}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{eventDetails.phone}</span>
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

export default NSSUnit;