import { useState } from 'react'
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, CheckCircle } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Users } from "lucide-react";


const MembershipForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Academic Information
    studentId: '',
    graduationYear: '',
    program: '',
    department: '',
    
    // Professional Information
    currentPosition: '',
    company: '',
    industry: '',
    workEmail: '',
    
    // Contact Information
    address: '',
    city: '',
    country: '',
    postalCode: '',
    
    // Membership Preferences
    membershipType: 'annual',
    newsletter: true,
    chapterMembership: '',
    volunteerInterest: false,
    
    // Payment Information
    paymentMethod: 'credit-card'
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const membershipTypes = [
    { id: 'annual', name: 'Annual Membership', price: '$50', duration: '1 year' },
    { id: 'lifetime', name: 'Lifetime Membership', price: '$500', duration: 'Lifetime' },
    { id: 'student', name: 'Student Membership', price: '$25', duration: '1 year' }
  ]

  const programs = [
    'Engineering',
    'Science',
    'Business Administration',
    'Arts & Humanities',
    'Medicine',
    'Law',
    'Computer Science',
    'Other'
  ]

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Government',
    'Manufacturing',
    'Consulting',
    'Other'
  ]

  const steps = [
    { number: 1, title: 'Personal Details' },
    { number: 2, title: 'Academic Information' },
    { number: 3, title: 'Professional Details' },
    { number: 4, title: 'Membership Selection' },
    { number: 5, title: 'Review & Submit' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1500)
  }

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter the name"
                startIcon={<User className="w-5 h-5" />}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter the Last Name"
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                startIcon={<Mail className="w-5 h-5" />}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your ph. no"
                startIcon={<Phone className="w-5 h-5" />}
                required
              />
              <Input
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary mb-4">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Student ID"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="2015XXXXX"
                startIcon={<GraduationCap className="w-5 h-5" />}
                required
              />
              <Input
                label="Graduation Year"
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="2015"
                min="1950"
                max="2025"
                required
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program/Degree
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                >
                  <option value="">Select your program</option>
                  {programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
              <Input
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Computer Science"
                required
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Current Position"
                name="currentPosition"
                value={formData.currentPosition}
                onChange={handleChange}
                placeholder="Software Engineer"
                startIcon={<Briefcase className="w-5 h-5" />}
              />
              <Input
                label="Company/Organization"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Tech Solutions Inc."
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <Input
                label="Work Email"
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary mb-4">Membership Selection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {membershipTypes.map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, membershipType: type.id }))}
                  className={`p-6 border-2 rounded-xl text-left transition-all ${
                    formData.membershipType === type.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    {formData.membershipType === type.id && (
                      <CheckCircle className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                  <div className="text-2xl font-bold text-primary mb-2">{type.price}</div>
                  <div className="text-sm text-gray-600">{type.duration}</div>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Chapter Membership
                </label>
                <select
                  name="chapterMembership"
                  value={formData.chapterMembership}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Select chapter (optional)</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia-pacific">Asia Pacific</option>
                  <option value="middle-east">Middle East</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-700">Subscribe to alumni newsletter</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="volunteerInterest"
                    checked={formData.volunteerInterest}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-700">Interested in volunteer opportunities</span>
                </label>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary mb-4">Review Your Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Personal Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Name</div>
                      <div className="font-medium">{formData.firstName} {formData.lastName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-medium">{formData.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Phone</div>
                      <div className="font-medium">{formData.phone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Graduation Year</div>
                      <div className="font-medium">{formData.graduationYear}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Membership Details</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        {membershipTypes.find(t => t.id === formData.membershipType)?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {membershipTypes.find(t => t.id === formData.membershipType)?.duration}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {membershipTypes.find(t => t.id === formData.membershipType)?.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="text-sm text-yellow-800">
                    <strong>Important:</strong> Please review all information before submitting. 
                    You will receive a confirmation email within 24 hours.
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1 mr-2"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I confirm that the information provided is accurate and agree to the 
                    Alumni Association terms and conditions.
                  </span>
                </label>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full" padding="p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying for alumni membership. Your application has been received 
              and is being processed. You will receive a confirmation email within 24 hours.
            </p>
            <div className="space-y-3">
              <Button variant="primary" className="w-full" onClick={() => {
                setIsSubmitted(false)
                setCurrentStep(1)
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  dateOfBirth: '',
                  gender: '',
                  studentId: '',
                  graduationYear: '',
                  program: '',
                  department: '',
                  currentPosition: '',
                  company: '',
                  industry: '',
                  workEmail: '',
                  address: '',
                  city: '',
                  country: '',
                  postalCode: '',
                  membershipType: 'annual',
                  newsletter: true,
                  chapterMembership: '',
                  volunteerInterest: false,
                  paymentMethod: 'credit-card'
                })
              }}>
                Submit Another Application
              </Button>
              <Button variant="outline" className="w-full">
                Return to Alumni Portal
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
      <div className="bg-gradient-to-r from-primary to-primary-light text-white  py-[10rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Alumni Membership Form</h1>
            <p className="text-xl text-gray-200">
              Join our global alumni network and enjoy exclusive benefits, connections, and opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto" padding="p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.number
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className="text-sm text-gray-600">Step {step.number}</div>
                    <div className="font-medium">{step.title}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 w-12 mx-4 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < steps.length ? (
                  <Button type="button" variant="primary" onClick={nextStep}>
                    Continue
                  </Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Card>

        {/* Benefits Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Networking Opportunities",
                description: "Connect with alumni worldwide",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Career Services",
                description: "Job board and career counseling",
                icon: <Briefcase className="w-8 h-8" />
              },
              {
                title: "Continued Learning",
                description: "Access to library and courses",
                icon: <GraduationCap className="w-8 h-8" />
              },
              {
                title: "Exclusive Events",
                description: "Invitations to alumni gatherings",
                icon: <Calendar className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center" padding="p-6">
                <div className="text-accent mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-primary mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipForm