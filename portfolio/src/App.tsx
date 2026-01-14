import Navigation from './components/Navigation'
import CursorImages from './components/CursorImages'

function App() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#fbfafa] relative">
      <Navigation />
      <CursorImages />
      
      <div className="h-full flex flex-col justify-center px-12 md:px-24 relative z-10">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* First Line: 10.sc - positioned top-left */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-black" style={{ mixBlendMode: "difference" }}>
              10.sc
            </h1>
          </div>
          
          {/* Second Line: SZECHING with star - centered with slight offset */}
          <div className="relative mb-6 md:mb-8">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-serif text-black leading-[0.9] relative inline-block" style={{ mixBlendMode: "difference" }}>
              SZECHING
              {/* Purple star above 'g' */}
              <span 
                className="absolute inline-block"
                style={{
                  top: '-12px',
                  left: 'calc(100% - 12%)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="#a990e4">
                  <path d="M10 0 L12 7 L20 7 L14 11 L16 18 L10 14 L4 18 L6 11 L0 7 L8 7 Z" />
                </svg>
              </span>
            </h2>
          </div>
          
          {/* Third Line: multimedia designer - right-aligned */}
          <div className="text-right">
            <p className="text-base md:text-lg lg:text-xl font-sans text-black tracking-wide" style={{ mixBlendMode: "difference" }}>
              multimedia designer
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
