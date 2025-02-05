export function Button({ variant = "primary", size = "default", className = "", children, ...props }) {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
    const variants = {
      primary: "bg-[#4318FF] text-white hover:bg-[#3311CC]",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
    }
  
    const sizes = {
      default: "h-10 py-2 px-4",
      icon: "h-10 w-10",
    }
  
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    )
  }
  
  