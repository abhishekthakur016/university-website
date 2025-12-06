import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Award, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import slider1 from "../assets/images/slider1.webp";
import slider2 from "../assets/images/slider2.webp";
import slider3 from "../assets/images/slider3.webp";
import slider4 from "../assets/images/slider4.webp";
import slider5 from "../assets/images/slider5.webp";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "BADDI UNIVERSITY",
      description: "A private University with 100% placement in Himachal pradesh (INDIA).",
      image:slider1 ,
      buttonText: "Explore Campus",
      buttonLink: "/gallery"
    },
    {
      title: "Shape Your Future With Us",
      description: "Join our diverse community of learners and innovators. Discover programs that match your passion and ambition.",
      image:slider2,
      buttonText: "View Programs",
      buttonLink: "/activity-updates"
    },
    {
      title: "World-Class Research Facilities",
      description: "State-of-the-art laboratories and research centers fostering innovation and groundbreaking discoveries.",
      image:slider3,
      buttonText: "Research Centers",
      buttonLink: "/admin/careers"
    },
       {
      title: "World-Class Research Facilities",
      description: "State-of-the-art laboratories and research centers fostering innovation and groundbreaking discoveries.",
      image:slider4,
      buttonText: "Research Centers",
      buttonLink: "/admin/careers"
    },
    {
      title: "World-Class Research Facilities",
      description: "State-of-the-art laboratories and research centers fostering innovation and groundbreaking discoveries.",
      image:slider5,
      buttonText: "Research Centers",
      buttonLink: "/admin/careers"
    },
    {
      title: "World-Class Research Facilities",
      description: "State-of-the-art laboratories and research centers fostering innovation and groundbreaking discoveries.",
      image: " https://imgs.search.brave.com/KMWcA-XFDyvkq3lWu3Q3vhSvLzGFmnGcoCRoM276Dr0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFkZGl1bml2LmFj/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE0LzEwL0FwcGx5/LU5vdy1CdG4tMy5w/bmc ",
      buttonText: "Research Centers",
      buttonLink: "/admin/careers"
    }
    
  ]

  const stats = [
    { number: "25,000+", label: "Students Enrolled", icon: <Users className="w-8 h-8" /> },
    { number: "150+", label: "Academic Programs", icon: <BookOpen className="w-8 h-8" /> },
    { number: "1,200+", label: "Faculty Members", icon: <Award className="w-8 h-8" /> },
    { number: "85+", label: "Years of Excellence", icon: <Calendar className="w-8 h-8" /> }
  ]

 const upcomingEvents = [
  { id: 1, title: "Annual Convocation 2024", date: "2024-12-15", time: "10:00 AM", location: "Main Auditorium" },
  { id: 2, title: "International Conference on AI", date: "2024-12-18", time: "9:00 AM", location: "Tech Center" },
  { id: 3, title: "Cultural Fest - Prabandhotsav", date: "2024-12-20", time: "4:00 PM", location: "Sports Complex" },
  { id: 4, title: "Alumni Meet 2024", date: "2024-12-22", time: "11:00 AM", location: "Alumni Center" },
  { id: 5, title: "Meet me in 2024", date: "2026-1-1", time: "11:00 AM", location: "Alumni Center" }
];


  const newsUpdates = [
    { id: 1, title: "New Computer Science Department Inaugurated", date: "2024-11-28", category: "Academic" },
    { id: 2, title: "University Ranks 5th in National Rankings", date: "2024-11-25", category: "Achievement" },
    { id: 3, title: "Scholarship Applications Open for 2025", date: "2024-11-22", category: "Opportunity" },
    { id: 4, title: "Research Grant Awarded for Climate Study", date: "2024-11-20", category: "Research" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="space-y-20">
      {/* Hero Section with Auto Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-1000 ${
              index === currentSlide ? 'opacity-300' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
<div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/40"></div>
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-300">
                    {slide.description}
                  </p>
                  <Link to={slide.buttonLink} className="inline-block">
                    <Button variant="primary" size="large" className="animate-fade-in animation-delay-500">
                      {slide.buttonText}
                      <ArrowRight className="ml-2 w-5 h-5 inline" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl "
                padding="p-8"
                hoverable
              >
                <div className="text-accent mb-4 flex justify-center">
                  {stat.icon}
                </div>  
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-gray-50 " >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary p-8 mb-4">
              Quick Access Portal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto ">
              Access essential university services and information with just one click
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-7">
            <Link to="/student-login">
              <Card className="text-center hover:border-accent transition-colors" hoverable>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Student Portal</h3>
                <p className="text-gray-600">Access courses, grades, and academic resources</p>
              </Card>
            </Link>

            <Link to="/faculty-login">
              <Card className="text-center hover:border-accent transition-colors" hoverable>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Faculty Portal</h3>
                <p className="text-gray-600">Teaching resources, research tools, and administration</p>
              </Card>
            </Link>

            <Link to="/notices/notice-board">
              <Card className="text-center hover:border-accent transition-colors" hoverable>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Notice Board</h3>
                <p className="text-gray-600">Latest announcements and official notifications</p>
              </Card>
            </Link>

            <Link to="/alumni">
              <Card className="text-center hover:border-accent transition-colors" hoverable>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Alumni Network</h3>
                <p className="text-gray-600">Connect with graduates and career opportunities</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events & News */}
      <section className="section-padding ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <div className="flex justify-between  items-center mb-8">
                <h2 className="text-3xl mx-6 font-bold text-white">Upcoming Events</h2>
                <Link to="/activity-updates" className="text-accent hover:text-accent-dark font-semibold flex items-center">
                  View All <ArrowRight className="mr-10 w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4  m-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow" hoverable padding="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span>{event.time}</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="small">
                        Register
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white mr-6">Latest News</h2>
                <Link to="/notices/notice-board" className="text-accent hover:text-accent-dark font-semibold flex items-center mr-20">
                  View All <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4 mr-20">
                {newsUpdates.map((news) => (
                  <Card key={news.id} className="hover:shadow-lg transition-shadow" hoverable padding="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                          {news.category}
                        </span>
                        <h3 className="text-lg font-bold text-primary mb-2">{news.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {new Date(news.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary p-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our community of innovators, thinkers, and leaders shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="large" className="bg-blue-300 text-primary hover:bg-gray-100">
                Contact Admissions
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
                Virtual Campus Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home