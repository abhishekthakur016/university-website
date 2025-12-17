import { Users, Award, Globe, Calendar, Mail, MapPin } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const AlumniAssociation = () => {
  const chapters = [
    { location: "North America", members: "5,200+", president: "Dr. James Wilson", year: "1995" },
    { location: "Europe", members: "3,800+", president: "Maria Schmidt", year: "1998" },
    { location: "Asia Pacific", members: "8,500+", president: "Kenji Tanaka", year: "1992" },
    { location: "Middle East", members: "2,100+", president: "Ahmed Hassan", year: "2005" },
    { location: "Africa", members: "1,500+", president: "Nadia Okonjo", year: "2010" },
    { location: "South America", members: "900+", president: "Carlos Mendez", year: "2015" }
  ]

  const initiatives = [
    {
      title: "Mentorship Program",
      description: "Connect experienced alumni with current students for career guidance",
      participants: "1,200+"
    },
    {
      title: "Career Development",
      description: "Job fairs, networking events, and career counseling services",
      participants: "3,500+"
    },
    {
      title: "Philanthropy",
      description: "Scholarship funds and infrastructure development projects",
      participants: "Donors: 850+"
    },
    {
      title: "Knowledge Sharing",
      description: "Guest lectures, workshops, and research collaborations",
      participants: "Experts: 450+"
    }
  ]

  const executiveCommittee = [
    { name: "Dr. Sarah Johnson", position: "President", batch: "1990" },
    { name: "Michael Chen", position: "Vice President", batch: "1995" },
    { name: "Priya Patel", position: "Secretary", batch: "2000" },
    { name: "Robert Williams", position: "Treasurer", batch: "1985" },
    { name: "Lisa Garcia", position: "Events Coordinator", batch: "2005" },
    { name: "David Kim", position: "Membership Director", batch: "2010" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-[13rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Alumni Association</h1>
            <p className="text-xl text-gray-200">
              Strengthening bonds, fostering growth, and building a legacy together.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Association Overview */}
        <Card className="mb-12" padding="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Alumni Association serves as the vital link between our university and its graduates worldwide. 
                We are committed to fostering lifelong relationships, supporting current students, and advancing 
                the mission of our alma mater.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">25,000+ Members</div>
                  <div className="text-gray-600">Active alumni network worldwide</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                To create a dynamic, engaged, and supportive alumni community that contributes to the continued 
                excellence of our university and makes a positive impact on society.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Global Network</div>
                  <div className="text-gray-600">Chapters in 85+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Global Chapters */}
            <Card className="mb-8" padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Global Chapters</h2>
                <Globe className="w-8 h-8 text-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((chapter, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">{chapter.location}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {chapter.members}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-3" />
                        <span className="text-sm">President: {chapter.president}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-3" />
                        <span className="text-sm">Established: {chapter.year}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="small" className="w-full mt-4">
                      Connect with Chapter
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Key Initiatives */}
            <Card padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Key Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{initiative.title}</h3>
                        <p className="text-gray-700 mb-3">{initiative.description}</p>
                        <div className="flex items-center text-accent font-semibold">
                          <Users className="w-4 h-4 mr-2" />
                          {initiative.participants}
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
            {/* Join Association */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Become a Member</h3>
              <p className="text-white mb-6">
                Join our global network and enjoy exclusive benefits.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-black">Annual Membership</div>
                  <div className="text-2xl font-bold text-white" >$50<span className="text-lg">/year</span></div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-black">Lifetime Membership</div>
                  <div className="font-semibold text-white">$500 (One-time)</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-blue text-primary hover:bg-gray-100"
              >
                Join Now
              </Button>
            </Card>

            {/* Executive Committee */}
            <Card title="Executive Committee" padding="p-6">
              <div className="space-y-4">
                {executiveCommittee.map((member, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-gray-900">{member.name}</div>
                      <span className="text-sm text-primary">Batch {member.batch}</span>
                    </div>
                    <div className="text-sm text-gray-600">{member.position}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card title="Association Events" padding="p-6">
              <div className="space-y-4">
                {[
                  { date: "2024-12-15", event: "Annual General Meeting", type: "Business" },
                  { date: "2025-01-20", event: "Global Alumni Conference", type: "Networking" },
                  { date: "2025-02-10", event: "Career Fair 2025", type: "Career" },
                  { date: "2025-03-05", event: "Philanthropy Gala", type: "Fundraising" }
                ].map((event, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-900">{event.event}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact */}
            <Card title="Contact Association" padding="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:association@university.edu" className="hover:text-accent">
                    association@university.edu
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567 Ext. 802</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Alumni Center, University Campus</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Networking Opportunities",
                description: "Connect with alumni across industries and geographies",
                features: ["Global Directory", "Industry Groups", "Regional Chapters"]
              },
              {
                title: "Career Development",
                description: "Advance your professional growth",
                features: ["Job Board", "Mentorship", "Career Workshops"]
              },
              {
                title: "University Privileges",
                description: "Stay connected with your alma mater",
                features: ["Library Access", "Campus Events", "Research Collaboration"]
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center" padding="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniAssociation