import { useState } from 'react'
import { AlertCircle, FileText, Upload, CheckCircle } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const OnlineGrievance = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    
    // Grievance Details
    title: '',
    category: '',
    priority: 'medium',
    description: '',
    
    // Supporting Documents
    attachments: [],
    
    // Additional Information
    previousComplaint: false,
    previousComplaintId: '',
    preferredContact: 'email'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = [
    'Academic Issues',
    'Examination Related',
    'Faculty Related',
    'Infrastructure',
    'Administrative',
    'Hostel Facilities',
    'Library Services',
    'Financial Matters',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }))
  }

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full" padding="p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Grievance Submitted!</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="font-bold text-gray-900 mb-2">Grievance ID: GRV-2024-{Math.floor(Math.random() * 10000)}</div>
              <div className="text-sm text-gray-600">
                Please note this ID for future reference
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Your grievance has been successfully submitted. You will receive an acknowledgement 
              email shortly. Our team will review your grievance and get back to you within 3-5 working days.
            </p>
            <div className="space-y-3">
              <Button variant="primary" className="w-full" onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  studentId: '',
                  department: '',
                  title: '',
                  category: '',
                  priority: 'medium',
                  description: '',
                  attachments: [],
                  previousComplaint: false,
                  previousComplaintId: '',
                  preferredContact: 'email'
                })
              }}>
                Submit Another Grievance
              </Button>
              <Button variant="outline" className="w-full">
                Track Status
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Grievance Portal</h1>
            <p className="text-xl text-gray-200">
              Submit your grievances online for prompt resolution and tracking.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card padding="p-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-primary mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-primary">Submit a Grievance</h2>
                <p className="text-gray-600">Fill out the form below to submit your grievance</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                  <Input
                    label="Student ID (if applicable)"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="2024XXXXX"
                  />
                  <div className="md:col-span-2">
                    <Input
                      label="Department/Program"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Computer Science Department"
                    />
                  </div>
                </div>
              </div>

              {/* Grievance Details */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Grievance Details</h3>
                <div className="space-y-6">
                  <Input
                    label="Grievance Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Brief title describing your grievance"
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority Level
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      placeholder="Please provide detailed description of your grievance including dates, people involved, and specific issues..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Supporting Documents */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Supporting Documents</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Upload supporting documents (photos, PDFs, documents)
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light cursor-pointer transition-colors"
                  >
                    Choose Files
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Maximum file size: 10MB per file
                  </p>
                </div>
                
                {formData.attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Selected Files:</h4>
                    <div className="space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">{file.name}</div>
                              <div className="text-sm text-gray-600">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="previousComplaint"
                      checked={formData.previousComplaint}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      id="previous-complaint"
                    />
                    <label htmlFor="previous-complaint" className="ml-2 text-gray-700">
                      This is a follow-up to a previous complaint
                    </label>
                  </div>
                  
                  {formData.previousComplaint && (
                    <Input
                      label="Previous Complaint ID"
                      name="previousComplaintId"
                      value={formData.previousComplaintId}
                      onChange={handleChange}
                      placeholder="GRV-2024-XXXX"
                    />
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-4">
                      {['email', 'phone', 'both'].map(method => (
                        <label key={method} className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <span className="ml-2 text-gray-700 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that the information provided is accurate and understand that 
                      submitting false information may lead to disciplinary action.
                    </span>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    * Required fields
                  </div>
                  <Button type="submit" variant="primary" size="large">
                    Submit Grievance
                  </Button>
                </div>
              </div>
            </form>
          </Card>

          {/* Important Information */}
          <Card className="mt-8" padding="p-6">
            <h3 className="text-lg font-bold text-primary mb-4">Important Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Processing Time</div>
                  <div className="text-sm text-gray-600">
                    Grievances are typically addressed within 3-5 working days
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Confidentiality</div>
                  <div className="text-sm text-gray-600">
                    All grievances are treated with strict confidentiality
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Follow-up</div>
                  <div className="text-sm text-gray-600">
                    Use your Grievance ID to track status or provide additional information
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default OnlineGrievance