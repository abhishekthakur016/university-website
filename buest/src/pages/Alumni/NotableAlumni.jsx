import { useState } from 'react'
import { Award, Briefcase, Globe, GraduationCap, Filter } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const NotableAlumni = () => {
  const [selectedField, setSelectedField] = useState('all')
  const [selectedBatch, setSelectedBatch] = useState('all')

  const fields = ['all', 'Technology', 'Medicine', 'Business', 'Academia', 'Arts', 'Public Service', 'Research']
  const batches = ['all', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

  const notableAlumni = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      batch: "2005",
      field: "Medicine",
      position: "Chief Medical Officer",
      organization: "Global Health Solutions",
      achievement: "Pioneered AI diagnostics platform used in 50+ countries",
      awards: ["Nobel Prize Nominee", "Medical Innovation Award 2023"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      batch: "2010",
      field: "Technology",
      position: "Tech Entrepreneur",
      organization: "InnovateTech Inc.",
      achievement: "Founded unicorn startup valued at $2.5 billion",
      awards: ["Forbes 30 Under 30", "Tech Innovator of the Year"]
    },
    {
      id: 3,
      name: "Priya Patel",
      batch: "2015",
      field: "Research",
      position: "Research Director",
      organization: "MIT Media Lab",
      achievement: "Led breakthrough research in quantum computing",
      awards: ["Nobel Prize Nominee", "Breakthrough Prize Winner"]
    },
    {
      id: 4,
      name: "James Wilson",
      batch: "1995",
      field: "Business",
      position: "CEO",
      organization: "Global Finance Group",
      achievement: "Transformed company into Fortune 500 leader",
      awards: ["Business Leader of the Year", "Global CEO Award"]
    },
    {
      id: 5,
      name: "Dr. Kenji Tanaka",
      batch: "2000",
      field: "Academia",
      position: "University President",
      organization: "Tokyo University",
      achievement: "Authored 100+ research papers in AI ethics",
      awards: ["Lifetime Achievement Award", "Education Excellence Award"]
    },
    {
      id: 6,
      name: "Maria Garcia",
      batch: "2008",
      field: "Public Service",
      position: "UN Ambassador",
      organization: "United Nations",
      achievement: "Led global peacekeeping initiatives in conflict zones",
      awards: ["Peace Prize", "Humanitarian Award"]
    },
    {
      id: 7,
      name: "Alex Johnson",
      batch: "2012",
      field: "Arts",
      position: "Award-winning Director",
      organization: "International Film Studio",
      achievement: "Directed Oscar-winning documentary on climate change",
      awards: ["Academy Award", "Cannes Film Festival Winner"]
    },
    {
      id: 8,
      name: "David Kim",
      batch: "2018",
      field: "Technology",
      position: "AI Research Lead",
      organization: "Google DeepMind",
      achievement: "Developed revolutionary language model",
      awards: ["AI Research Excellence", "Young Innovator Award"]
    }
  ]

  const filteredAlumni = notableAlumni.filter(alumni => {
    const matchesField = selectedField === 'all' || alumni.field === selectedField
    const matchesBatch = selectedBatch === 'all' || 
      (selectedBatch === '1970s' && parseInt(alumni.batch) < 1980) ||
      (selectedBatch === '1980s' && parseInt(alumni.batch) >= 1980 && parseInt(alumni.batch) < 1990) ||
      (selectedBatch === '1990s' && parseInt(alumni.batch) >= 1990 && parseInt(alumni.batch) < 2000) ||
      (selectedBatch === '2000s' && parseInt(alumni.batch) >= 2000 && parseInt(alumni.batch) < 2010) ||
      (selectedBatch === '2010s' && parseInt(alumni.batch) >= 2010 && parseInt(alumni.batch) < 2020) ||
      (selectedBatch === '2020s' && parseInt(alumni.batch) >= 2020)
    return matchesField && matchesBatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notable Alumni</h1>
            <p className="text-xl text-gray-200">
              Celebrating our graduates who have made significant contributions to society and their fields.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <Card className="mb-8" padding="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-600" />
              <span className="text-gray-600">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {fields.map(field => (
                  <option key={field} value={field}>
                    {field === 'all' ? 'All Fields' : field}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {batches.map(batch => (
                  <option key={batch} value={batch}>
                    {batch === 'all' ? 'All Batches' : `Batch ${batch}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredAlumni.map(alumni => (
            <Card key={alumni.id} className="hover:shadow-xl transition-shadow" hoverable>
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Batch of {alumni.batch}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {alumni.field}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="font-semibold text-primary mb-1">{alumni.position}</div>
                  <div className="text-gray-700 text-sm">{alumni.organization}</div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{alumni.achievement}</p>
                
                <div className="space-y-2">
                  {alumni.awards.map((award, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Award className="w-4 h-4 text-accent mr-2" />
                      <span className="text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button variant="outline" size="small" className="w-full">
                    View Full Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <Card padding="p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Alumni Impact Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Fortune 500 CEOs", value: "25", icon: <Briefcase className="w-8 h-8" /> },
              { label: "Nobel Laureates", value: "8", icon: <Award className="w-8 h-8" /> },
              { label: "Patent Holders", value: "1,200+", icon: <Globe className="w-8 h-8" /> },
              { label: "Countries Represented", value: "85+", icon: <Globe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-accent mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Hall of Fame */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Hall of Fame</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Robert Smith",
                achievement: "Developed life-saving vaccine",
                year: "1975",
                category: "Medicine"
              },
              {
                name: "Lisa Wang",
                achievement: "Pioneered sustainable energy tech",
                year: "1988",
                category: "Technology"
              },
              {
                name: "Carlos Mendez",
                achievement: "Authored landmark legal reforms",
                year: "1992",
                category: "Public Service"
              },
              {
                name: "Aisha Johnson",
                achievement: "Founded global education nonprofit",
                year: "2005",
                category: "Philanthropy"
              }
            ].map((inductee, index) => (
              <Card key={index} className="text-center" padding="p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{inductee.name}</h3>
                <div className="text-sm text-primary mb-2">{inductee.category} • {inductee.year}</div>
                <p className="text-gray-600 text-sm">{inductee.achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotableAlumni