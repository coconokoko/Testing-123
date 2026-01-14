function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6">
      <div className="flex gap-12">
        <a href="#home" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Home
        </a>
        <a href="#about" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          About
        </a>
        <a href="#work" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Work
        </a>
        <a href="#contact" className="text-black font-sans text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navigation
