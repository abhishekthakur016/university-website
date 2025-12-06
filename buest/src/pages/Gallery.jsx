import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const categories = [
    'all',
    'campus',
    'events',
    'sports',
    'academic',
    'cultural',
    'research',
    'alumni'
  ]

  const galleryImages = [
    { id: 1, src: 'https://imgs.search.brave.com/vQlHmpiOUnxpuyq5j9widO2XmU_DYVLIG9ACCTQLQi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzk4/MjU1Ny9pbmJvdW5k/Mzc1MTIyNDczNTAw/NTMxNTgwNi5qcGc', title: 'Main Campus Building', category: 'campus', date: '2024-11-15' },
    { id: 2, src: 'https://imgs.search.brave.com/oQkOphFuByGu4j7TaJJPpskBajUUM7ZsW0o-ZX2YA5Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFkZGl1bml2LmFj/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA3L0lNR180/Mjc2LTEwMjR4NTcy/LmpwZw', title: 'Graduation Ceremony 2024', category: 'events', date: '2024-11-10' },
    { id: 3, src: 'https://www.baddiuniv.ac.in/wp-content/uploads/2025/04/483917538_967385752205713_1957316762568668592_n-1024x683.jpg', title: 'Basketball Tournament', category: 'sports', date: '2024-11-05' },
    { id: 4, src: 'https://tse1.mm.bing.net/th/id/OIP.5kPr3-u7FmCPimEre460iAAAAA?pid=Api&P=0&h=180', title: 'Chemistry Laboratory', category: 'academic', date: '2024-10-28' },
    { id: 5, src: 'https://i.ytimg.com/vi/UMbnvlz-uE4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGEgWihlMA8=&rs=AOn4CLBVKCUFcQF09MSEfuw4EcAXS9Yoxw', title: 'Cultural Dance Performance', category: 'cultural', date: '2024-10-20' },
    { id: 6, src: 'https://tse3.mm.bing.net/th/id/OIP.z7tXN4JdmLdFXn6zrGVnNwHaE2?pid=Api&P=0&h=180', title: 'Research Center', category: 'research', date: '2024-10-15' },
    { id: 7, src: 'https://images.shiksha.com/mediadata/images/articles/1655643222phpwcZRes.jpeg', title: 'Alumni Meet 2024', category: 'alumni', date: '2024-10-10' },
    { id: 8, src: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/1127/2018/9/18/Book%20self%20of%20IEC%20University%20Baddi_Library.jpg', title: 'Library Interior', category: 'campus', date: '2024-10-05' },
    { id: 9, src: 'https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/lab/2023/8/24aa191ecb751332638767828.jpg', title: 'Physics Lab Equipment', category: 'academic', date: '2024-09-28' },
    { id: 10, src: 'https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Football Match', category: 'sports', date: '2024-09-20' },
    { id: 11, src: 'https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Tech Symposium', category: 'events', date: '2024-09-15' },
    { id: 12, src: 'https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/lab/2023/8/24aa191ecb751332638767828.jpg', title: 'Art Exhibition', category: 'cultural', date: '2024-09-10' },
  ]

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const imagesPerPage = 9
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const paginatedImages = filteredImages.slice(startIndex, startIndex + imagesPerPage)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">University Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore moments that define our university's journey - from academic excellence to vibrant campus life.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images by title or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedImages.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => openLightbox(image)}
                  hoverable
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="bg-white/50 px-3 py-1 rounded-md">
                            {image.category}
                          </span>
                          <span>{new Date(image.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex justify-center items-center space-x-4 text-gray-300">
                <span className="bg-primary/50 px-4 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery