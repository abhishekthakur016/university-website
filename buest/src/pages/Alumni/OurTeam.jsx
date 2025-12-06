import { Users, Mail, Phone, MapPin, Linkedin, Award, Briefcase } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Director, Alumni Relations",
      department: "Alumni Affairs Office",
      email: "sarah.johnson@university.edu",
      phone: "+1 (555) 123-4567 Ext. 801",
      bio: "15+ years experience in alumni relations, former university faculty member",
      expertise: ["Alumni Engagement", "Fundraising", "Networking Events"],
      years: "2010-present"
    },
    {
      name: "Michael Chen",
      position: "Associate Director",
      department: "Alumni Programs",
      email: "michael.chen@university.edu",
      phone: "+1 (555) 123-4567 Ext. 802",
      bio: "Specializes in digital alumni communities and career services",
      expertise: ["Digital Strategy", "Career Services", "Mentorship Programs"],
      years: "2015-present"
    },
    {
      name: "Priya Patel",
      position: "Events Coordinator",
      department: "Alumni Events",
      email: "priya.patel@university.edu",
      phone: "+1 (555) 123-4567 Ext. 803",
      bio: "Organizes alumni reunions, networking events, and chapter meetings",
      expertise: ["Event Planning", "Logistics", "Chapter Management"],
      years: "2018-present"
    },
    {
      name: "David Kim",
      position: "Communications Manager",
      department: "Alumni Communications",
      email: "david.kim@university.edu",
      phone: "+1 (555) 123-4567 Ext. 804",
      bio: "Manages alumni newsletter, social media, and website content",
      expertise: ["Content Strategy", "Social Media", "Newsletter Production"],
      years: "2019-present"
    },
    {
      name: "Lisa Garcia",
      position: "Membership Coordinator",
      department: "Alumni Services",
      email: "lisa.garcia@university.edu",
      phone: "+1 (555) 123-4567 Ext. 805",
      bio: "Handles membership registrations, benefits, and database management",
      expertise: ["Database Management", "Membership Services", "Benefits Administration"],
      years: "2020-present"
    },
    {
      name: "Robert Williams",
      position: "Career Services Liaison",
      department: "Alumni Career Center",
      email: "robert.williams@university.edu",
      phone: "+1 (555) 123-4567 Ext. 806",
      bio: "Connects alumni with career opportunities and professional development",
      expertise: ["Career Counseling", "Job Placement", "Professional Development"],
      years: "2017-present"
    }
  ]

  const advisoryBoard = [
    { name: "Dr. James Wilson", role: "Chair, Alumni Advisory Board", batch: "1985" },
    { name: "Maria Schmidt", role: "Board Member, Europe Chapter", batch: "1990" },
    { name: "Kenji Tanaka", role: "Board Member, Asia Pacific", batch: "1995" },
    { name: "Ahmed Hassan", role: "Board Member, Middle East", batch: "2000" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-200">
              Meet the dedicated professionals working to strengthen our alumni community and support your journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Team Introduction */}
        <Card className="mb-12" padding="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Alumni Relations Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team is committed to fostering lifelong connections between the university and its alumni. 
              We work to provide valuable services, organize meaningful events, and support your continued growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow" hoverable>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-sm text-primary font-semibold mb-1">{member.position}</div>
                      <div className="text-sm text-gray-600">{member.department}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-3" />
                      <a href={`mailto:${member.email}`} className="hover:text-accent">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Service: {member.years}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Advisory Board */}
            <Card padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Alumni Advisory Board</h2>
                <Award className="w-8 h-8 text-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advisoryBoard.map((member, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                        <div className="text-sm text-primary mb-2">{member.role}</div>
                        <div className="text-sm text-gray-600">Batch of {member.batch}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  The Alumni Advisory Board provides strategic guidance and represents alumni interests 
                  in university decision-making processes.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Office */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4">Contact Our Office</h3>
              <p className="text-primary-light mb-6">
                Reach out to us for any alumni-related queries or support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Office Hours</div>
                  <div className="font-semibold">Mon-Fri: 9AM-5PM</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Location</div>
                  <div className="font-semibold">Alumni Center, Building A</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-white text-primary hover:bg-gray-100"
              >
                Schedule Appointment
              </Button>
            </Card>

            {/* Quick Links */}
            <Card title="Quick Links" padding="p-6">
              <div className="space-y-3">
                <a href="/alumni/membership-form" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Update Your Profile</span>
                </a>
                <a href="/alumni/association" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Users className="w-4 h-4 mr-3" />
                  <span>Join Alumni Association</span>
                </a>
                <a href="/alumni/notable-alumni" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Award className="w-4 h-4 mr-3" />
                  <span>View Notable Alumni</span>
                </a>
                <a href="/events/convocation-alumni" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Briefcase className="w-4 h-4 mr-3" />
                  <span>Alumni Convocation</span>
                </a>
              </div>
            </Card>

            {/* Social Media */}
            <Card title="Connect With Us" padding="p-6">
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Follow us on social media for updates and alumni news:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a href="#" className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                  <a href="#" className="flex items-center justify-center p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam