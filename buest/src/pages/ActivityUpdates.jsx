import { useState } from 'react'
import { Calendar, Clock, MapPin, Users, TrendingUp, Bell, Award } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const ActivityUpdates = () => {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'All Updates' },
    { id: 'academic', label: 'Academic' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Sports' },
    { id: 'research', label: 'Research' },
    { id: 'achievements', label: 'Achievements' }
  ]

  const updates = [
    {
      id: 1,
      title: "New AI Research Center Inaugurated",
      category: "research",
      date: "2024-12-01",
      description: "The university has established a state-of-the-art Artificial Intelligence Research Center equipped with latest computing infrastructure.",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Research", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "Annual Sports Meet Results Declared",
      category: "sports",
      date: "2024-11-28",
      description: "Engineering department wins overall championship in the annual inter-department sports competition.",
      icon: <Award className="w-6 h-6" />,
      tags: ["Sports", "Competition", "Achievement"]
    },
    {
      id: 3,
      title: "International Conference on Sustainable Energy",
      category: "academic",
      date: "2024-11-25",
      description: "Three-day international conference featuring experts from 15 countries discussing sustainable energy solutions.",
      icon: <Users className="w-6 h-6" />,
      tags: ["Conference", "Sustainability", "International"]
    },
    {
      id: 4,
      title: "University Ranked Top 10 Nationally",
      category: "achievements",
      date: "2024-11-22",
      description: "Achieved 8th position in the National Institutional Ranking Framework (NIRF) 2024.",
      icon: <Award className="w-6 h-6" />,
      tags: ["Ranking", "Achievement", "Excellence"]
    },
    {
      id: 5,
      title: "Cultural Fest - Prabandhotsav 2024",
      category: "events",
      date: "2024-11-20",
      description: "Annual cultural festival featuring music, dance, drama, and art competitions across three days.",
      icon: <Calendar className="w-6 h-6" />,
      tags: ["Cultural", "Festival", "Entertainment"]
    },
    {
      id: 6,
      title: "New Scholarship Program Launched",
      category: "academic",
      date: "2024-11-18",
      description: "Merit-cum-means scholarship for economically disadvantaged students with excellent academic records.",
      icon: <Bell className="w-6 h-6" />,
      tags: ["Scholarship", "Opportunity", "Financial Aid"]
    }
  ]

  const upcomingActivities = [
    {
      id: 1,
      title: "Alumni Meet 2024",
      date: "2024-12-15",
      time: "10:00 AM - 4:00 PM",
      location: "Alumni Center",
      type: "Networking"
    },
    {
      id: 2,
      title: "Career Fair",
      date: "2024-12-18",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "Career"
    },
    {
      id: 3,
      title: "Research Paper Submission Deadline",
      date: "2024-12-20",
      time: "11:59 PM",
      location: "Online",
      type: "Academic"
    },
    {
      id: 4,
      title: "Inter-College Debate Competition",
      date: "2024-12-22",
      time: "2:00 PM - 6:00 PM",
      location: "Seminar Hall",
      type: "Competition"
    }
  ]

  const filteredUpdates = activeTab === 'all' 
    ? updates 
    : updates.filter(update => update.category === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Activity & Updates</h1>
            <p className="text-xl text-gray-200">
              Stay informed about the latest happenings, achievements, and events across our university campus.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Updates List */}
            <div className="space-y-6">
              {filteredUpdates.map(update => (
                <Card key={update.id} className="hover:shadow-xl transition-shadow" hoverable>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                          {update.icon}
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                            {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{update.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {update.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                      <Button variant="outline" size="small">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {filteredUpdates.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline">
                  Load More Updates
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Activities */}
            <Card title="Upcoming Activities" padding="p-6">
              <div className="space-y-4">
                {upcomingActivities.map(activity => (
                  <div
                    key={activity.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <h4 className="font-bold text-primary mb-2">{activity.title}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(activity.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {activity.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {activity.location}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {activity.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card title="Quick Stats" padding="p-6">
              <div className="space-y-4">
                {[
                  { label: "Total Events This Month", value: "24", color: "bg-blue-100 text-blue-600" },
                  { label: "Active Research Projects", value: "48", color: "bg-green-100 text-green-600" },
                  { label: "Upcoming Deadlines", value: "12", color: "bg-orange-100 text-orange-600" },
                  { label: "Recent Achievements", value: "36", color: "bg-purple-100 text-purple-600" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className={`px-3 py-1 rounded-full font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="bg-gradient-to-br from-primary to-primary-light text-white" padding="p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-primary-light mb-4">
                Subscribe to our newsletter and get the latest updates directly in your inbox.
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
                  className="w-full bg-white text-primary hover:bg-gray-100"
                >
                  Subscribe Now
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityUpdates