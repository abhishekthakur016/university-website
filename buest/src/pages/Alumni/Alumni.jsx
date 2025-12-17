import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Award, Briefcase, Globe, Mail, MapPin, Calendar } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Alumni = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { number: "25,000+", label: "Alumni Worldwide", icon: <Globe className="w-8 h-8" /> },
    { number: "85+", label: "Countries", icon: <MapPin className="w-8 h-8" /> },
    { number: "150+", label: "Industry Sectors", icon: <Briefcase className="w-8 h-8" /> },
    { number: "1950", label: "Since", icon: <Calendar className="w-8 h-8" /> }
  ]

  const featuredAlumni = [
    {
      name: "Dr. Sarah Chen",
      batch: "2005",
      position: "Chief Medical Officer",
      company: "Global Health Solutions",
      achievement: "Pioneered AI diagnostics platform"
    },
    {
      name: "Michael Rodriguez",
      batch: "2010",
      position: "Tech Entrepreneur",
      company: "InnovateTech Inc.",
      achievement: "Founded unicorn startup at age 28"
    },
    {
      name: "Priya Patel",
      batch: "2015",
      position: "Research Director",
      company: "MIT Media Lab",
      achievement: "Nominated for Nobel Prize in Physics"
    }
  ]

  const upcomingEvents = [
    { date: "2024-12-15", title: "Annual Alumni Meet", location: "Main Campus" },
    { date: "2024-12-20", title: "Career Networking Session", location: "Virtual" },
    { date: "2025-01-10", title: "Alumni Golf Tournament", location: "Country Club" }
  ]

  const benefits = [
    {
      title: "Career Services",
      description: "Job postings, career counseling, and networking opportunities",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Continued Learning",
      description: "Access to library resources and online courses",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Campus Access",
      description: "Use of sports facilities and library",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Networking Events",
      description: "Regular meetups and professional gatherings",
      icon: <Globe className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-[13rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Alumni Network</h1>
            <p className="text-xl text-gray-200">
              Connecting generations of graduates worldwide. Stay connected, give back, and grow together.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center" padding="p-8" hoverable>
              <div className="text-accent mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-4 mb-8 overflow-x-auto">
              {['overview', 'benefits', 'events', 'stories'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <Card padding="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Welcome Alumni</h2>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Our alumni community spans across the globe, making significant contributions in various fields. 
                    As a graduate of our university, you're part of a lifelong network that offers support, opportunities, 
                    and meaningful connections.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 p-6 rounded-xl">
                      <h3 className="font-bold text-primary mb-3">Stay Connected</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Update your contact information
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Join regional alumni chapters
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Participate in mentoring programs
                        </li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-xl">
                      <h3 className="font-bold text-primary mb-3">Give Back</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Support student scholarships
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Share your expertise as a speaker
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          Hire from our talent pool
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Featured Alumni */}
                <Card padding="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Featured Alumni</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredAlumni.map((alum, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6 text-center hover:border-primary transition-colors">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">{alum.name}</h3>
                        <div className="text-sm text-gray-600 mb-2">Batch of {alum.batch}</div>
                        <div className="font-medium text-primary mb-2">{alum.position}</div>
                        <div className="text-sm text-gray-600 mb-3">{alum.company}</div>
                        <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                          {alum.achievement}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'benefits' && (
              <Card padding="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Alumni Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-primary">
                            {benefit.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-700">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card title="Quick Actions" padding="p-6">
              <div className="space-y-4">
                <Link to="/alumni/membership-form">
                  <Button variant="primary" fullWidth>
                    Update Profile
                  </Button>
                </Link>
                <Link to="/alumni/association">
                  <Button variant="outline" fullWidth>
                    Join Association
                  </Button>
                </Link>
                <Link to="/alumni/notable-alumni">
                  <Button variant="outline" fullWidth>
                    View Notable Alumni
                  </Button>
                </Link>
                <Link to="/alumni/our-team">
                  <Button variant="outline" fullWidth>
                    Meet the Team
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card title="Upcoming Events" padding="p-6">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
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
                      <div className="text-sm text-gray-600">{event.location}</div>
                    </div>
                    <h4 className="font-bold text-gray-900">{event.title}</h4>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                View All Events
              </Button>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Alumni Newsletter</h3>
              <p className="text-white mb-4">
                Stay updated with university news and alumni achievements.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full bg-blue text-primary hover:bg-gray-100"
                >
                  Subscribe
                </Button>
              </form>
            </Card>

            {/* Contact */}
            <Card title="Alumni Relations Office" padding="p-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:alumni@university.edu" className="hover:text-accent">
                    alumni@university.edu
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567 Ext. 801</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  Office hours: Monday-Friday, 9AM-5PM
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The education I received provided the foundation for my career in tech entrepreneurship.",
                author: "Alex Johnson",
                company: "Founder, TechVision",
                batch: "2012"
              },
              {
                quote: "The alumni network helped me land my dream job at a Fortune 500 company.",
                author: "Maria Garcia",
                company: "VP Marketing, GlobalCorp",
                batch: "2008"
              },
              {
                quote: "University connections opened doors for my research in sustainable energy.",
                author: "David Kim",
                company: "Lead Researcher, GreenTech",
                batch: "2015"
              }
            ].map((story, index) => (
              <Card key={index} className="relative" padding="p-8">
                <div className="text-6xl text-primary/20 absolute top-4 right-6">"</div>
                <p className="text-gray-700 mb-6 text-lg italic relative z-10">
                  {story.quote}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-gray-900">{story.author}</div>
                  <div className="text-sm text-gray-600">{story.company}</div>
                  <div className="text-sm text-primary mt-1">Batch of {story.batch}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alumni