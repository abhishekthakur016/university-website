const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt,
  actions,
  hoverable = true,
  className = '',
  padding = 'p-6',
  border = true,
  shadow = 'md'
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  return (
    <div className={`
      bg-white rounded-xl overflow-hidden
      ${border ? 'border border-gray-200' : ''}
      ${shadowClasses[shadow]}
      ${hoverable ? 'hover:shadow-xl transition-shadow duration-300' : ''}
      ${className}
    `}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className={padding}>
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-xl font-bold text-primary mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-gray-600 text-sm">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="text-gray-700">
          {children}
        </div>
        
        {actions && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card