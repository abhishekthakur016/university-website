import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  isScrolled,
  eventsItems,
  noticesItems,
  adminItems,
  alumniItems 
}) => {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const renderDropdownItems = (items) => {
    return items.map((item, idx) => (
      <div key={idx} className="ml-4">
        <Link
          to={item.path}
          className="block py-3 px-4 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-colors"
          onClick={onClose}
        >
          {item.name}
        </Link>
        {item.subItems && openSections[`${item.name}-${idx}`] && (
          <div className="ml-4">
            {item.subItems.map((subItem, subIdx) => (
              <Link
                key={subIdx}
                to={subItem.path}
                className="block py-2 px-4 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                onClick={onClose}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
        {item.subItems && (
          <button
            onClick={() => toggleSection(`${item.name}-${idx}`)}
            className="ml-4 mt-2 flex items-center text-sm text-accent hover:text-accent-dark"
          >
            {openSections[`${item.name}-${idx}`] ? 'Show Less' : 'Show More'}
            {openSections[`${item.name}-${idx}`] ? (
              <ChevronDown className="w-4 h-4 ml-1" />
            ) : (
              <ChevronRight className="w-4 h-4 ml-1" />
            )}
          </button>
        )}
      </div>
    ))
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto lg:hidden animate-slide-down">
        <div className="container mx-auto px-4 py-6">
          {/* Main Links */}
          <div className="space-y-2">
            <Link
              to="/"
              className="block py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            
            <Link
              to="/gallery"
              className="block py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Gallery
            </Link>
            
            <Link
              to="/activity-updates"
              className="block py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Activity & Updates
            </Link>
            
            {/* Events Dropdown */}
            <div className="border-t border-gray-100 pt-4">
              <button
                onClick={() => toggleSection('events')}
                className="w-full flex items-center justify-between py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <span>Events</span>
                {openSections.events ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              {openSections.events && (
                <div className="bg-gray-50 rounded-lg mt-2">
                  {renderDropdownItems(eventsItems)}
                </div>
              )}
            </div>
            
            {/* Notices Dropdown */}
            <div>
              <button
                onClick={() => toggleSection('notices')}
                className="w-full flex items-center justify-between py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <span>Notices</span>
                {openSections.notices ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              {openSections.notices && (
                <div className="bg-gray-50 rounded-lg mt-2">
                  {renderDropdownItems(noticesItems)}
                </div>
              )}
            </div>
            
            {/* Admin Dropdown */}
            <div>
              <button
                onClick={() => toggleSection('admin')}
                className="w-full flex items-center justify-between py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <span>Admin</span>
                {openSections.admin ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              {openSections.admin && (
                <div className="bg-gray-50 rounded-lg mt-2">
                  {renderDropdownItems(adminItems)}
                </div>
              )}
            </div>
            
            {/* Alumni Dropdown */}
            <div>
              <button
                onClick={() => toggleSection('alumni')}
                className="w-full flex items-center justify-between py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <span>Alumni</span>
                {openSections.alumni ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              {openSections.alumni && (
                <div className="bg-gray-50 rounded-lg mt-2">
                  {renderDropdownItems(alumniItems)}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="block py-4 px-6 text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
          
          {/* Login Buttons */}
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/student-login"
                className="btn-primary text-center py-3"
                onClick={onClose}
              >
                Student Login
              </Link>
              <Link
                to="/faculty-login"
                className="btn-secondary text-center py-3"
                onClick={onClose}
              >
                Faculty Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu