import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Dropdown = ({ title, items, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const renderSubItems = (subItems) => {
    if (!subItems || subItems.length === 0) return null
    
    return (
      <div className="absolute left-full top-0 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
        {subItems.map((subItem, idx) => (
          <Link
            key={idx}
            to={subItem.path}
            className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1 ${
          isOpen
            ? 'bg-accent text-white'
            : isScrolled
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
                {item.subItems && (
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                )}
              </Link>
              {item.subItems && renderSubItems(item.subItems)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown