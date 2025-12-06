import { useState } from 'react'
import { AlertCircle, CheckCircle, Clock, MessageSquare, FileText, User } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Grievances = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [grievanceForm, setGrievanceForm] = useState({
    title: '',
    category: '',
    description: '',
    department: ''
  })

  const categories = [
    'Academic',
    'Administrative',
    'Infrastructure',
    'Hostel',
    'Library',
    'Examination',
    'Financial',
    'Other'
  ]

  const departments = [
    'Academic Office',
    'Examination Cell',
    'Student Affairs',
    'Hostel Administration',
    'Library',
    'Finance Department',
    'IT Services',
    'Sports Department'
  ]

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  }

  const grievances = [
    {
      id: 1,
      title: "Library Book Availability Issue",
      category: "Library",
      date: "2024-11-28",
      status: "resolved",
      description: "Required textbooks not available in library for Computer Science course.",
      department: "Library",
      lastUpdate: "2024-11-30",
      comments: 3
    },
    {
      id: 2,
      title: "Hostel Room Maintenance Request",
      category: "Hostel",
      date: "2024-11-25",
      status: "in-progress",
      description: "Leaking faucet in room 204, Building A requires immediate attention.",
      department: "Hostel Administration",
      lastUpdate: "2024-11-27",
      comments: 2
    },
    {
      id: 3,
      title: "Examination Grade Query",
      category: "Examination",
      date: "2024-11-22",
      status: "pending",
      description: "Discrepancy in Mathematics examination marks calculation.",
      department: "Examination Cell",
      lastUpdate: "2024-11-22",
      comments: 1
    },
    {
      id: 4,
      title: "WiFi Connectivity Issues",
      category: "Infrastructure",
      date: "2024-11-20",
      status: "resolved",
      description: "Poor internet connectivity in Computer Lab 3 during peak hours.",
      department: "IT Services",
      lastUpdate: "2024-11-23",
      comments: 4
    },
    {
      id: 5,
      title: "Scholarship Disbursement Delay",
      category: "Financial",
      date: "2024-11-18",
      status: "in-progress",
      description: "Merit scholarship for semester 3 not disbursed yet.",
      department: "Finance Department",
      lastUpdate: "2024-11-25",
      comments: 2
    },
    {
      id: 6,
      title: "Classroom Projector Not Working",
      category: "Academic",
      date: "2024-11-15",
      status: "pending",
      description: "Projector in Room 101 not functioning properly.",
      department: "Academic Office",
      lastUpdate: "2024-11-15",
      comments: 1
    }
  ]

  const filteredGrievances = activeTab === 'all' 
    ? grievances 
    : grievances.filter(g => g.status === activeTab)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGrievanceForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Grievance submitted:', grievanceForm)
    // Reset form
    setGrievanceForm({
      title: '',
      category: '',
      description: '',
      department: ''
    })
    alert('Grievance submitted successfully!')
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'resolved': return <CheckCircle className="w-5 h-5" />
      case 'in-progress': return <Clock className="w-5 h-5" />
      case 'pending': return <AlertCircle className="w-5 h-5" />
      default: return <AlertCircle className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grievance Redressal System</h1>
            <p className="text-xl text-gray-200">
              Submit your concerns and track their resolution. We're here to help resolve issues promptly.
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
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Grievances
              </button>
              {['pending', 'in-progress', 'resolved', 'rejected'].map(status => (
                <button
                  key={status}
                  onClick={() => setActiveTab(status)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === status
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Grievances List */}
            <div className="space-y-6">
              {filteredGrievances.length > 0 ? (
                filteredGrievances.map(grievance => (
                  <Card key={grievance.id} className="hover:shadow-xl transition-shadow" hoverable>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${statusColors[grievance.status]}`}>
                            {getStatusIcon(grievance.status)}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[grievance.status]}`}>
                                {grievance.status.charAt(0).toUpperCase() + grievance.status.slice(1).replace('-', ' ')}
                              </span>
                              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                                {grievance.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{grievance.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>Submitted: {new Date(grievance.date).toLocaleDateString()}</span>
                              <span>Department: {grievance.department}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{grievance.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">Last update: {new Date(grievance.lastUpdate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span className="text-sm">{grievance.comments} comments</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="small">
                            View Details
                          </Button>
                          {grievance.status === 'pending' && (
                            <Button variant="primary" size="small">
                              Update
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
                    <AlertCircle className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No grievances found</h3>
                  <p className="text-gray-600">No grievances match the selected status</p>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* New Grievance Form */}
            <Card title="Submit New Grievance" padding="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Title"
                  name="title"
                  value={grievanceForm.title}
                  onChange={handleInputChange}
                  placeholder="Brief title of your grievance"
                  required
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={grievanceForm.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={grievanceForm.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={grievanceForm.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="Please provide detailed description of your grievance..."
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <label className="flex items-center text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" required />
                    I confirm that the information provided is accurate
                  </label>
                </div>
                
                <Button type="submit" variant="primary" className="w-full">
                  Submit Grievance
                </Button>
              </form>
            </Card>

            {/* Statistics */}
            <Card title="Grievance Statistics" padding="p-6">
              <div className="space-y-4">
                {[
                  { label: "Total Grievances", value: grievances.length, color: "bg-blue-100 text-blue-600" },
                  { label: "Pending", value: grievances.filter(g => g.status === 'pending').length, color: "bg-yellow-100 text-yellow-600" },
                  { label: "In Progress", value: grievances.filter(g => g.status === 'in-progress').length, color: "bg-blue-100 text-blue-600" },
                  { label: "Resolved", value: grievances.filter(g => g.status === 'resolved').length, color: "bg-green-100 text-green-600" },
                  { label: "Avg. Resolution Time", value: "5 days", color: "bg-purple-100 text-purple-600" }
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

            {/* Quick Links */}
            <Card title="Quick Links" padding="p-6">
              <div className="space-y-3">
                <a href="/notices/online-grievance" className="flex items-center p-3 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  <FileText className="w-5 h-5 mr-3" />
                  <span>Online Grievance Portal</span>
                </a>
                <a href="/notices/notice-board" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <AlertCircle className="w-5 h-5 mr-3" />
                  <span>Check Status</span>
                </a>
                <a href="/contact" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <User className="w-5 h-5 mr-3" />
                  <span>Contact Support</span>
                </a>
              </div>
            </Card>

            {/* Important Information */}
            <Card className="bg-yellow-50 border-yellow-200" padding="p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Grievances are typically addressed within 3-7 working days</li>
                <li>• Please provide accurate contact information</li>
                <li>• Follow up on your grievance ID for updates</li>
                <li>• Escalation available if not resolved in 10 days</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grievances