import { useState } from 'react'
import { Briefcase, Calendar, MapPin, DollarSign, Clock, Filter } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const departments = [
    'all',
    'Academic',
    'Administration',
    'Research',
    'Technical',
    'Support',
    'Management'
  ]

  const jobTypes = [
    'all',
    'Full-time',
    'Part-time',
    'Contract',
    'Internship',
    'Temporary'
  ]

  const jobOpenings = [
    {
      id: 1,
      title: "Assistant Professor - Computer Science",
      department: "Academic",
      type: "Full-time",
      location: "Main Campus",
      salary: "$65,000 - $85,000",
      posted: "2024-11-28",
      deadline: "2024-12-31",
      experience: "3+ years",
      description: "Teaching undergraduate and graduate courses in Computer Science, conducting research, and supervising students."
    },
    {
      id: 2,
      title: "Research Associate - AI Lab",
      department: "Research",
      type: "Contract",
      location: "Research Center",
      salary: "$55,000 - $70,000",
      posted: "2024-11-25",
      deadline: "2024-12-20",
      experience: "2+ years",
      description: "Work on cutting-edge AI research projects and collaborate with industry partners."
    },
    {
      id: 3,
      title: "System Administrator",
      department: "Technical",
      type: "Full-time",
      location: "IT Department",
      salary: "$50,000 - $65,000",
      posted: "2024-11-22",
      deadline: "2024-12-15",
      experience: "4+ years",
      description: "Manage university's IT infrastructure, servers, and network systems."
    },
    {
      id: 4,
      title: "Student Counselor",
      department: "Support",
      type: "Full-time",
      location: "Student Affairs",
      salary: "$45,000 - $55,000",
      posted: "2024-11-20",
      deadline: "2024-12-10",
      experience: "2+ years",
      description: "Provide counseling and support services to students."
    },
    {
      id: 5,
      title: "Library Assistant",
      department: "Support",
      type: "Part-time",
      location: "University Library",
      salary: "$20 - $25/hour",
      posted: "2024-11-18",
      deadline: "2024-12-05",
      experience: "1+ years",
      description: "Assist in library operations and help students with resources."
    },
    {
      id: 6,
      title: "Marketing Intern",
      department: "Administration",
      type: "Internship",
      location: "Marketing Department",
      salary: "Stipend Provided",
      posted: "2024-11-15",
      deadline: "2024-12-01",
      experience: "Fresher",
      description: "Assist in university marketing campaigns and digital presence."
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesType = selectedType === 'all' || job.type === selectedType
    return matchesSearch && matchesDepartment && matchesType
  })

  const featuredJob = jobOpenings[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl text-gray-200">
              Join our team of dedicated professionals and contribute to academic excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Job */}
        <Card className="mb-12 border-primary/20 bg-primary/5" padding="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold">
                Featured Position
              </span>
              <h2 className="text-2xl font-bold text-primary mt-4">{featuredJob.title}</h2>
            </div>
            <Button variant="primary" size="large">
              Apply Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-gray-600">Department</div>
                <div className="font-semibold">{featuredJob.department}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-semibold">{featuredJob.location}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-gray-600">Salary</div>
                <div className="font-semibold">{featuredJob.salary}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-gray-600">Apply By</div>
                <div className="font-semibold">
                  {new Date(featuredJob.deadline).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">{featuredJob.description}</p>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8" padding="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search job titles or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            
            <div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredJobs.map(job => (
            <Card key={job.id} className="hover:shadow-xl transition-shadow" hoverable>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{job.salary}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.experience} experience</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Apply by: {new Date(job.deadline).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="small">
                      View Details
                    </Button>
                    <Button variant="primary" size="small">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card title="Application Process" padding="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Find Position",
                description: "Browse available positions and find one that matches your skills"
              },
              {
                step: "02",
                title: "Prepare Documents",
                description: "Update your resume and gather required documents"
              },
              {
                step: "03",
                title: "Submit Application",
                description: "Complete online application form and upload documents"
              },
              {
                step: "04",
                title: "Interview Process",
                description: "Selected candidates will be contacted for interviews"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Benefits Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Competitive Compensation",
                description: "Attractive salary packages with comprehensive benefits"
              },
              {
                title: "Professional Growth",
                description: "Opportunities for continuous learning and career advancement"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working hours and generous leave policies"
              },
              {
                title: "State-of-the-art Facilities",
                description: "Modern infrastructure and research facilities"
              },
              {
                title: "Inclusive Environment",
                description: "Diverse and inclusive workplace culture"
              },
              {
                title: "Impactful Work",
                description: "Contribute to shaping future generations"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center" padding="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
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

export default Careers;