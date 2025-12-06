import { useState } from 'react'
import { FileText, Download, Search, Filter, BookOpen, Shield, Users } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const ERPSOP = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'User Manuals',
    'Administration',
    'Finance',
    'Academic',
    'Security',
    'Troubleshooting',
    'Reports'
  ]

  const documents = [
    {
      id: 1,
      title: "ERP User Manual - Basic Navigation",
      category: "User Manuals",
      version: "3.2",
      lastUpdated: "2024-11-15",
      size: "4.2 MB",
      description: "Complete guide for basic ERP navigation and common tasks",
      downloads: 1250
    },
    {
      id: 2,
      title: "Student Management Module SOP",
      category: "Academic",
      version: "2.1",
      lastUpdated: "2024-11-10",
      size: "3.8 MB",
      description: "Standard operating procedures for student data management",
      downloads: 890
    },
    {
      id: 3,
      title: "Financial Transactions Guide",
      category: "Finance",
      version: "4.0",
      lastUpdated: "2024-11-05",
      size: "5.1 MB",
      description: "Procedures for financial transactions and reporting",
      downloads: 750
    },
    {
      id: 4,
      title: "Security Protocols Handbook",
      category: "Security",
      version: "3.5",
      lastUpdated: "2024-10-28",
      size: "2.9 MB",
      description: "Security guidelines and access control procedures",
      downloads: 620
    },
    {
      id: 5,
      title: "Administrator Reference Guide",
      category: "Administration",
      version: "3.0",
      lastUpdated: "2024-10-20",
      size: "6.3 MB",
      description: "Comprehensive guide for system administrators",
      downloads: 480
    },
    {
      id: 6,
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      version: "2.8",
      lastUpdated: "2024-10-15",
      size: "2.1 MB",
      description: "Solutions for common ERP system issues",
      downloads: 1120
    },
    {
      id: 7,
      title: "Report Generation Manual",
      category: "Reports",
      version: "3.1",
      lastUpdated: "2024-10-10",
      size: "3.5 MB",
      description: "Guide to generating and interpreting reports",
      downloads: 540
    },
    {
      id: 8,
      title: "Data Backup Procedures",
      category: "Administration",
      version: "2.5",
      lastUpdated: "2024-10-05",
      size: "1.8 MB",
      description: "Standard procedures for data backup and recovery",
      downloads: 390
    }
  ]

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP Standard Operating Procedures</h1>
            <p className="text-xl text-gray-200">
              Comprehensive documentation and guidelines for University ERP system usage.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <Card className="mb-8" padding="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDocs.map(doc => (
            <Card key={doc.id} className="hover:shadow-xl transition-shadow" hoverable>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                        {doc.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">{doc.title}</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-sm">
                    <div className="text-gray-500">Version</div>
                    <div className="font-semibold">{doc.version}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Size</div>
                    <div className="font-semibold">{doc.size}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Updated</div>
                    <div className="font-semibold">
                      {new Date(doc.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Downloads</div>
                    <div className="font-semibold">{doc.downloads}</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="small" className="flex-1">
                    Preview
                  </Button>
                  <Button variant="primary" size="small" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Guidelines */}
        <Card className="mb-8" padding="p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Important Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600 text-sm">
                Never share your login credentials. Always log out after session.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600 text-sm">
                Always refer to latest version of SOP documents for current procedures.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Training Required</h3>
              <p className="text-gray-600 text-sm">
                Complete training before accessing sensitive modules.
              </p>
            </div>
          </div>
        </Card>

        {/* Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary to-primary-light text-white" padding="p-8">
            <h3 className="text-xl font-bold mb-4">Need Training?</h3>
            <p className="text-primary-light mb-6">
              Register for our ERP training sessions conducted weekly.
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              View Training Schedule
            </Button>
          </Card>
          
          <Card padding="p-8">
            <h3 className="text-xl font-bold text-primary mb-4">Technical Support</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-medium">ERP Helpdesk</div>
                  <div className="text-sm text-gray-600">+1 (555) 123-4567 Ext. 902</div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.828 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-medium">Email Support</div>
                  <div className="text-sm text-gray-600">erp-support@university.edu</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ERPSOP;