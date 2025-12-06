import { api } from './api'

export const grievanceService = {
  // Submit a new grievance
  submitGrievance: async (grievanceData) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances`, {
        method: 'POST',
        headers: api.getHeaders(),
        body: JSON.stringify(grievanceData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit grievance')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error submitting grievance:', error)
      throw error
    }
  },

  // Get all grievances for a user
  getUserGrievances: async (userId) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/user/${userId}`, {
        headers: api.getHeaders(),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch grievances')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching grievances:', error)
      throw error
    }
  },

  // Get grievance by ID
  getGrievanceById: async (grievanceId) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/${grievanceId}`, {
        headers: api.getHeaders(),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch grievance details')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching grievance:', error)
      throw error
    }
  },

  // Update grievance status
  updateGrievanceStatus: async (grievanceId, status, remarks) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/${grievanceId}/status`, {
        method: 'PUT',
        headers: api.getHeaders(),
        body: JSON.stringify({ status, remarks }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to update grievance status')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error updating grievance:', error)
      throw error
    }
  },

  // Add comment to grievance
  addComment: async (grievanceId, comment) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/${grievanceId}/comments`, {
        method: 'POST',
        headers: api.getHeaders(),
        body: JSON.stringify({ comment }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to add comment')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error adding comment:', error)
      throw error
    }
  },

  // Upload attachment for grievance
  uploadAttachment: async (grievanceId, file) => {
    try {
      const formData = new FormData()
      formData.append('attachment', file)
      
      const headers = api.getHeaders()
      delete headers['Content-Type']
      
      const response = await fetch(`${api.API_BASE_URL}/grievances/${grievanceId}/attachments`, {
        method: 'POST',
        headers,
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Failed to upload attachment')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error uploading attachment:', error)
      throw error
    }
  },

  // Get grievance categories
  getCategories: async () => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/categories`, {
        headers: api.getHeaders(),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  },

  // Get grievance statistics
  getStatistics: async () => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/grievances/statistics`, {
        headers: api.getHeaders(),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch statistics')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching statistics:', error)
      throw error
    }
  },

  // Search grievances
  searchGrievances: async (searchParams) => {
    try {
      const queryParams = new URLSearchParams(searchParams).toString()
      const response = await fetch(`${api.API_BASE_URL}/grievances/search?${queryParams}`, {
        headers: api.getHeaders(),
      })
      
      if (!response.ok) {
        throw new Error('Failed to search grievances')
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error searching grievances:', error)
      throw error
    }
  },
}