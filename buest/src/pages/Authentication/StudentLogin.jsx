import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, User, Eye, EyeOff, BookOpen, GraduationCap } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Student login attempt:', formData)
    setIsLoading(false)
    // In real app, would redirect to student dashboard
  }

  const quickAccess = [
    { title: "Course Registration", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
    { title: "Grade Portal", icon: GraduationCap, color: "bg-green-100 text-green-600" },
    { title: "Library Access", icon: BookOpen, color: "bg-purple-100 text-purple-600" },
    { title: "Fee Payment", icon: Lock, color: "bg-orange-100 text-orange-600" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-primary mb-4">Student Portal</h2>
              <p className="text-gray-700 text-lg mb-6">
                Access your courses, grades, assignments, and all academic resources in one place.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Academic Excellence</h3>
                  <p className="text-gray-600">Track your progress and achieve your goals</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickAccess.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">Access student services</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">New Student?</h3>
              <p className="text-gray-700 mb-4">
                First time logging in? Use your student ID and temporary password provided during admission.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <User className="w-4 h-4 mr-3" />
                  <span>Student ID Format: 2024XXXXX</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Lock className="w-4 h-4 mr-3" />
                  <span>Temporary password: Date of Birth (DDMMYYYY)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md" padding="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-2">Student Login</h1>
                <p className="text-gray-600">Sign in to access your student dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Student ID"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Enter your student ID"
                  startIcon={<User className="w-5 h-5" />}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                      required
                    />
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-accent hover:text-accent-dark">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isLoading}
                  className="py-3"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  New student?{' '}
                  <Link to="/admissions" className="text-accent hover:text-accent-dark font-semibold">
                    Check admission status
                  </Link>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-center text-sm text-gray-600 mb-4">Quick Access Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/notices/notice-board"
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Notice Board
                  </Link>
                  <Link
                    to="/activity-updates"
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Events
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="text-sm text-yellow-800">
                    <strong>Important:</strong> Change your temporary password after first login.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin