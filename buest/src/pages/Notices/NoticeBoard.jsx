import { useState } from 'react'
import { Calendar, Filter, Download, Bell, AlertCircle, Info } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const NoticeBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'all',
    'academic',
    'examination',
    'admission',
    'scholarship',
    'event',
    'holiday',
    'urgent',
    'general'
  ]

  const notices = [
    {
      id: 1,
      title: "Mid-Term Examination Schedule - December 2024",
      category: "examination",
      date: "2024-12-01",
      description: "The schedule for mid-term examinations for all undergraduate courses has been published.",
      important: true,
      attachments: 2
    },
    {
      id: 2,
      title: "Admissions Open for Spring 2025 Session",
      category: "admission",
      date: "2024-11-28",
      description: "Online applications are now open for undergraduate and postgraduate programs.",
      important: true,
      attachments: 1
    },
    {
      id: 3,
      title: "University Holiday - Winter Break",
      category: "holiday",
      date: "2024-11-25",
      description: "University will remain closed from December 24, 2024 to January 1, 2025.",
      important: false,
      attachments: 0
    },
    {
      id: 4,
      title: "Merit Scholarship Application Deadline Extended",
      category: "scholarship",
      date: "2024-11-22",
      description: "Last date for scholarship applications extended to December 10, 2024.",
      important: true,
      attachments: 3
    },
    {
      id: 5,
      title: "Seminar on Artificial Intelligence in Education",
      category: "academic",
      date: "2024-11-20",
      description: "Department of Computer Science organizing a seminar on December 5, 2024.",
      important: false,
      attachments: 1
    },
    {
      id: 6,
      title: "Library Maintenance - Temporary Closure",
      category: "urgent",
      date: "2024-11-18",
      description: "Main library will be closed for maintenance on November 30, 2024.",
      important: true,
      attachments: 0
    },
    {
      id: 7,
      title: "Sports Complex Timings Revised",
      category: "general",
      date: "2024-11-15",
      description: "New timings for sports complex: 6:00 AM - 10:00 PM.",
      important: false,
      attachments: 0
    },
    {
      id: 8,
      title: "Research Grant Opportunities 2025",
      category: "academic",
      date: "2024-11-12",
      description: "Applications invited for university research grants. Deadline: January 15, 2025.",
      important: false,
      attachments: 2
    }
  ]

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const importantNotices = notices.filter(notice => notice.important)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-100 text-white py-[15rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notice Board</h1>
            <p className="text-xl text-gray-200">
              Official announcements, updates, and important information from the university administration.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <Card className="mb-8" padding="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1">
                  <Input 
                    className="ml-3"
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    startIcon={<Filter className="w-5 h-5" />}
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Filter by:</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>

            {/* Important Notices Banner */}
            {importantNotices.length > 0 && (
              <Card className="mb-8 border-red-200 bg-red-50" padding="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-red-800">Important Notices</h3>
                </div>
                <div className="space-y-3">
                  {importantNotices.slice(0, 2).map(notice => (
                    <div key={notice.id} className="p-4 bg-white border border-red-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-red-800">{notice.title}</h4>
                        <span className="text-sm text-red-600">
                          {new Date(notice.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{notice.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* All Notices */}
            <div className="space-y-6">
              {filteredNotices.length > 0 ? (
                filteredNotices.map(notice => (
                  <Card key={notice.id} className="hover:shadow-xl transition-shadow" hoverable>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${
                            notice.important ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'
                          }`}>
                            {notice.important ? <AlertCircle className="w-6 h-6" /> : <Info className="w-6 h-6" />}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                notice.category === 'urgent' ? 'bg-red-100 text-red-800' :
                                notice.category === 'examination' ? 'bg-blue-100 text-blue-800' :
                                notice.category === 'admission' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {notice.category}
                              </span>
                              {notice.important && (
                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                                  Important
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            {new Date(notice.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{notice.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">Posted: {new Date(notice.date).toLocaleDateString()}</span>
                          </div>
                          {notice.attachments > 0 && (
                            <div className="flex items-center text-gray-500">
                              <Download className="w-4 h-4 mr-2" />
                              <span className="text-sm">{notice.attachments} attachment(s)</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="small">
                            View Details
                          </Button>
                          {notice.attachments > 0 && (
                            <Button variant="primary" size="small">
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <Bell className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No notices found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Statistics */}
            <Card title="Notice Statistics" padding="p-6">
              <div className="space-y-4">
                {[
                  { label: "Total Notices", value: notices.length, color: "bg-blue-100 text-blue-600" },
                  { label: "Important Notices", value: importantNotices.length, color: "bg-red-100 text-red-600" },
                  { label: "This Month", value: 15, color: "bg-green-100 text-green-600" },
                  { label: "With Attachments", value: notices.filter(n => n.attachments > 0).length, color: "bg-purple-100 text-purple-600" }
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

            {/* Categories */}
            <Card title="Categories" padding="p-6">
              <div className="space-y-2">
                {categories.filter(cat => cat !== 'all').map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                      <span className="text-sm">
                        ({notices.filter(n => n.category === category).length})
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Subscribe */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-6">
              <h3 className="text-lg font-bold mb-3 text-red-400">Get Notifications</h3>
              <p className="text-white mb-4">
                Subscribe to receive important notices via email.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
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

            {/* Latest Updates */}
            <Card title="Latest Updates" padding="p-6">
              <div className="space-y-4">
                {notices.slice(0, 3).map(notice => (
                  <div key={notice.id} className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="text-sm text-gray-500 mb-1">
                      {new Date(notice.date).toLocaleDateString()}
                    </div>
                    <h4 className="font-medium text-gray-900 line-clamp-2">{notice.title}</h4>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="small" className="w-full mt-4">
                View All Updates
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard; 