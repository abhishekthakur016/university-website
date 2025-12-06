import { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }
  return context
}

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('light')

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('university_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Save user to localStorage when changed
  useEffect(() => {
    if (user) {
      localStorage.setItem('university_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('university_user')
    }
  }, [user])

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
    setNotifications([])
  }

  const addNotification = (notification) => {
    setNotifications(prev => [
      {
        id: Date.now(),
        ...notification,
        read: false,
        timestamp: new Date().toISOString(),
      },
      ...prev
    ])
  }

  const markNotificationAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  const clearNotifications = () => {
    setNotifications([])
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const contextValue = {
    user,
    login,
    logout,
    notifications,
    addNotification,
    markNotificationAsRead,
    clearNotifications,
    loading,
    setLoading,
    theme,
    toggleTheme,
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}