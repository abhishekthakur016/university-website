const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.university.edu/v1'

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Something went wrong')
  }
  return response.json()
}

const getHeaders = (includeAuth = true) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  if (includeAuth) {
    const token = localStorage.getItem('auth_token')
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }
  
  return headers
}

export const api = {
  // Authentication
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(credentials),
    })
    return handleResponse(response)
  },

  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  // Notices
  getNotices: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/notices?${queryParams}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  createNotice: async (noticeData) => {
    const response = await fetch(`${API_BASE_URL}/notices`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(noticeData),
    })
    return handleResponse(response)
  },

  // Events
  getEvents: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/events?${queryParams}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  getEventById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  // Gallery
  getGalleryImages: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/gallery?${queryParams}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  uploadImage: async (formData) => {
    const headers = getHeaders()
    delete headers['Content-Type'] // Let browser set multipart content type
    
    const response = await fetch(`${API_BASE_URL}/gallery/upload`, {
      method: 'POST',
      headers,
      body: formData,
    })
    return handleResponse(response)
  },

  // Alumni
  getAlumni: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/alumni?${queryParams}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  registerAlumni: async (alumniData) => {
    const response = await fetch(`${API_BASE_URL}/alumni/register`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(alumniData),
    })
    return handleResponse(response)
  },

  // Careers
  getCareers: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${API_BASE_URL}/careers?${queryParams}`, {
      headers: getHeaders(),
    })
    return handleResponse(response)
  },

  applyForCareer: async (careerId, applicationData) => {
    const response = await fetch(`${API_BASE_URL}/careers/${careerId}/apply`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(applicationData),
    })
    return handleResponse(response)
  },

  // Utility function for file uploads
  uploadFile: async (file, endpoint) => {
    const formData = new FormData()
    formData.append('file', file)
    
    const headers = getHeaders()
    delete headers['Content-Type']
    
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers,
      body: formData,
    })
    return handleResponse(response)
  },
}