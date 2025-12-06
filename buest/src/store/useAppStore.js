import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAppStore = create(
  persist(
    (set, get) => ({
      // User state
      user: null,
      isAuthenticated: false,
      userType: null, // 'student', 'faculty', 'admin'
      
      // Notices state
      notices: [],
      filteredNotices: [],
      
      // Events state
      events: [],
      upcomingEvents: [],
      
      // Gallery state
      galleryImages: [],
      selectedImage: null,
      lightboxOpen: false,
      
      // Alumni state
      alumniList: [],
      notableAlumni: [],
      
      // Grievances state
      grievances: [],
      
      // UI state
      isLoading: false,
      error: null,
      theme: 'light',
      sidebarOpen: false,
      modalOpen: false,
      modalContent: null,
      
      // Actions
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user,
        userType: user?.role || null
      }),
      
      logout: () => set({ 
        user: null, 
        isAuthenticated: false,
        userType: null
      }),
      
      setNotices: (notices) => set({ 
        notices,
        filteredNotices: notices 
      }),
      
      filterNotices: (category) => {
        const { notices } = get()
        if (category === 'all') {
          set({ filteredNotices: notices })
        } else {
          set({ 
            filteredNotices: notices.filter(notice => 
              notice.category === category
            ) 
          })
        }
      },
      
      addNotice: (notice) => set(state => ({
        notices: [notice, ...state.notices],
        filteredNotices: [notice, ...state.filteredNotices]
      })),
      
      setEvents: (events) => set({ 
        events,
        upcomingEvents: events.filter(event => 
          new Date(event.date) > new Date()
        ).sort((a, b) => new Date(a.date) - new Date(b.date))
      }),
      
      setGalleryImages: (images) => set({ galleryImages: images }),
      
      setSelectedImage: (image) => set({ selectedImage: image }),
      
      toggleLightbox: (open) => set({ lightboxOpen: open }),
      
      setAlumniList: (alumni) => set({ alumniList: alumni }),
      
      setNotableAlumni: (alumni) => set({ notableAlumni: alumni }),
      
      setGrievances: (grievances) => set({ grievances }),
      
      addGrievance: (grievance) => set(state => ({
        grievances: [grievance, ...state.grievances]
      })),
      
      updateGrievanceStatus: (id, status) => set(state => ({
        grievances: state.grievances.map(grievance =>
          grievance.id === id ? { ...grievance, status } : grievance
        )
      })),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      setError: (error) => set({ error }),
      
      toggleTheme: () => set(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),
      
      toggleSidebar: () => set(state => ({
        sidebarOpen: !state.sidebarOpen
      })),
      
      openModal: (content) => set({ 
        modalOpen: true, 
        modalContent: content 
      }),
      
      closeModal: () => set({ 
        modalOpen: false, 
        modalContent: null 
      }),
      
      // Helper getters
      getNoticeById: (id) => {
        const { notices } = get()
        return notices.find(notice => notice.id === id)
      },
      
      getEventById: (id) => {
        const { events } = get()
        return events.find(event => event.id === id)
      },
      
      getAlumniById: (id) => {
        const { alumniList } = get()
        return alumniList.find(alumni => alumni.id === id)
      },
      
      // Statistics
      getStatistics: () => {
        const { notices, events, grievances, alumniList } = get()
        return {
          totalNotices: notices.length,
          totalEvents: events.length,
          totalGrievances: grievances.length,
          totalAlumni: alumniList.length,
          pendingGrievances: grievances.filter(g => g.status === 'pending').length,
          resolvedGrievances: grievances.filter(g => g.status === 'resolved').length,
          upcomingEventsCount: events.filter(e => new Date(e.date) > new Date()).length,
        }
      }
    }),
    {
      name: 'university-portal-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        userType: state.userType,
        theme: state.theme,
      })
    }
  )
)

export default useAppStore