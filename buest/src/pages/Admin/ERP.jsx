import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Database, Users, BookOpen, Calendar, Shield, BarChart, Settings, Download } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const ERP = () => {
  const [activeModule, setActiveModule] = useState('overview')

  const modules = [
    {
      id: 'student',
      title: 'Student Management',
      icon: <Users className="w-8 h-8" />,
      description: 'Manage student admissions, enrollment, and academic records',
      features: ['Admissions', 'Registration', 'Grades', 'Attendance']
    },
    {
      id: 'academic',
      title: 'Academic Planning',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Course management, curriculum planning, and scheduling',
      features: ['Course Catalog', 'Class Scheduling', 'Faculty Load', 'Room Allocation']
    },
    {
      id: 'finance',
      title: 'Finance & Accounting',
      icon: <BarChart className="w-8 h-8" />,
      description: 'Fee management, budgeting, and financial reporting',
      features: ['Fee Collection', 'Payroll', 'Budgeting', 'Financial Reports']
    },
    {
      id: 'hr',
      title: 'Human Resources',
      icon: <Users className="w-8 h-8" />,
      description: 'Staff management, payroll, and performance tracking',
      features: ['Employee Records', 'Payroll', 'Leave Management', 'Performance']
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      icon: <Database className="w-8 h-8" />,
      description: 'Asset tracking, procurement, and inventory control',
      features: ['Asset Tracking', 'Procurement', 'Store Management', 'Maintenance']
    },
    {
      id: 'examination',
      title: 'Examination System',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Exam scheduling, result processing, and certification',
      features: ['Exam Scheduling', 'Result Processing', 'Transcripts', 'Certificates']
    }
  ]

  const activeModuleData = modules.find(module => module.id === activeModule) || modules[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Resource Planning (ERP)</h1>
            <p className="text-xl text-gray-200">
              Integrated management system for seamless university operations and administration.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Users", value: "2,500+", icon: <Users className="w-6 h-6" /> },
            { label: "Departments", value: "24", icon: <Database className="w-6 h-6" /> },
            { label: "Daily Transactions", value: "15,000+", icon: <BarChart className="w-6 h-6" /> },
            { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> }
          ].map((stat, index) => (
            <Card key={index} className="text-center" padding="p-6" hoverable>
              <div className="text-accent mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Modules Sidebar */}
          <div>
            <Card title="ERP Modules" padding="p-6">
              <div className="space-y-2">
                {modules.map(module => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left px-4 py-4 rounded-lg transition-colors ${
                      activeModule === module.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeModule === module.id ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        {module.icon}
                      </div>
                      <div>
                        <div className="font-medium">{module.title}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="mt-6" padding="p-6">
              <h3 className="font-bold text-primary mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/admin/erp-sop" className="flex items-center text-gray-700 hover:text-accent">
                  <Settings className="w-4 h-4 mr-3" />
                  <span>ERP SOP Documents</span>
                </Link>
                <a href="#" className="flex items-center text-gray-700 hover:text-accent">
                  <Download className="w-4 h-4 mr-3" />
                  <span>User Manuals</span>
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-accent">
                  <Shield className="w-4 h-4 mr-3" />
                  <span>Security Guidelines</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {activeModuleData.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{activeModuleData.title}</h2>
                    <p className="text-gray-600">{activeModuleData.description}</p>
                  </div>
                </div>
                <Button variant="primary">
                  Access Module
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activeModuleData.features.map((feature, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Module Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Streamlined processes and workflows
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Real-time data and analytics
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Enhanced decision-making capabilities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access Requirements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Authorized university credentials
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Role-based access permissions
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        VPN access for remote connection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Training & Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-gradient-to-br from-primary to-primary-light text-white" padding="p-6">
                <h3 className="text-lg font-bold mb-4">Training Sessions</h3>
                <p className="text-primary-light mb-4">
                  Join our weekly ERP training sessions for staff and faculty.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span>Basic ERP Navigation</span>
                    <span className="text-sm">Every Monday</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span>Advanced Reporting</span>
                    <span className="text-sm">Every Wednesday</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-4 bg-white text-primary hover:bg-gray-100">
                  Register for Training
                </Button>
              </Card>

              <Card padding="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Support & Helpdesk</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-medium">ERP Helpdesk</div>
                      <div className="text-sm text-gray-600">+1 (555) 123-4567 Ext. 901</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-medium">Email Support</div>
                      <div className="text-sm text-gray-600">erp-support@university.edu</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Submit Support Ticket
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* System Status */}
        <Card className="mt-12" padding="p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { status: "Operational", system: "Core ERP", uptime: "99.9%", color: "bg-green-100 text-green-800" },
              { status: "Operational", system: "Student Portal", uptime: "99.8%", color: "bg-green-100 text-green-800" },
              { status: "Maintenance", system: "Finance Module", uptime: "Scheduled", color: "bg-yellow-100 text-yellow-800" },
              { status: "Operational", system: "HR Module", uptime: "99.7%", color: "bg-green-100 text-green-800" },
              { status: "Operational", system: "Examination System", uptime: "99.9%", color: "bg-green-100 text-green-800" },
              { status: "Operational", system: "Library Integration", uptime: "99.6%", color: "bg-green-100 text-green-800" }
            ].map((sys, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">{sys.system}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${sys.color}`}>
                    {sys.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">Uptime: {sys.uptime}</div>
                <div className="mt-3">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        sys.status === "Operational" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                      style={{ width: sys.status === "Operational" ? "99%" : "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ERP;