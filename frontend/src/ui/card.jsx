export function Card({ className = "", children, ...props }) {
    return (
      <div className={`bg-white rounded-xl shadow-sm ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  