import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Activity Updates', path: '/activity-updates' },
    { name: 'Notice Board', path: '/notices/notice-board' },
    { name: 'Careers', path: '/admin/careers' },
    { name: 'Alumni Portal', path: '/alumni' },
  ]

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: 'Address: Baddi University of Emerging Sci. & Tech. Makhnumajra, Baddi, Distt. Solan, H.P.-173205' },
    { icon: <Phone className="w-5 h-5" />, text: ' 1800-123-0927' },
    { icon: <Mail className="w-5 h-5" />, text: 'https://www.baddiuniv.ac.in/' },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-2 bg-accent rounded-sm"></div>
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#ff7900]   font-bold">University Portal</h3>
                <p className="text-gray-300 text-sm">Excellence in Education Since 1950</p>
              </div>
            </div>
            <p className="text-gray-300">
              A premier institution dedicated to academic excellence, research innovation, and holistic development of students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-[#ff7900] font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-[#ff7900]  font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-accent mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-[#ff7900]  font-bold mb-6 ">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} University Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;